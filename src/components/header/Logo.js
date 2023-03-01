import styled from "styled-components"
import React from "react"
import Img from '../style/img/logo.png';

export default function Logo(){

return(
    <>
    <Section>
        
    <LogoImagem src= {Img} alt=".logo"/>
    </Section>
    </>
    
    )
}

const Section = styled.div`
    
    width: 25%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
    
    :hover{
    cursor: pointer;
    }
`

const LogoImagem = styled.img`
    width: 65%;
    height: 100%;
    margin: 0 auto;
    object-fit: contain;
    left: 0;
    transform: scale(1.6);
`