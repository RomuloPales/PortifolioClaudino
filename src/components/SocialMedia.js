    import styled from "styled-components";
    import React from "react";
    import { IonIcon } from "@ionic/react";
    import { logoInstagram, logoFacebook, logoYoutube, logoLinkedin } from "ionicons/icons";

    const networks = [
    { name: 'Instagram', icon: logoInstagram, link: 'https://www.instagram.com/' },
    { name: 'Facebook', icon: logoFacebook, link: 'https://www.facebook.com/' },
    { name: 'YouTube', icon: logoYoutube, link: 'https://www.youtube.com/' },
    { name: 'LinkedIn', icon: logoLinkedin, link: 'https://www.linkedin.com/' },
    ];

    const backgroundColors = {
    Instagram: "#FCAF45",
    Facebook: "#3B5998",
    YouTube: "#FF0000",
    LinkedIn: "#0077B5"
    };

    function MyComponent(props) {
    const { icons } = props;
    return (
        <MediaKit>
        <ul>
            {icons.map((icon) => (
            <li key={icon.name}>
                <a href={icon.link}target="_blank" rel="noreferrer">
                <IonIcon icon={icon.icon} className="icon" />
                </a>
            </li>
            ))}
        </ul>
        </MediaKit>
    );
    };  

    export default function SocialMedia() {
    return (
        <>
        <MediaKit>
            <MyComponent icons={networks}/>
        </MediaKit>
        </>
    );
    }

    const MediaKit = styled.div`
    display: flex;
    justify-content: center;
    justify-content: space-between;
    width: 20%;
    
    ul {
        display: flex;
        width: 100%;
        align-items: center;
        padding: 0;
        margin: 0; 
        flex-wrap: nowrap;
    }
    li {
        margin-right: 40px;
        margin-left: 10px;
        
    }
    
    li:hover {
        background-color: #F44336; 
        border-radius: 50%; 
        cursor: pointer;
        padding: 5px;
        backgroundColor: hoveredIcon === icon.name ? backgroundColors[icon.name] : "transparent" }}
    }
    
    .icon {
        font-size: 28px; 
    }

    .meni {
        display: flex;
        align-items: center;
        justify-content: space-around;
        background-color: #ff1493;
        width: 50%;
    }
    a:hover {
        background-color: ${({ name }) => backgroundColors[name]};
        transform: scale(1.2);
    }
    
    }
    `;
