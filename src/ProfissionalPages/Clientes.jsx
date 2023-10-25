import MenuProfissional from "../Components/MenuProfissional";

import { BsWhatsapp } from 'react-icons/bs'
import { CgProfile } from "react-icons/cg";

import { useState, useEffect } from 'react'
import { db } from "../Services/firebaseConfig";
import { doc, collection, onSnapshot, query } from "firebase/firestore";

function Clientes() {
    const [Clientes, setClientes] = useState([])
    const [Copiado, setCopiado] = useState(false)
    const Clientela = Clientes.filter(cliente => cliente.Aceito == true)

    useEffect(() => {
        const q = query(collection(db, "Pacientes"));
        const ler = onSnapshot(q, (querySnapshot) => {
          let listaDeClientes = [];
          querySnapshot.forEach((doc) => {
            listaDeClientes.push({ ...doc.data(), id: doc.id });
          });
          setClientes(listaDeClientes);
        });
        return () => ler;
    }, []);

    const copiarTel = (telefone) => {
      navigator.clipboard.writeText(telefone).then(()=>{setCopiado(true)})
      setTimeout(()=>{
        setCopiado(false)
      },1000)
    }

    return (
    <body className="CentroX">
      <div className="barra-topo"></div>

      <MenuProfissional />

      <main className="Main-Com-Menu">
        <h1>Clientes</h1>
        <ul className="listaDePedidos">
          {Clientela.map((pedido, i) => (
            <li className="bloco-pedidos" key={i}>
              <CgProfile />
              <h1>{pedido.Nome}</h1>
              <div>
                <a href="/perfilpaciente">Cardápio</a>
                <button onClick={()=>{copiarTel(pedido.Telefone)}}>{Copiado ? 'Copiado!' : <BsWhatsapp/>}</button>
              </div>
            </li>
          ))}
        </ul>
      </main>
    </body>
  );
}
export default Clientes;
