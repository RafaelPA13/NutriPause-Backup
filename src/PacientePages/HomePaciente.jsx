import MenuPaciente from "../Components/MenuPaciente";
import ItemCard from '../Components/ItemCard'
import CafeDaManha from '../assets/CafeDaManha.png'
import Almoco from '../assets/Almoco.png'
import Lanches from '../assets/Lanches.png'
import Janta from '../assets/Janta.png'

function HomePaciente() {
  return (
    <body className="CentroX">
      <div className="barra-topo"></div>
      <MenuPaciente />
      <main className="Main-Com-Menu">
        <div>
          <h1>calendário</h1>
        </div>
        <ul className="ListaDeCards">
          <ItemCard title={"Café da Manhã"} img={CafeDaManha} />
          <ItemCard title={"Almoço"} img={Almoco} />
          <ItemCard title={"Lanches"} img={Lanches} />
          <ItemCard title={"Janta"} img={Janta} />
        </ul>
      </main>
    </body>
  );
}
export default HomePaciente;
