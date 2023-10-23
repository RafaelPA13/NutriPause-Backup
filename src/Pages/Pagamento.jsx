import Cartoes from '../assets/Cartoes.png'
import Pix from '../assets/pix.png'
import Boleto from '../assets/Boleto.png'

function Pagamento(){
    return(
        <body className="CentroX">
            <header className="barra-topo"></header>
            <main>
                <h1 className="titulos-pagamentos">Dados Pessoais</h1>
                <h3 className="subtitulos-pagamentos">Solicitamos apena dados essenciais para a realisação do pagamento.</h3>
            
                <div className="bloco-pagamento">
                    <label className="label">Nome:</label>
                    <input type="text" className="caixa-texto"/>
                    <label className="label">Email:</label>
                    <input type="text" className="caixa-texto"/>
                    <label className="label">CPF:</label>
                    <input type="text" className="caixa-texto"/>
                    <label className="label">Telefone/Celular:</label>
                    <input type="text" className="caixa-texto"/>
                </div>

                <h1 className="titulos-pagamentos">Pagamento</h1>
                <h3 className="subtitulos-pagamentos">Escolha uma forma de pagamento.</h3>

                <div className="bloco-pagamento">
                    <ul className="radio-group">
                        <li>
                        <div>
                            <input type="radio"/>
                            <h1>Cartão de Crédito</h1>
                        </div>
                            <img src={Cartoes} alt="cartoes"/>
                        </li>
                        <li>
                            <input type="radio"/>
                            <h1>Cartão de Débito</h1>
                            <img src={Cartoes} alt="cartoes"/>
                        </li>
                        <li>
                            <input type="radio"/>
                            <h1>Pix</h1>
                            <img src={Pix} alt="pix"/>
                        </li>
                        <li>
                            <input type="radio"/>
                            <h1>Boleto</h1>
                            <img src={Boleto} alt="boleto"/>
                        </li>
                    </ul>
                </div>

                <h1 className="titulos-pagamentos">Revisão</h1>

                <div className="bloco-pagamento">
                    <div className='total'>
                        <h1>Total</h1>
                        <p>R$:100</p>
                    </div>
                </div>

                <a href="/homepaciente" className='btn'>Pagar</a>
            </main>
        </body>
    )
}
export default Pagamento