import ContainerMain from "./mainContainer/ContainerMain"
import Header from "./header/Header"
import Services from "./servicesContainer/Services"
import Projects from "./projectscontent/Projects"
import Footer from "./footer/Footer"

export default function App(){

    return (

        <> 
            <Header/>
            <ContainerMain/>
            <Services/>
            <Projects/>
            <Footer/>
        </>
    )
}