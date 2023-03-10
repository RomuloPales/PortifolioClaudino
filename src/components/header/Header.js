import styled from "styled-components";
import MenuItens from "./MenuItens";
import SocialMedia from "./SocialMedia";
import { Link } from "react-router-dom";
import { IonIcon } from "@ionic/react";
import { reorderFour, closeCircleOutline } from "ionicons/icons";
import React from "react";
import Img from '../style/img/logo.png';

export default function Header() {
  return (
    <>
      <Section>
        <ContainerItens>
          <LogoSection to="/">
            <LogoImagem src={Img} alt=".logo" />
          </LogoSection>
          <MenuItens />
          <ButtonMenu>
          {" "}
          <StyledIonIcon icon={reorderFour} />
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
    justify-content: space-around;
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
`;

const ButtonMenu = styled.button`
  background-color: #ffffff;
  border: none;
  padding: 10px;
  cursor: pointer;
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