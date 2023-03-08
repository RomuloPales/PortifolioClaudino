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
`;

const Content = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
`;

const SideA = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 100px;

  h2 {
    margin: 0 auto;
    font-family: sans-serif;
    font-size: 22px;
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
  padding: 30px;
  border: none;

  h3 {
    margin: 0 auto;
    font-family: sans-serif;
    font-size: 15px;
  }
  
`;

const ImagemBox = styled.img`
  max-width: 100%;
  object-fit: contain;
  transform: scale(0.9);
`;

const SideB = styled.div`
  max-width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const ImageBSide = styled.img`
  max-width: 100%;
  max-height: 100%;
  height: 100%;
  transform: scale(0.9);
`;
