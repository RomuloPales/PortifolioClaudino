import styled from "styled-components";
import ideiaImg from "../style/img/ideia.png";
import treiningIMG from "../style/img/treinamento.png";
import consultImg from "../style/img/consultoria.png";
import FooterServices from "./FooterServices";
import claudinoMurilo from "../style/img/claudinoMurilo.jpg";
import claudinoMuriloBia from "../style/img/claudinoMuriloBia.jpg";
import claudinoMuriloBia2 from "../style/img/claudinoMuriloBia2.jpg";

const services = [
  {
    image: claudinoMurilo,
    title: "Lorem ipsum",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
  },
  {
    image: claudinoMuriloBia,
    title: "Lorem ipsum",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
  },
  {
    image: claudinoMuriloBia2,
    title: "Lorem ipsum",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
  },
];

export default function Services() {
  return (
    <FullContent>
      <Header>
        <h2> Conheça os serviços</h2>
      </Header>
      <MainContainer>
        <Content>
          <ContendUper>
            {services.map((service) => (
              <div className="areaOne">
                <div className="imageArea">
                  <Conteudo src={service.image}></Conteudo>
                </div>
                <div className="textTittle">
                  {" "}
                  <p>{service.title}</p>
                </div>
                <h3>{service.description}</h3>
              </div>
            ))}
          </ContendUper>
        </Content>
        <FooterServices />
      </MainContainer>
    </FullContent>
  );
}

const FullContent = styled.div`
  background-color: #29282a;
`;
const Header = styled.div`
  background-color: #29282a;
  padding: 15px 0 0 0;
  font-family: "Open Sans", Sans-serif;
  font-size: 31px;
  font-weight: 700;
  text-transform: uppercase;
  margin: 0 auto;
  color: #ffffff;
  display: flex;
  justify-content: center;
`;

const MainContainer = styled.div`
  width: 100%
  display:flex;
  margin: 0 auto;
  padding: 40px 70px 31px 70px;
  align-items: center;
  @media (max-width: 768px){
  padding: 0;
  }
`;

const Content = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  padding: 0 20px;
  word-wrap: break-word;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 0;
  }
`;

const ContendUper = styled.div`
  width: 60%;
  height: fit-content;
  display: flex;
  justify-content: space-around;

  @media (max-width: 768px){
    flex-direction: column; 
    
  }

  .areaOne {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 10px;
    margin-right: 20px;
  
    
  }
  .textTittle{
    color: #ffffff;
    text-align: center;
    justify-content: center;
    
    font-size: 25px;
    font-family: sans-serif;
    padding: 15px 0px 15px 0px;
    font-weight:200;
}
h3{
  
  text-align: justify;
    color: #FFFFFF;
    font-family: "Inter", Sans-serif;
    font-size: 15px;
    font-weight: 300;
    line-height: 1.4;
   
}
.imageArea{
  background-color: red;
    max-width: 16vh;
    max-height: 16vh;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    word-wrap: break-word;

    @media (max-width: 768px){
    max-width: 20vh;
    max-height: 28vh;
  }
`;

  const Conteudo = styled.img`
  background-color: pink;
    display: flex;
    height: auto;
    width: 100%;
    margin: 0 auto;
    margin-bottom: 0px;
  `;
