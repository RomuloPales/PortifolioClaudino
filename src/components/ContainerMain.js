import styled from "styled-components";
import img from "./style/img/electricalProject.png";

export default function ContainerMain() {
  return (
    <>
      <Container>
        <Content>
          <SideA>
            <ImagemBox src={img} alt="imagem" />
            <div> aaaaaaaaa</div>
          </SideA>
          <SideB> </SideB>
        </Content>
      </Container>
    </>
  );
}

const Container = styled.div`
  background-color: red;
  display: flex;
  justify-content: space-between;
  background-color: red;
  margin: 0 auto;
  padding-left: 070px;
  padding-right: 070px;
  padding-top: 40px;
  padding-bottom: 31px;
`;
const Content = styled.div`
  background-color: blue;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align
  margin: 0 auto;
`;

const SideA = styled.div`
  width: 50%;
`;
const SideB = styled.div`
  width: 50%;
  margin: 0 auto;
  background-color: purple;
`;

const ImagemBox = styled.img`
  width: 30%;
`;
