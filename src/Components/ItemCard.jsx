import { useState, useEffect } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { db } from "../Services/firebaseConfig"
import { doc, collection, onSnapshot, query } from "firebase/firestore"

function ItemCard({title, img, Selecionar}) {

  const [open, setOpen] = useState(false)
  const [Receitas, setReceitas] = useState([])

  useEffect(()=>{
    const q = query(collection(db, 'Receitas'))
    const ler = onSnapshot(q, (querySnapshot)=>{
      let listaDeReceitas = []
      querySnapshot.forEach(((doc)=>{
        listaDeReceitas.push({...doc.data(), id: doc.id})
      }))
      setReceitas(listaDeReceitas)
    })
    return ()=>ler
  }, [])

  const receitasFiltradas = Receitas.filter(filtro => filtro.Refeicao == title)

  return (
    <li className="Card">
      <div className="Header-Card" style={{backgroundImage:`url(${img})`}}>
        <button onClick={()=>{setOpen(!open)}}>{title} <IoIosArrowForward/></button>
      </div>
      <div className={open ? "Card-Body aberto" : "Card-Body"}>
        <h3>Receitas</h3>
        <ul className="ListaDeReceitas">
          {receitasFiltradas.map((receita,i)=>(
            <li key={i}>
              <p onClick={()=>Selecionar(receita.id, receita.Comida)}>{receita.Comida}</p>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
};

export default ItemCard;
