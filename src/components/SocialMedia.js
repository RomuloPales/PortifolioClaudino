import styled from "styled-components";
import React from "react";
import { IonIcon } from "@ionic/react";
import {
  logoInstagram,
  logoFacebook,
  logoYoutube,
  logoLinkedin,
} from "ionicons/icons";

const networks = [
  { name: "Instagram",icon: logoInstagram,link: "https://www.instagram.com/"},
  { name: "Facebook", icon: logoFacebook, link: "https://www.facebook.com/" },
  { name: "YouTube", icon: logoYoutube, link: "https://www.youtube.com/" },
  { name: "LinkedIn", icon: logoLinkedin, link: "https://www.linkedin.com/" },
];

const backgroundColors = {
  Instagram: "#FF1493",
  Facebook: "#3B5998",
  YouTube: "#FF0000",
  LinkedIn: "#0077B5",
};

function MyComponent(props) {
  const { icons } = props;
  return (
    <MediaKit>
      <div className="meni">
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
      </div>
    </MediaKit>
  );
}

export default function SocialMedia() {
  return (
    <>
      <MyComponent icons={networks} />
    </>
  );
}

const MediaKit = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 20%;

  li:hover {
    box-shadow: 0 0 5px ${({ name }) => backgroundColors[name]};
    border-radius: 50%;
    cursor: pointer;
  }

  .icon {
    font-size: 25px;
  }

  a:hover {
    background-color: ${({ name }) => backgroundColors[name]};
    transform: scale(1.2);
    box-shadow: inset 0 0 0 2px ${({ name }) => backgroundColors[name]};
  }
`;

const StyledUl = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0;
  margin: 0;
`;

const StyledLi = styled.li`
  margin-left: 30px;
  flex: 1;
`;

const IconWrapper = styled.div`
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;

  &:hover {
    background-color: ${({ name }) => backgroundColors[name]};
  }
`;
