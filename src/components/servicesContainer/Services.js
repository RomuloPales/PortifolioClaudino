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
    <>
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
          <FooterServices/>
        </Content>
  
      </MainContainer>
    </>
  );
}



const Header = styled.div`
  background-color: #29282A;
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
  background-color: #29282A;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding-left: 70px;
  padding-right: 70px;
  padding-top: 40px;
  padding-bottom: 31px;
  flex-direction: row;
  align-items: center;
`;

const Content = styled.div`
  width: 60%;
  height: auto
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 0 20px;
  word-wrap: break-word;
  box-sizing: border-box
`;

const ContendUper = styled.div`
  height: fit-content;
  display: flex;
  justify-content: space-around;
  .areaOne {
    
    width: 33%;
    display: flex;
    flex-direction: column;
    padding: 10px;
    margin-right: 20px;
    
  }
  .area2 {
    
    padding: 10px;
    width: 33%;
    display: flex;
    flex-direction: column;
    margin-right: 20px;
  }
  .area3 {
    
    padding: 10px;
    width: 33%;
    display: flex;
    flex-direction: column;
    margin-right: 20px;
  }
 
  .textTittle{
    color: #ffffff;
    text-align: center;
    margin-top: 10px;
    font-size: 30px;
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
    max-height: 10vh;
    margin: 0 auto;
    word-wrap: break-word;
`;

const Conteudo = styled.img`
  display: flex;
  height: 100%;
  margin: 0 auto;
  margin-bottom: 30px;
`;
