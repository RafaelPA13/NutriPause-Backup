import Nome from "../assets/Nutripause.png";
import Logo from '../assets/Logo.png'
import { RiArrowRightSLine } from 'react-icons/ri'

function MenuPaciente() {
    function AlterarMenu(){
        const nav = document.getElementById('nav')
        nav.classList.toggle('aberto')
    }

  return (
   <header className="header-menu">
    <img src={Nome} alt="Nome"/>
        <nav id='nav'>
            <button id="btn-menu" onClick={AlterarMenu}>
                <span className="hamburguer"></span>
            </button>
            <ul className="menu">
                <li>
                    <a href="">Home</a>
                    <RiArrowRightSLine/>
                </li>
                <li>
                    <a href="">Quem Somos</a>
                    <RiArrowRightSLine/>
                </li>
                <li>
                    <a href="">Perfil Médico</a>
                    <RiArrowRightSLine/>
                </li>
            </ul>
        </nav>
   </header> 
  )
}
export default MenuPaciente;
