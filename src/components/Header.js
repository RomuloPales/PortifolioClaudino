import styled from "styled-components";
import Logo from "./Logo";
import MenuItens from "./MenuItens";

export default function Header() {
  return (
    <>
      <Section>
        <Logo />
        <MenuItens />
      </Section>
    </>
  );
}

const Section = styled.div`
  display: flex;
`;
