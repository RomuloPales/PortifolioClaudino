import styled from "styled-components";
import ideiaImg from "../style/img/ideia.png";
import treiningIMG from "../style/img/treinamento.png";
import consultImg from "../style/img/consultoria.png";
import FooterServices from "./FooterServices";

const services = [
  {
    image: ideiaImg,
    title: "Projetos",
    description:
      "Desenvolvimento de projetos elétricos e PDA – Proteção contra Descargas Atmosféricas, com a utilização de ferramentas BIM, visualização 3D, compatibilização de projetos, quantitativo de materiais, atendimento para todo o Brasil.",
  },
  {
    image: treiningIMG,
    title: "Consultorias",
    description:
      "Consultoria particular online para solução de dúvidas e análise de projetos elétricos e SPDAConsultoria particular online para solução de dúvidas e análise de projetos elétricos e .",
  },
  {
    image: consultImg,
    title: "Treinamento",
    description:
      "Treinamento de projetos elétricos em Revit Mep. Torne-se um especialista em projetos elétricos desenvolvidos em BIM.",
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
  display: flex;
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

  @media (max-width: 768px){
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
    
    font-size: 25px;
    font-family: sans-serif;
    padding-bottom: 15px;
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
    max-width: 10vh;
    max-height: 14vh;
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
  display: flex;
  max-height: 100%;
  max-width: 100%;
  margin: 0 auto;
  margin-bottom: 0px;
`;
