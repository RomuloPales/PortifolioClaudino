import styled from "styled-components";
import Logo from "./Logo";
import MenuItens from "./MenuItens";
import SocialMedia from "./SocialMedia";

export default function Header() {
  return (
    <>
      <Section>
        <Logo />
        <MenuItens />
        <SocialMedia/>
      </Section>
    </>
  );
}

const Section = styled.div`

  
  display: flex;
  background-color: pink;
  height: 50px;
  padding-left: 070px;
  padding-right: 070px;
  padding-top: 10px;

  
`;
