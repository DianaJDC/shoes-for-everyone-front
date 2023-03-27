import Button from "../../components/Button";

const Login = () => {
  return <div> 
  <div className="text-red-900">EMAIL</div>
  <input id="email" type="email" placeholder="EMAIL"></input>
  <div className="text-red-900">SENHA</div>
  <input id="email" type="email" placeholder="SENHA"></input>
  <div>
  <Button>Entrar</Button>
  </div>
  
  </div>;
};

export default Login;
