import "../App.css";
import mulher from "../assets/mulher.png";
import { CgProfile } from "react-icons/cg";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { MdAttachMoney } from "react-icons/md";
import { BsFillCalendarWeekFill } from "react-icons/bs";
import { BiLogIn } from "react-icons/bi";
import { FaWpforms } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import Stars from "../assets/Stars.png";

function Apresenstacao() {
  const Avaliacoes = [
    {
      cliente: "Paula Torres",
      texto:
        "Meus resultados tem sido muito positivos! Me sinto muito bem tratada, por profissionais de alta qualidade.",
      img: Stars,
    },
    {
      cliente: "Ana Paula Pereira",
      texto:
        "Tudo bem rápido, barato. Com 3 semanas de acompanhamento e dieta já me senti muito melhor.",
      img: Stars,
    },
    {
      cliente: "Isabella Gomes",
      texto:
        "Maravilhoso! Uso, profissionais muito bons, tratamento de qualidade.",
      img: Stars,
    },
    {
      cliente: "Elma Lurdes",
      texto:
        "O diferencial é que tem médicos avaliando e são tratamentos que funcionam.",
      img: Stars,
    },
  ];

  return (
    <body className="CentroX">
      <header className="banner">
          <h1>Saiba tudo sobre a menopausa</h1>
          <p>
            Sem salas de esperas ou conversas constrangedoras. Com tratamentos
            para ajudar todas as mulheres.
          </p>
          <img src={mulher} alt="Banner" />
          <a href="/planos" className="btn-banner">Assine já</a>
      </header>
      <main>
        <ul className="beneficios">
          <li>
            <div className="icone-beneficios">
              <CgProfile />
            </div>
            <p>Médicos disponíveis para acompanhamentos </p>
          </li>
          <li>
            <div className="icone-beneficios">
              <AiOutlineUnorderedList />
            </div>
            <p>Dietas feitas por médicos especializados</p>
          </li>
          <li>
            <div className="icone-beneficios">
              <MdAttachMoney />
            </div>
            <p>Ótimo custo beneficio</p>
          </li>
          <li>
            <div className="icone-beneficios">
              <BsFillCalendarWeekFill />
            </div>
            <p>Controle de suas atividades do cotidiano</p>
          </li>
        </ul>

        <h1 className="titulos-principais">Como Funciona</h1>
        <ul className="tutorial">
          <li>
            <BiLogIn />
            <h2>Faça Login</h2>
            <p>
              Primeiramente, crie ou cadastre-se em nosso app, para ter acesso
              aos serviços oferecidos.
            </p>
          </li>
          <li>
            <FaWpforms />
            <h2>Questionário Online</h2>
            <p>
              Em pouco tempo, você responde perguntas importantes sobre seu
              histórico de saúde, que será mandado para um especialista.
            </p>
          </li>
          <li>
            <FaUserDoctor />
            <h2>Diagnóstico Médico</h2>
            <p>
              Um de nossos médicos especializados, irá analisar suas resposta e
              dar dieta e exercícios específicos para sua características.
            </p>
          </li>
        </ul>

        <h1 className="titulos-principais">
          Avaliações de clientes satisfeitos
        </h1>
        <ul className="avaliacoes">
          {Avaliacoes.map(({ cliente, texto, img }) => (
            <li>
              <img src={img} alt="Avaliacao" />
              <p>{texto}</p>
              <h3>{cliente}</h3>
            </li>
          ))}
        </ul>
      </main>
    </body>
  );
}
export default Apresenstacao;
