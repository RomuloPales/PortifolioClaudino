import styled from "styled-components";
import { mail } from "ionicons/icons";
import SocialMedia from "../header/SocialMedia";

export default function Footer() {
  return (
    <>
      <ContentFooter>
        <FooterService>
          <FooterTitle>
            <h1> Redes Sociais</h1>
          </FooterTitle>
          <NewSocialMedia>
            <SocialMedia />
          </NewSocialMedia>
          <p> Contato</p>
          <span>
            {" "}
            <ion-icon icon={mail}></ion-icon> <p4>juniorbarretotj@hotmail.com</p4>{" "}
          </span>
        </FooterService>
      </ContentFooter>
    </>
  );
}

const ContentFooter = styled.div`
  background-color: #29282a;
  width: 100%;
  height: 100%;
`;

const FooterService = styled.div`
  padding-left: 70px;
  padding-right: 70px;
  padding-bottom: 31px;
  padding-top: 20px;
  display: flex;
  align-items: center;
  margin: 0 auto;
  flex-direction: column;
  span {
    justify-content: center;
    width: 100%;
    display: flex;
    align-items: center;
    font-family: "Inter", sans-serif;
    font-size: 17px;
    font-weight: 300;
    line-height: 31px;
    color: #ffffff;
    font-style: normal;
    ion-icon{
    margin-right: 10px ;
    }
  }
  p {
    font-family: "Inter", sans-serif;
    font-size: 30px;
    font-weight: 400;
    line-height: 30px;
    color: #ffffff;
    padding: 10px 20px 30px 20px;
  }
`;
const FooterTitle = styled.div`
  
  padding: 10px 20px 20px 10px;
  width: 100%;
  display: flex;
  justify-content: center;

  h1 {
    font-family: "Inter", sans-serif;
    font-size: 35px;
    font-weight: 400;
    line-height: 30px;
    color: #ffffff;
    font-style: normal;
  }
`;
const NewSocialMedia = styled.div`
  align-items: center;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 10px 20px 30px 20px;

  li{
    
    margin-left: 10px;
}
  .icon {
    font-size: 18px;
  }
`;
