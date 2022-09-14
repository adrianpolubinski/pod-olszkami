import { useEffect, useState } from "react";
import styled from "styled-components";

import SocialList from "./SocialList";

const Div = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    transform: translateY( calc(-100%) );
    transition: .6s;

    width: 100%;
    height: 7rem;

    display: none;
    
    @media (min-width: 800px){
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
                    <a href="/"><i className="fa-solid fa-mobile-retro"></i>+48 222 222 222</a>
                    <a href="/"><i className="fa-solid fa-envelope"></i>Przykład@o2.pl</a>
                </SocialList>

                <SocialList>
                    <a href="/"><i className="fa-solid fa-location-dot"></i>16-500 Frącki</a>
                    <a href="/"><i className="fa-brands fa-facebook"></i>Facebook</a>
                    <a href="/"><i className="fa-brands fa-youtube"></i>YouTube</a>
                </SocialList>
            </nav>
        </Div>
    )
}

export default InfoBar;