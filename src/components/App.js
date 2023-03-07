import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./header/Header";
import Services from "./servicesContainer/Services";
import Projects from "./projectscontent/Projects";
import Footer from "./footer/Footer";
import ContainerMain from "./mainContainer/ContainerMain";
import ContactPage from "./contactPage/ContactPage";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <>
            <Header />
            <ContainerMain />
            <Services />
            <Projects />
            <Footer />
          </>
        } 
        />
        <Route path="/contato" element={<ContactPage />}/>
      </Routes>
    </BrowserRouter>
  );
}
