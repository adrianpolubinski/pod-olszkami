import { useEffect, useState } from "react";
import styled from "styled-components"
import MainNav from "./MainNav";
import Brand from "./Brand";

const Div = styled.div`

    display: none;
    position: fixed;
    top: -7.5rem;
    left: 0;
    height: 7.5rem;
    background-color: white;
    width: 100%;
    padding: 0 2rem;

   
    
    transition: .7s;

    & div {
        height: 100%;
    }

    & img{
        height: 100%;
    }

    @media (min-width: 1200px) {
        display: block;
    }

    
    ${props=>{
        if(props.isVisible)
            return `
                top: 0;
            `
    }}
`
const Inner = styled.div`
    max-width: 120rem;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center; 

`;
function PrimaryMenu({isTopVisible}) {

    const [isVisible, setIsVisible] = useState(!isTopVisible);

    useEffect(()=>{
        setIsVisible(!isTopVisible);
    }, [isTopVisible])

    return (
        <Div isVisible={isVisible}>
            <Inner>
                <div><a href="/"><Brand black resizeByHeight/></a></div>
                
                <MainNav primaryMenu/>
            </Inner>
        </Div>
    )
}

export default PrimaryMenu;