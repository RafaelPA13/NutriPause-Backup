import Logo from '../assets/Logo.png'

function PagInicial(){
    return(
        <body className='CentroXY'>
            <img className='logo' src={Logo} alt="Logo"/>
            <main className='bloco'>
                <h1>Seja bem vindo ao nosso APP</h1>
                <h2>Deseja entrar como:</h2>
                <a href="/loginpaciente">Cliente</a>
                <p>ou</p>
                <a href="/loginprofissional">Profissional</a>
            </main>
        </body>
    )
}
export default PagInicial