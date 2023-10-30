import MenuPaciente from '../Components/MenuPaciente'

import { CgProfile } from 'react-icons/cg'
import { BsWhatsapp } from 'react-icons/bs'

import estrelas from '../assets/Estrelas-Vermelhas.png'

import { useState } from 'react'

function PerfilMedico(){
    const [Copiado, setCopiado] = useState(false)

    const copiarTel = (telefone) => {
        navigator.clipboard.writeText(telefone).then(()=>{setCopiado(true)})
        setTimeout(()=>{
          setCopiado(false)
        },1000)
    }

    return(
        <body>
            <MenuPaciente/>
            <header className='banner-profissional'>
                <CgProfile/>
                <h1>Nome</h1>
            </header>
            <main className='perfil-profissionl'>
                <div className='estrelas'><img src={estrelas} alt="estrelas"/></div>
                <button className='btn-copiar' onClick={()=>{copiarTel(123456789)}}>{Copiado ? 'Copiado!' : <BsWhatsapp/>}</button>
            </main>
        </body>
    )
}
export default PerfilMedico