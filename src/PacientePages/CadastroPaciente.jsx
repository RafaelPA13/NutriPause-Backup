import { useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../Services/firebaseConfig";
import { useNavigate } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../Services/firebaseConfig";

import Logo from "../assets/Logo.png";


function CadastroPaciente() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const navigate = useNavigate();

  const Cadastrar = async (e) => {
    if (nome == "" || email == "" || password == "" || confirmPassword == "") {
      alert("Preencha os dados corretamente.");
    }

    if (password != confirmPassword) {
      alert("Suas senhas estão diferentes.");
    }

    await addDoc(collection(db, "Pacientes"), {
      Nome: nome,
      Email: email,
      Senha: password
    })

    createUserWithEmailAndPassword(email, password);

    setNome("")
    setEmail("")
    setPassword("")
    setConfirmPassword("")
  };

  if (user) {
    navigate("/loginpaciente");
  }

  if (loading) {
    return (
      <body className="CentroXY">
        <div className="carregando"></div>
      </body>
    );
  }

  return (
    <body className="CentroXY">
      <h1 className="titulo">Paciente</h1>
      <main className="bloco-login-cadastro">
        <img src={Logo} alt="Logo " />
        <h1>Cadastre-se</h1>
        <p className="label">Nome:</p>
        <input className="caixa-texto" type="text" value={nome} onChange={(e) => {setNome(e.target.value)}}/>

        <p className="label">Email:</p>
        <input className="caixa-texto" type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>

        <p className="label">Senha:</p>
        <input className="caixa-texto" type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>

        <p className="label">Confirme senha:</p>
        <input className="caixa-texto" type="password" value={confirmPassword} onChange={(e) => {setConfirmPassword(e.target.value)}}/>

        <a href="/loginpaciente">Já sou cadastrada</a>
        <button onClick={Cadastrar}>Cadastrar</button>
      </main>
    </body>
  );
}
export default CadastroPaciente;
