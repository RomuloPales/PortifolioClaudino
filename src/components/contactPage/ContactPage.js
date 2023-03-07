import styled from "styled-components";
import Footer from "../footer/Footer";
import Header from "../header/Header";


export default function ContactPage(){
return (
    <>
    
  <Header/>
  <LayoutForm> </LayoutForm>
  <NewFooter/>
    </>
    
    )

}

const LayoutForm = styled.div`
width: 100%;
background-color: lightblue;
height: 80vh;
;
`


const NewFooter = styled(Footer)` 
position: fixed;
bottom: 0;

`