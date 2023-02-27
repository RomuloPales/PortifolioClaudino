import styled from "styled-components"
import React from "react"
import Img from '../components/style/img/logo.svg';

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
    background-color: red;
    display: flex;
    justify-content: center;
    align-items: center;
`

const LogoImagem = styled.img`
    width: 50%;
    height: 60%;
    border-radius: 500%;

`