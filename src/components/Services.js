import styled from "styled-components";
import ideia from "../components/style/img/ideia.png";
import treinamento from "./style/img/treinamento.png";
import consultoria from "./style/img/consultoria.png";

export default function Services() {
  return (
    <>
      <Header>
        <h2> Conheça os serviços</h2>
      </Header>
      <MainContainer>
        <Content>
          <div>
            <img src={ideia} alt="Where does it come from?" />
            <h3>Where does it come from?</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
          </div>

          <div>
            <img src={consultoria} alt="Where does it come from?" />
            <h3>Where does it come from?</h3>
            <p>Descrição do serviço 2</p>
          </div>

          <div>
            <img src={treinamento} alt="Where does it come from?" />
            <h3>Where does it come from?</h3>
            <p>Descrição do serviço 3</p>
          </div>
        </Content>
      </MainContainer>
    </>
  );
}

const Header = styled.div`
  background-color: #363636;
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
  background-color: #363636;
  display: flex;
  justify-content: space-between;
  margin: auto;
  padding-left: 70px;
  padding-right: 70px;
  padding-top: 40px;
  padding-bottom: 31px;
  height: 60vh;
  flex-direction: row;
`;

const Content = styled.div`
  background-color: pink;
  width: 60%;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding: 0 20px;
  img{
  width: 30%;

  }
`;

