import styled from "styled-components";
import MenuItens from "./MenuItens";
import SocialMedia from "./SocialMedia";
import { Link } from "react-router-dom";
import { IonIcon } from "@ionic/react";
import { closeCircleOutline, reorderFour } from "ionicons/icons";
import { useState } from "react";
import React from "react";
import Img from '../style/img/logo.png';

export default function Header() {

  const [iconeAtivo, setIconeAtivo] = useState(reorderFour);

  const handleButtonClick = () => {
    const iconeAtual = iconeAtivo === reorderFour ? closeCircleOutline : reorderFour;
    setIconeAtivo(iconeAtual);
  };
  return (
    <>
      <Section>
        <ContainerItens>
          <LogoSection to="/">
            <LogoImagem src={Img} alt=".logo" />
          </LogoSection>
          <MenuItens />
          <ButtonMenu onClick={handleButtonClick}>
          {" "}
          <StyledIonIcon icon={iconeAtivo} />
        </ButtonMenu>
          <SocialMedia />

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
  padding-left: 7.5vh;
  padding-right: 7.5vh;
  padding-top: 10px;
  padding-bottom: 5px;
`;

const ContainerItens = styled.div`
  justify-content: space-between;
  display: flex;
  margin: 0 auto;
  min-width: 70%;
  
  @media (max-width: 768px) {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
  }
`;

const LogoSection = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  object-fit: contain;
  :hover {
    cursor: pointer;
  }
`;

const LogoImagem = styled.img`
  max-width: 200%;
  max-height: 200%;
  object-fit: contain;
  @media (max-width: 768px) {
    max-width: 120%;
    max-height: 120%;
  }
`;

const ButtonMenu = styled.button`
  border: none;
  padding: 10px;
  cursor: pointer;
  background-color: #ffffff;
  display: none;
  margin: 0 auto;
  @media (max-width: 768px) {
    display: block;
    
  }
`;

const StyledIonIcon = styled(IonIcon)`
  font-size: 1.5rem;
  color: red;
`;