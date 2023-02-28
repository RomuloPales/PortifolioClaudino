import styled from "styled-components";

export default function MenuItens() {
  return (
    <>
      <ItensMenu>
        <ItemUm> aaaasssaaaaaaaaaa</ItemUm>
        <ItemDois> eeeeeeesdsdeeeeee </ItemDois>
      </ItensMenu>
    </>
  );
}

const ItensMenu = styled.div`
width: 75%;
display: flex;
justify-content: space-around;
`


const ItemUm = styled.div`
  background-color: yellow;
  width: 50%;

`;

const ItemDois = styled.div`
  width: 50%;
  height: 50px;
  background-color: blue;
`;
