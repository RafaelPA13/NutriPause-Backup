import MenuProfissional from "../Components/MenuProfissional";
import { CgProfile } from "react-icons/cg";
import { AiOutlinePlus } from "react-icons/ai";
import { BsTrash3 } from "react-icons/bs";
import ItemCard from "../Components/ItemCard";
import CafeDaManha from "../assets/CafeDaManha.png";
import Almoco from "../assets/Almoco.png";
import Lanches from "../assets/Lanches.png";
import Janta from "../assets/Janta.png";
import { useState } from "react";
import { addDoc, collection, deleteDoc, doc } from "firebase/firestore";
import { db } from "../Services/firebaseConfig";

function PerfilPaciente() {
  const [selecinado, setSelecionado] = useState("");
  const [text, setText] = useState("");
  const [checkbox, setCheckbox] = useState("");

  const Criar = async (e) => {
    e.preventDefault(e);

    if (text == "" || !checkbox) {
      alert("Digite uma receita válida ou selecione uma refeição");
      return;
    }
    await addDoc(collection(db, "Receitas"), {
      Comida: text,
      Refeicao: checkbox,
    });

    setText("")
    setCheckbox("")
  };

  const Selecionar = (id, alimento) => {
    let Selecionadas = [{ id: id, alimento: alimento }];
    setText(alimento);
    setSelecionado(id);
  };

  const Deletar = async (e) => {
    e.preventDefault(e)
    await deleteDoc(doc(db, "Receitas", selecinado));

    setText("")
    setSelecionado("")
  };

  return (
    <body className="CentroX">
      <div className="barra-topo"></div>
      <MenuProfissional />
      <main className="Main-Com-Menu">
        <CgProfile />
        <h1>Nome Paciente</h1>

        <form>
          <div className="Header-Input">
            <button onClick={Deletar}>
              <BsTrash3 />
            </button>
            <input type="text" value={text} onChange={(e) => {setText(e.target.value);}} placeholder="Adicione a Receita"/>
            <button onClick={Criar}>
              <AiOutlinePlus />
            </button>
          </div>
          <ul className="checkbox">
            <li>
              <label>
                <input name="refeição" type="radio" checked={checkbox === "Café da Manhã" ? "checked" : ""} value={"Café da Manhã"} onChange={(e) => {setCheckbox(e.target.value);}}/>
                <p>Café da manhã</p>
              </label>
            </li>
            <li>
              <label>
                <input name="refeição" type="radio" value={"Almoço"} checked={checkbox === "Almoço" ? "checked" : ""} onChange={(e) => {setCheckbox(e.target.value);}}/>
                <p>Almoço</p>
              </label>
            </li>
            <li>
              <label>
                <input name="refeição" type="radio" value={"Lanches"} checked={checkbox === "Lanches" ? "checked" : ""} onChange={(e) => {setCheckbox(e.target.value);}}/>
                <p>Lanches</p>
              </label>
            </li>
            <li>
              <label>
                <input name="refeição" type="radio" value={"Janta"} checked={checkbox === "Janta" ? "checked" : ""} onChange={(e) => {setCheckbox(e.target.value);}}/>
                <p>Janta</p>
              </label>
            </li>
          </ul>
        </form>

        <ul className="ListaDeCards">
          <ItemCard title={"Café da Manhã"} img={CafeDaManha} Selecionar={Selecionar}/>
          <ItemCard title={"Almoço"} img={Almoco} Selecionar={Selecionar}/>
          <ItemCard title={"Lanches"} img={Lanches} Selecionar={Selecionar}/>
          <ItemCard title={"Janta"} img={Janta} Selecionar={Selecionar}/>
        </ul>
      </main>
    </body>
  );
}
export default PerfilPaciente;
