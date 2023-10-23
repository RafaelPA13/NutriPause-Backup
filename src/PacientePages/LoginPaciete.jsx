import { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../Services/firebaseConfig";
import { useNavigate } from 'react-router-dom';

import Logo from "../assets/Logo.png";

function LoginPaciente() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();
   
  function Logar(e) {
    e.preventDefault();
    signInWithEmailAndPassword(email, password)
  }
  
  if (user) {
    navigate(`/apresentacao`);
  }

  
  if (loading) {
    return (  
      <body className="CentroXY">
        <div className="carregando"></div>
      </body>
    );
  }
  
  if (error) {
    return (
      <body className="CentroXY">
        <main className="Avisos">
          <h1>Email ou senha invalidos</h1>
          <a href="/loginpaciente">Voltar</a>
        </main>
      </body>
    );
  }

  return (
    <body className="CentroXY">
      <h1 className="titulo">Paciente</h1>
      <main className="bloco-login-cadastro">
        <img src={Logo} alt="Logo" />
        <h1>Login</h1>
        <p className="label">Email:</p>
        <input className="caixa-texto" type="email" id="email" onChange={(e) => setEmail(e.target.value)}/>
        <p className="label">Senha:</p>
        <input className="caixa-texto" type="password" id="senha" onChange={(e) => setPassword(e.target.value)}/>
        <a href="/cadastropaciente">Cadastre-se</a>
        <button onClick={Logar}>Entrar</button>
      </main>
    </body>
  );
}
export default LoginPaciente;
