import styled from "styled-components";

export default function MenuItens() {
  return (
    <>
      <ItensMenu>
        <ItemUm>
          <h1> Projetos elétricos</h1>
        </ItemUm>
        <ItemDois>
          <h1> Contato</h1>
        </ItemDois> 
      </ItensMenu>
    </>
  );
}

const ItensMenu = styled.div`
  width: 55%;
  display: flex;
  justify-content: space-around;
  
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
  :hover{
  cursor: pointer;
  }
`;

const ItemDois = styled.div`
  width: 50%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
