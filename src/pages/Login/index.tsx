import Button from "../../components/Button";
import LabelInput from "../../components/LabelInput";
import "../Login/login.css";

const Login = () => {
  return (
    <div className="rectangledm">
      <div>
        <div className="emaildm">
          <LabelInput labelText="Email"></LabelInput>
        </div>
        <div>
          <LabelInput labelText="Senha"></LabelInput>
        </div>
        <div>
          <Button>Entrar</Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
