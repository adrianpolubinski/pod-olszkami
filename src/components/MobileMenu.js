import { useEffect, useState } from "react";
import styled from "styled-components";
import Brand from "./Brand";

import MainNav from "./MainNav";
import SocialList from "./SocialList";

const Div = styled.div`
    

    position: fixed;
    top: 0;
    right: 0;

    transform:translateX(100%);
    transition: .7s ease;

    height: 100vh;
    width: 30rem;
    background-color: white;

    display: flex;
    flex-direction: column;

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
                <a href="/"><Brand black resizeByHeight /></a>
            </div>
            <NavigationWrapper>
                <MainNav mobileMenu></MainNav>
            </NavigationWrapper>
           
            
            <SocialList black column>
                <a href="/"><i className="fa-solid fa-mobile-retro"></i>+48 222 222 222</a>
                <a href="/"><i className="fa-solid fa-envelope"></i>Przykład@o2.pl</a>
                <a href="/"><i className="fa-solid fa-location-dot"></i>16-500 Frącki</a>
                <a href="/"><i className="fa-brands fa-facebook"></i>Facebook</a>
                <a href="/"><i className="fa-brands fa-youtube"></i>YouTube</a>
            </SocialList>
           
        </Div>
    )
}

export default MobileMenu;