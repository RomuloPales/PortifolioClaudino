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
  {
    name: "Instagram",
    icon: logoInstagram,
    link: "https://www.instagram.com/",
  },
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
  width: 30%;

  li:hover {
    box-shadow: 0 0 5px ${({ name }) => backgroundColors[name]};
    border-radius: 50%;
    cursor: pointer;
  }

  .icon {
    font-size: 20px;
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
  justify-content: center;
  padding: 5px;
  margin: 0;
`;

const StyledLi = styled.li`
  margin-left: 25px;
  flex: 1;
`;

const IconWrapper = styled.div`
  background-color: #ffffff;
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;

  &:hover {
    background-color: ${({ name }) => backgroundColors[name]};
  }
`;
