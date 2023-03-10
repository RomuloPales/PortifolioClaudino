import styled from "styled-components";
import { Link } from "react-router-dom";
import { IonIcon } from "@ionic/react";
import { reorderFour, closeCircleOutline } from "ionicons/icons";

export default function MenuItens() {
  return (
    <>
      <ItensMenu>
        <ItemUm>
          <a href="#projetos">
            <h1> Projetos elétricos</h1>
          </a>
        </ItemUm>
        <ItemDois>
          <Link to="/contato">
            <h1> Contato</h1>
          </Link>
        </ItemDois>
        <ButtonMenu>
          {" "}
          <StyledIonIcon icon={reorderFour} />
        </ButtonMenu>
      </ItensMenu>
    </>
  );
}

const ItensMenu = styled.div`
  width: 55%;
  display: flex;
  justify-content: space-around;
  opacity: 1;
  animation: fadeIn 1s ease-in-out;

  h1:hover {
    transition-delay: 0.03s;
    color: #ffd700;
    cursor: pointer;
  }
  
`;

const ItemUm = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;

  a[href="#projetos"]:hover {
    transition: all 0.3s ease-in-out;
    color: #ffd700;
    cursor: pointer;
  }
  @media (max-width: 768px) {
    display: none;

    
  }
`;

const ItemDois = styled.div`
  width: 50%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    display: none;
  }
`;

const ButtonMenu = styled.button`
  background-color: #ffffff;
  border: none;
  padding: 10px;
  cursor: pointer;
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

const StyledIonIcon = styled(IonIcon)`
  font-size: 1.5rem;
  color: red;
`;
