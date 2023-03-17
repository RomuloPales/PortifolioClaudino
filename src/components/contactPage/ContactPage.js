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
            <FormContact />
          </SideB>
          <SideC> aaaaaaaaaaaa </SideC>
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
  width: 60%;
  height: 80%;
`;

const SideA = styled.div`
  width: 25%;
  height: 100%;
  @media (max-width: 768px) {
    width: 30%;
  }
`;

const SideB = styled.div`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px 30px 0px 30px;
  width: 50%;
  box-sizing: border-box;
  box-shadow: 1px 1px 5px #ff8c00;
  @media (max-width: 768px) {
    width: 70%;
  }
`;

const SideC = styled.div`
  width: 25%;
  height: 100%;

  @media (max-width: 768px) {
    background-color: green;
    display: none;
  }
`;
