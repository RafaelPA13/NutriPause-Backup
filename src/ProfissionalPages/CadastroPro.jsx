import { useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../Services/firebaseConfig";
import { db } from "../Services/firebaseConfig";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/Logo.png";
import { addDoc, collection } from "firebase/firestore";

function CadastroProfissional() {
  const [userName, setUsername] = useState("");
  const [idade, setIdade] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [telefone, setTelefone] = useState("");
  const [formacao, setFormacao] = useState("");
  const [CRNCRM, setCRNCRM] = useState(""); 
  const [rede, setRede] = useState("");

  const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);
  const navigate = useNavigate();

  const CadastrarProfissional = async (e) => {
    e.preventDefault()

    if(userName == "" || idade == "" || email == "" || password == "" || telefone == "" || formacao == "" || CRNCRM == "" || rede == "")
    {
      alert("Preencha seus dados corretamente")
      return;
    }

    await addDoc(collection(db, "Profissionais"),{
      Nome: userName,
      Idade: idade,
      Email: email,
      Senha: password,
      Telefone: telefone,
      Frmacao: formacao,
      crmcrn: CRNCRM,
      Rede: rede 
    })

    createUserWithEmailAndPassword(email, password);

    setUsername("")
    setIdade("")
    setEmail("")
    setPassword("")
    setTelefone("")
    setFormacao("")
    setCRNCRM("")
    setRede("")
  }

  if (user) {
   navigate('/loginprofissional')
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
      <main className="bloco-cadastro-profissional">
        <img src={Logo} alt="Logo" />
        <h2 className="label">Nome Completo:</h2>
        <input className="caixa-texto" type="label" value={userName} onChange={(e)=>{setUsername(e.target.value)}}/>

        <h2 className="label">Idade:</h2>
        <input className="caixa-texto" type="number" value={idade} onChange={(e)=>{setIdade(e.target.value)}}/>

        <h2 className="label">Email:</h2>
        <input className="caixa-texto" type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>

        <h2 className="label">Senha:</h2>
        <input className="caixa-texto" type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>

        <h2 className="label">N° de telefone:</h2>
        <input className="caixa-texto" type="number" value={telefone} onChange={(e)=>{setTelefone(e.target.value)}}/>

        <h2 className="label">Formação academica:</h2>
        <input className="caixa-texto" type="label" value={formacao} onChange={(e)=>{setFormacao(e.target.value)}}/>

        <h2 className="label">CRN/CRM:</h2>
        <input className="caixa-texto" type="label" value={CRNCRM} onChange={(e)=>{setCRNCRM(e.target.value)}}/>

        <h2 className="label">LinkedIn/Outra rede social:</h2>
        <input className="caixa-texto" type="label" value={rede} onChange={(e)=>{setRede(e.target.value)}}/>

        <h2 className="label">Adicione seu diploma:</h2>
        <input className="caixa-file" type="file" id="foto" />

        <button onClick={CadastrarProfissional}>Criar</button>
      </main>
    </body>
  );
}
export default CadastroProfissional;
