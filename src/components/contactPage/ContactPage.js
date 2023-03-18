import styled from "styled-components";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import FormContact from "./FormContact";
import claudinoSolo from "../style/img/claudino.jpg";

export default function ContactPage() {
  return (
    <>
    <FullContent>
      <Header />
      <Content>
        <FullPage>
          <SideA>
            <h1>Entrar Em Contato</h1>
            <h2>
              Envie um email para <span>Claudinobarretotj@gmail.com</span> ou use o form e nos deixe uma mensagem.
            </h2>
            <img src={claudinoSolo} alt="img"></img>
          </SideA>
          <SideB>
            <h1>Envie Uma Mensagem</h1>
            <FormContact />
          </SideB>
        </FullPage>
      </Content>
      <NewFooter />
    </FullContent>
    </>
  );
}

const FullContent = styled.div`
  min-width: 100%;
`;

const NewFooter = styled(Footer)`
  position: fixed;
  bottom: 0;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 70px;
  height: 95vh;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 20px;
    height: auto;
  }
`;

const FullPage = styled.div`
  display: flex;
  min-width: 60%;
  min-height: 80%;

  @media (max-width: 768px) {
    flex-direction: column;
    min-width: 90%;
    min-height: auto;
  }
`;

const SideA = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  min-width: 50%;
  min-height: 100%;
  box-sizing: border-box;
  padding: 40px 70px;

  img {
    width: 50%;
    border-radius: 50%;
  }

  h1 {
    font-family: sans-serif;
    font-size: 30px;
    margin-bottom: 30px;
    text-align: center;
  }

  h2 {
    text-align: center;
    font-family: sans-serif;
    font-size: 20px;

    span {
      color: #d2691e;
    }
  }

  @media (max-width: 768px) {
    min-width: 100%;
    padding: 20px;
  }
`;

const SideB = styled.div`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 70px;
  min-width: 50%;
  min-height: auto;
  box-sizing: border-box;
  box-shadow: 1px 1px 5px #ff8c00;

  h1 {
    font-family: sans-serif;
    font-size: 18px;
    margin-bottom: 30px;
    text-align: center;
    color: #d2691e;
  }

  @media (max-width: 768px) {
    min-width: 100%;
    padding: 20px;
  }
`;
