import { useEffect, useState } from "react";
import styled from "styled-components";
import Brand from "./Brand";

import MainNav from "./MainNav";
import SocialList from "./SocialList";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faPhone, faCamera } from "@fortawesome/free-solid-svg-icons"
import { faFacebook} from '@fortawesome/free-brands-svg-icons'

const Div = styled.div`
    

    position: fixed;
    top: 0;
    right: 0;

    transform:translateX(100%);
    transition: transform .7s ease;

    height: 100vh;
    width: 28rem;
    background-color: white;

    display: flex;
    flex-direction: column;

    z-index: 10;

    @media (min-width: 1200px) {
        display: none;
    }
    

    & div:first-child {
        text-align: center;
        height: 16rem;
    }


    ${props => {
        if(props.isOpen)
            return 'transform:translateX(0);';
    }}     

   
 
       
`

const NavigationWrapper = styled.div`
        width: 100%;
        flex-grow: 1;

`

function MobileMenu({isMobileMenuOpen}){

    const [isOpen, setIsOpen] = useState(isMobileMenuOpen);

    useEffect(()=>{setIsOpen(isMobileMenuOpen)},[isMobileMenuOpen]);
    return(
        <Div isOpen={isOpen}>
            <div>
                <a href="#home"><Brand black resizeByHeight /></a>
            </div>
            <NavigationWrapper>
                <MainNav mobileMenu></MainNav>
            </NavigationWrapper>
           
            
            <SocialList black column mobileMenu>

                <a href="https://www.facebook.com/profile.php?id=100063618430927" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faFacebook} />Facebook
                </a>
                <a href="https://instagram.com/kajaki_fracki?igshid=YmMyMTA2M2Y" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faCamera} />Instagram
                </a>
                {/* <a href="/"><FontAwesomeIcon icon={faEnvelope} />Przykład@o2.pl</a> */}
                <a href="https://www.google.com/maps/place/Kajaki+i+sauna+Fr%C4%85cki,+Fr%C4%85cki+32,+16-506+Fr%C4%85cki/@53.9788196,23.2901432,16z/data=!4m5!3m4!1s0x46e0f7ada55ec777:0xaa9e10921afa3744!8m2!3d53.9791502!4d23.2916037?hl=pl-PL"  target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLocationDot} />
                    <div>
                        <p>Frącki 32</p>
                        <p>16-506 Giby</p>
                    </div>  
                </a>
                <a href="tel:+48606341300">
                    <FontAwesomeIcon icon={faPhone} />
                    <div>
                        <p>+48 606 341 300</p>
                        <p>+48 696 143 858</p>
                        <p>+48 570 345 102</p>
                    </div>
                </a>
            </SocialList>
           
        </Div>
    )
}

export default MobileMenu;