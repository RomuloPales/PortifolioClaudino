import styled from "styled-components";
import claudinoMurilo from "../style/img/claudinoMurilo.jpg";
import claudinoMuriloBia from "../style/img/claudinoMuriloBia.jpg";
import claudinoMuriloBia2 from "../style/img/claudinoMuriloBia2.jpg";
import claudinoTorre from "../style/img/claudinoTorre.jpeg";
import claudinoOlhar from "../style/img/claudinoOlhar.jpeg";
import claudinoTorreGrito from "../style/img/claudinoTorreGrito.jpeg";

const services = [
  {
    image: claudinoMurilo,
    title: "PROJETO PREDIAL - MACAÉ/RJ",
    description:
      "Desenvolvimento de projetos elétricos e PDA – Proteção contra Descargas Atmosféricas, com a utilização de ferramentas BIM, visualização 3D, compatibilização de projetos, quantitativo de materiais, atendimento para todo o Brasil.",
  },
  {
    image: claudinoMuriloBia,
    title: "Ir em varias calouradas",
    description:
      "Desenvolvimento de projetos elétricos e PDA – Proteção contra Descargas Atmosféricas, com a utilização de ferramentas BIM, visualização 3D, compatibilização de projetos, quantitativo de materiais, atendimento para todo o Brasil.",
  },
  {
    image: claudinoMuriloBia2,
    title: "Tirar foto com o taz",
    description:
      "Desenvolvimento de projetos elétricos e PDA – Proteção contra Descargas Atmosféricas, com a utilização de ferramentas BIM, visualização 3D, compatibilização de projetos, quantitativo de materiais, atendimento para todo o Brasil.",
  },
  {
    image: claudinoTorre,
    title: "Ir na torre e falar que não tem medo",
    description:
      "Desenvolvimento de projetos elétricos e PDA – Proteção contra Descargas Atmosféricas, com a utilização de ferramentas BIM, visualização 3D, compatibilização de projetos, quantitativo de materiais, atendimento para todo o Brasil.",
  },
  {
    image: claudinoTorreGrito,
    title: "Mas ainda assim gritar como uma mocinha",
    description:
      "Desenvolvimento de projetos elétricos e PDA – Proteção contra Descargas Atmosféricas, com a utilização de ferramentas BIM, visualização 3D, compatibilização de projetos, quantitativo de materiais, atendimento para todo o Brasil.",
  },
  {
    image: claudinoOlhar,
    title: "Beber pra krl",
    description:
      "Desenvolvimento de projetos elétricos e PDA – Proteção contra Descargas Atmosféricas, com a utilização de ferramentas BIM, visualização 3D, compatibilização de projetos, quantitativo de materiais, atendimento para todo o Brasil.",
  },
];
const Service = ({ image, title, description }) => {
  return (
    <div className="areaOne">
      <div className="imageArea">
        <img src={image} alt={title}></img>
      </div>
      <div className="textTittle">
        {" "}
        <p>{title}</p>
      </div>
      <h3 className="textDescription">{description}</h3>
    </div>
  );
};

export default function Projects() {
  return (
    <>
      <Header>
        {" "}
        <h1> ALGUNS PROJETOS DESENVOLVIDOS </h1>
      </Header>
      <Content>
        <ContendUper>
          {services.map((service, index) => {
            return <Service {...service} key={index} />;
          })}
        </ContendUper>
      </Content>
    </>
  );
}

const Header = styled.div`
  text-align: center;
  padding: 30px;
  h1 {
    color: #000000;
    font-family: "Open Sans", sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 20px;
  }
`;

const Content = styled.div`
  padding-left: 70px;
  padding-right: 70px;

  padding-bottom: 31px;
  display: flex;
  flex-direction: column;

  word-wrap: break-word;
  box-sizing: border-box;
`;
const ContendUper = styled.div`
  width: 65%;
  margin: 0 auto;
  height: fit-content;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
  .areaOne {
    width: 33.3%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .imageArea {
    padding-right: 15px;
    padding-left: 15px;
    max-width: 100%;
    max-height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    word-wrap: break-word;
  }
  .imageArea img {
    max-width: 100%;
    max-height: auto;
    object-fit: cover;
    object-position: center;
    box-sizing: border-box;
  }

  .textTittle {
    color: #000000;
    text-align: left;
    font-family: "Open Sans", sans-serif;
    font-weight: 600;
    font-size: 20px;
    padding: 10px 15px 0px 15px;
    line-height: 20px;
    text-transform: uppercase;

  }

  .textDescription {
   
    padding: 15px 10px 20px 10px;
    color: #4a4a4a;
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 25px;
  }
`;
