import { FaRegPaperPlane } from "react-icons/fa";
import Bolinhas from "../assets/Bolinhas.png";
import Bolota from '../assets/Bolota.png'

function Confirmacao() {
  return (
    <body className="CentroXY">
      <main className="Centralizado">
        <h1>Envio de Dados</h1>
        <p>Suas informações e dados já foram enviadas para um profissional, aguarde o seu plano.</p>
        <FaRegPaperPlane/>
        <img className="bolinhas" src={Bolinhas} alt="bolinhas" />
        <img className='bolota' src={Bolota} alt="Bolota" />
        <img className='bolota2' src={Bolota} alt="Bolota" />
        <a href="" className="btn">Página Principal</a>
      </main>
    </body>
  );
}
export default Confirmacao;
