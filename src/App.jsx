import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PagInicial from './Pages/PagInicial'
import LoginPaciente from './PacientePages/LoginPaciete'
import LoginProfissional from './ProfissionalPages/LoginPro'
import CadastroPaciente from './PacientePages/CadastroPaciente'
import CadastroProfissional from './ProfissionalPages/CadastroPro'
import Apresentacao from './Pages/Apresentacao'
import Confirmacao from './Pages/ConfirmacaoDaCompra'
import HomeProfissional from './ProfissionalPages/HomePro'
import PlanoConsulta from './Pages/PlanoConsulta'
import Pagamento from './Pages/Pagamento'
import HomePaciente from './PacientePages/HomePaciente'
import PerfilPaciente from './ProfissionalPages/PerfilPaciente'
import Pedidos from './ProfissionalPages/Pedidos'
import Clientes from './ProfissionalPages/Clientes'

function App(){
  return(
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<PagInicial/>}/>
          <Route path='/loginpaciente' element={<LoginPaciente/>}/>
          <Route path='/loginprofissional' element={<LoginProfissional/>}/>
          <Route path='/cadastropaciente' element={<CadastroPaciente/>}/>
          <Route path='/cadastroprofissional' element={<CadastroProfissional/>}/>
          <Route path='/apresentacao' element={<Apresentacao/>}/>
          <Route path='/confirmacao' element={<Confirmacao/>}/>
          <Route path='/homeprofissionais' element={<HomeProfissional/>}/>
          <Route path='/planos' element={<PlanoConsulta/>}/>
          <Route path='/pagamento' element={<Pagamento/>}/>
          <Route path='/homepaciente' element={<HomePaciente/>}/>
          <Route path='/perfilpaciente' element={<PerfilPaciente/>}/>
          <Route path='/pedidos' element={<Pedidos/>}/>
          <Route path='/clientes' element={<Clientes/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App