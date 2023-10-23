import Bolinhas from "../assets/Bolinhas.png";
import Bolota from '../assets/Bolota.png'

function PlanoConsulta(){
    return(
        <body className="CentroXY">
        <main className="Centralizado">
          <h1>Plano Consulta</h1>
          <p>Agende uma consulta com o médico e obtenha um acompanhamento alimentar por R$100,00</p>
          <img className='bolinhas' src={Bolinhas} alt="bolinhas" />
          <img className='bolota' src={Bolota} alt="Bolota" />
          <img className='bolota2' src={Bolota} alt="Bolota" />
          <a href="/pagamento" className="btn">Eu Quero!</a>
        </main>
      </body>
    )
}
export default PlanoConsulta