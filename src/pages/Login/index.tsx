import Button from "../../components/Button";
import LabelInput from "../../components/LabelInput";
import React, { useState } from "react";

interface LoginState {
  email: string;
  password: string;
  emailError: string;
  passwordError: string;
  isEmailOk: boolean;
  isPasswordOk: boolean;
}

const initialState: LoginState = {
  email: "",
  password: "",
  emailError: "",
  passwordError: "",
  isEmailOk: false,
  isPasswordOk: false,
};

const Login = () => {
  const [formState, setFormState] = useState<LoginState>(initialState);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /.{8,}/g;

    setFormState({
      ...formState,
      [name]: value,
    });
    if (name === "email") {
      if (emailRegex.test(value)) {
        setFormState((prev) => ({
          ...prev,
          emailError: "",
          isEmailOk: true,
        }));
      } else {
        setFormState((prev) => ({
          ...prev,
          emailError: "Entrada inválida. Informe um endereço de e-mail válido. Por exemplo, dmorag@gmail.com.",
          isEmailOk: false,
        }));
      }
    }

    if (name === "password") {
      if (passwordRegex.test(value)) {
        setFormState((prev) => ({
          ...prev,
          passwordError: "",
          isPasswordOk: true,
        }));
      } else {
        setFormState((prev) => ({
          ...prev,
          passwordError: "A senha deve ter pelo menos 8 caracteres.",
          isPasswordOk: false,
        }));
      }
    }

  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  
    if (!formState.isEmailOk) {
      setFormState((prev) => ({
        ...prev,
        emailError: "Entrada inválida. Informe um endereço de e-mail válido. Por exemplo, dmorag@gmail.com.",
      }));
    }
  
    if (!formState.isPasswordOk) {
      setFormState((prev) => ({
        ...prev,
        passwordError: "A senha deve ter pelo menos 8 caracteres.",
      }));
    }
  };

  return (
    <div className="flex justify-center items-center h-[calc(100vh-80px)]">
      <form
        onSubmit={handleSubmit}
        className="p-10 bg-white rounded shadow-md flex flex-col gap-10 w-[560px]"
      >
        <LabelInput
          type="email"
          labelText="Email"
          name="email"
          placeholder="Email"
          value={formState.email}
          onChange={handleInputChange}
          required
        ></LabelInput>
        {formState.emailError && <div className="text-red-500">{formState.emailError}</div>}

        <LabelInput
          type="password"
          name="password"
          labelText="Senha"
          placeholder="Senha"
          value={formState.password}
          onChange={handleInputChange}
          required
        ></LabelInput>
        {formState.passwordError && <div className="text-red-500">{formState.passwordError}</div>}

        <Button
          type="submit"
          className="self-start"
          disabled={!(formState.isEmailOk && formState.isPasswordOk)}
        >
          Entrar
        </Button>
      </form>
    </div>
  );
};

export default Login;
