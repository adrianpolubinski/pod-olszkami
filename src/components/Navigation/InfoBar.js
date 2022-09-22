import { useEffect, useState } from "react";
import styled from "styled-components";

import SocialList from "./SocialList";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faPhone, faCamera } from "@fortawesome/free-solid-svg-icons"
import { faFacebook} from '@fortawesome/free-brands-svg-icons'

const Div = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    transform: translateY( calc(-100%) );
    transition: .6s;

    width: 100%;
    height: 8rem;

    display: none;
    
    @media (min-width: 768px){
        display: block;
    }

   
    ${props => {
        if(props.isVisible)
            return `
                transform: translateY(0);
            `
    }}

    & nav {
 
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 100%;
        
        margin: 0 10rem;
    }

`

function InfoBar({isTopVisible}){

    const [isVisible, setIsVisible] = useState(true);

    useEffect(()=>{
        setIsVisible(isTopVisible)
    }, [isTopVisible])

    return (
        <Div isVisible={isVisible}>
            <nav>
                <SocialList>
                    <a href="https://www.facebook.com/profile.php?id=100063618430927" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faFacebook} />Facebook
                    </a>
                    <a href="https://instagram.com/kajaki_fracki?igshid=YmMyMTA2M2Y" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faCamera} />Instagram
                    </a>
                </SocialList>

                <SocialList>
                    {/* <a href="/"><FontAwesomeIcon icon={faEnvelope} />Przykład@o2.pl</a> */}
                    <a href="https://www.google.com/maps/place/Kajaki+i+sauna+Fr%C4%85cki,+Fr%C4%85cki+32,+16-506+Fr%C4%85cki/@53.9788196,23.2901432,16z/data=!4m5!3m4!1s0x46e0f7ada55ec777:0xaa9e10921afa3744!8m2!3d53.9791502!4d23.2916037?hl=pl-PL"  target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLocationDot} />
                        <p>Frącki 32</p>
                        <p>16-506 Giby</p>
                    </a>
                    <a href="tel:+48606341300"><FontAwesomeIcon icon={faPhone} />
                        <p>+48 606 341 300</p>
                        <p>+48 696 143 858</p>
                    </a>
                </SocialList>
            </nav>
        </Div>
    )
}

export default InfoBar;