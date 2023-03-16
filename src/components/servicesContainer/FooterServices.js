import styled from "styled-components";
import { IonIcon } from "@ionic/react";
import { logoInstagram, logoFacebook, logoWhatsapp,} from "ionicons/icons";

const networks = [
  {
    name: "Instagram",
    icon: logoInstagram,
    link: "https://www.instagram.com/",
  },
  { name: "Facebook", icon: logoFacebook, link: "https://www.facebook.com/" },
  { name: "whatsapp", icon: logoWhatsapp, link: "https://www.linkedin.com/" },  
];
const backgroundColors = {
  Instagram: "#FF1493",
  Facebook: "#3B5998",
  YouTube: "#FF0000",
  whatsapp: "#8CE917",
};

function NewContacts(props) {
  const { icons } = props;
  return (
    <>
      <StyledUl>
        {icons.map((icon) => (
          <StyledLi key={icon.name}>
            <a href={icon.link} target="_blank" rel="noreferrer">
              <IconWrapper name={icon.name}>
                <IonIcon icon={icon.icon} className="icon" />
              </IconWrapper>
            </a>
          </StyledLi>
        ))}
      </StyledUl>
    </>
  );
}
export default function FooterServices() {
  return (
    <>
      <FooterService>
        <h1> Faça seu orçamento sem compromisso</h1>
        <p> Entre em contato</p>
        <ContactMedia>
          <NewContacts icons={networks} />
        </ContactMedia>
        <h1> ATENDIMENTO EM TODO O PAÍS</h1>
      </FooterService>
    </>
  );
}

const FooterService = styled.div`
  background-color: #29282a;
  width: 100%;
  padding-top: 50px;
  color: #ffffff;
  display: flex;
  align-items: center;
  margin: 0 auto;
  flex-direction: column;
  gap: 20px;
  h1 {
    font-family: "Open Sans", Sans-serif;
    font-size: 15px;
    font-weight: 400;
    text-transform: uppercase;
  }
  p {
    font-family: "Open Sans", Sans-serif;
    font-size: 31px;
    font-weight: 600;
    text-transform: uppercase;
  }

  
`;
const ContactMedia = styled.div`
  color: #29282a;
  font-size: 35px;
  justify-content: center;
  display: flex;
  align-items: center;
`;
const StyledUl = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0;
  margin: 0;
`;

const StyledLi = styled.li`
  margin-left: 25px;
  flex: 1;
`;

const IconWrapper = styled.div`
  background-color: #ffffff;
  width: 55px;
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;

  &:hover {
    background-color: ${({ name }) => backgroundColors[name]};
  }
`;
