import styled from "styled-components";
import img from "../style/img/projetos.jpeg";
import quadro from "../style/img/quadro.jpeg";

export default function ContainerMain() {
  return (
    <>
      <Container>
        <Content>
          <SideA>
            <ImagemBox src={img} alt="imagem" />
            <h2> Especialista em projetos elétricos</h2>
            <Button>
              <h2>Entrar em Contato</h2>
            </Button>
          </SideA>
          <SideB>
            <ImageBSide src={quadro} alt="quadro" />
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
  max-height: 60vh;
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
  margin: 0 auto;
  padding: 0 10px;
  padding: 0.5em 1em;
  font-size: 1em;
  font-family: "Inter", Sans-serif;
  font-weight: 800;
  text-transform: uppercase;
  fill: #29282a;
  color: #29282a;
  background-color: #ffb91d;
  border-radius: 5px;
  box-shadow: 0px 0px 22px 0px rgb(0 0 0 / 28%);
  word-break: break-all;
  display: inline-block;
  padding: 30px 30px 30px 30px;
`;

const ImagemBox = styled.img`
  max-width: 100%;
  object-fit: contain;
  transform: scale(0.9);
`;

const SideB = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
`;

const ImageBSide = styled.img`
  max-width: 100%;
  object-fit: cover;
  transform: scale(0.9);
  width: 80%;
  margin: 0 auto;
`;
