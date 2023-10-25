import MenuPaciente from '../Components/MenuPaciente'
import Bolinhas from '../assets/Bolinhas.png'

function SobreNos(){
    return(
        <body className="CentroX">
            <div className="barra-topo"></div>
            <MenuPaciente/>

            <main className="Main-Com-Menu">
                <h1>Nossa História</h1>
                <p className='Sobre-Nos-P'>No cenário da tecnologia moderna, a combinação de conhecimento em processamento de dados e a preocupação com a saúde e o bem-estar tem levado a grandes avanços. Um exemplo notável disso é um grupo de seis estudantes de processamento de dados que se uniram para criar um aplicativo revolucionário voltado para mulheres na menopausa. Os estudantes, Alice, Bruno, Clara, Diego, Eva e Felipe, compartilhavam o interesse comum em desenvolver soluções inovadoras para melhorar a qualidade de vida das pessoas. Eles reconheceram que a menopausa é um período de transição importante na vida das mulheres, e muitas delas enfrentam desafios relacionados à nutrição durante essa fase. Assim, decidiram concentrar seus esforços em criar um aplicativo que fornecesse orientação e suporte nutricional personalizado para mulheres na menopausa.</p>
                <img className='bolinhas' src={Bolinhas} alt="Bolinhas"/>
            </main>
        </body>
    )
}
export default SobreNos