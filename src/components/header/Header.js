import styled from "styled-components";
import Logo from "./Logo";
import MenuItens from "./MenuItens";
import SocialMedia from "./SocialMedia";

export default function Header() {
  return (
    <>
      <Section>
        <ContainerItens>
        <Logo />
        <MenuItens />
        <SocialMedia/>
        </ContainerItens>
      </Section>
    </>
  );
}

const Section = styled.div`
  justify-content: space-between;
  
  margin: 0 auto;
  display: flex;
  height: 45px;
  padding-left: 070px;
  padding-right: 070px;
  padding-top: 10px;
  padding-bottom: 5px;
  
`;
const ContainerItens = styled.div`

display: flex;
margin: 0 auto;
width: 90%;
justify-content: center;

`