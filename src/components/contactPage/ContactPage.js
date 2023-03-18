import styled from "styled-components";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import FormContact from "./FormContact";

export default function ContactPage() {
  return (
    <>
      <Header />
      <Content>
        <FullPage>
          <SideA> aaaa</SideA>
          <SideB>
            <h1>Envie Uma Mensagem</h1>
            <FormContact />
          </SideB>
        
        </FullPage>
      </Content>

      <NewFooter />
    </>
  );
}

const NewFooter = styled(Footer)`
  position: fixed;
  bottom: 0; ;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 70px;
  height: 95vh;
  box-sizing: border-box;
  @media (max-width: 768px) {
    background-color: green;
  }
`;

const FullPage = styled.div`
  display: flex;
  min-width: 60%;
  min-height: 80%;
`;

const SideA = styled.div`
  box-shadow: 1px 1px 5px red;
  width: 50%;
  height: 100%;
  @media (max-width: 768px) {
    width: 30%;
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
  h1{
    font-family: sans-serif;
    font-size: 18px;
    margin-bottom: 30px;
    text-align: center;
    color: #D2691E;
  }
  @media (max-width: 768px) {
    width: 70%;
  }
`;

