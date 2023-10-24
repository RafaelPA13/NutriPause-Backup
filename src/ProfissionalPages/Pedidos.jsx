import MenuProfissional from "../Components/MenuProfissional";

import { CgProfile } from "react-icons/cg";

import { useState, useEffect } from "react";
import { db } from "../Services/firebaseConfig";
import { doc, collection, onSnapshot, query, updateDoc } from "firebase/firestore";

function Pedidos() {
  const [Paciente, setPeaciente] = useState([]);
  const Pedidos = Paciente.filter((paci) => paci.Aceito == false);

  useEffect(() => {
    const q = query(collection(db, "Pacientes"));
    const ler = onSnapshot(q, (querySnapshot) => {
      let listaDePacientes = [];
      querySnapshot.forEach((doc) => {
        listaDePacientes.push({ ...doc.data(), id: doc.id });
      });
      setPeaciente(listaDePacientes);
    });
    return () => ler;
  }, []);

  const aceitar = async (joao)=>{
    await updateDoc(doc(db, 'Pacientes', joao.id),{
        Aceito: !joao.Aceito 
    })
  }

  return (
    <body className="CentroX">
      <div className="barra-topo"></div>
      <MenuProfissional />

      <main className="Main-Com-Menu">
        <h1>Pedidos</h1>
        <ul className="listaDePedidos">
          {Pedidos.map((pedido, i) => (
            <li className="bloco-pedidos" key={i} joao={pedido}>
              <CgProfile />
              <h1>{pedido.Nome}</h1>
              <button className="btn" onClick={()=>aceitar(pedido)}>Aceitar</button>
            </li>
          ))}
        </ul>
      </main>
    </body>
  );
}
export default Pedidos;
