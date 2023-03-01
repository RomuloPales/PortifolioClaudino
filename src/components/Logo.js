import styled from "styled-components"
import React from "react"
import Img from '../components/style/img/usaressa.jpeg';

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
    margin: 0 auto;
    
    :hover{
    cursor: pointer;
    }
`

const LogoImagem = styled.img`
    width: 65%;
    height: 100%;
    margin: 0 auto;
    object-fit: cover;
    left: 0;
    top: 0;

`