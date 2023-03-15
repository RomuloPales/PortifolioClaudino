import styled from "styled-components";
import img from "../style/img/projetos.jpeg";
// import quadro from "../style/img/quadro.jpeg";
import painel from "../style/img/painel.png";
import { Link } from "react-router-dom";


export default function ContainerMain() {
  return (
    <>
      <Container>
        <Content>
          <SideA>
            <ImagemBox src={img} alt="imagem" />
            <h2> Especialista em projetos elétricos</h2>
            <Link to="/contato">
              <Button>
                <h3>Entrar em Contato</h3>
              </Button>
            </Link>
          </SideA>
          <SideB>
            <ImageBSide src={painel} alt="quadro" />
          </SideB>
        </Content>
      </Container>
    </>
  );
}

const Container = styled.div`

  display: flex;
  justify-content: space-between;
  margin: 25px auto 0 auto;
  padding-left: 70px;
  padding-right: 70px;
  padding-top: 40px;
  padding-bottom: 31px;
  max-height: 45vh;
  a{
  display: flex;
  justify-content: center;
  }
  @media (max-width: 768px){
    max-height: 85vh;
  }
`;

const Content = styled.div`
  
  width: 60%;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    
    box-sizing: border-box;
    width: 100%;
   
  }
`;

const SideA = styled.div`

  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 80px;

  h2 {
    margin: 0 auto;
    font-family: "Inter", Sans-serif;
    font-size: 22px;
  }
  @media (max-width: 768px) {
    width: 100%;
    gap: 40px;
    font-size: 28px;

    h2 {
    margin: 0 auto;
    font-family: "Inter", Sans-serif;
    font-size: 14px;
  }
  }
  
`;

const Button = styled.button`
  font-size: 1em;
  font-family: "Inter", Sans-serif;
  font-weight: 800;
  text-transform: uppercase;
  color: #29282a;
  background-color: #FFA500	;
  border-radius: 5px;
  box-shadow: 0px 0px 22px 0px rgb(0 0 0 / 28%);
  word-break: break-all;
  display: inline-block;
  padding: 2em 2em;
  border: none;
  max-width: 100%;
  box-sizing: border-box;

  h3 {
    margin: 0 auto;
    font-family: sans-serif;
    font-size: 15px;
  }

  @media (max-width: 768px) {
    padding: 0.8em 1.5em;
    font-size: 0.8em;
  }

`;


const ImagemBox = styled.img`
  max-width: 100%;
  object-fit: contain;
  transform: scale(0.9);

  @media (max-width: 768px) {
    transform: scale(1.2);
  }
`;

const SideB = styled.div`
  max-width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media (max-width: 768px) {
    max-width: 150%;
  }
`;

const ImageBSide = styled.img`

  max-width: 100%;
  max-height: 100%;
  height: auto;
  @media (max-width: 768px) {
    max-width: 150%
    max-height: 150%;
    margin-top: 20px;
  }
  `;
