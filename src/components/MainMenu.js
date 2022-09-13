import { useEffect, useState } from "react";
import styled from "styled-components";
import MainNav from "./MainNav";
import Brand from "./Brand";

const Div = styled.div`
    position: fixed;
    top: 5rem;
    left: 0;
    width: 100%;
    height: 15rem;

    transform: translateY( calc(-100% - 5rem) );
    transition: .7s;

    
    margin: 0 auto;

    ${props => {
        if(props.isVisible)
            return `
                transform: translateY(0);
            `
    }}


    
 

`;

const MainNavWrapper = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    max-width: 122rem;
`;

const Logo = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    height: 100%;

    & a {
        height: 100%;
        display: block;
        & img {
        height: 15rem;
    }
    }

`
function MainMenu({isTopVisible}) {
    
    const [isVisible, setIsVisible] = useState(isTopVisible);

    useEffect(()=>{
        setIsVisible(isTopVisible)
    }, [isTopVisible])

    return (
     <Div isVisible={isVisible}>
        <MainNavWrapper>
            <MainNav spaceBetween mainMenu/>
        </MainNavWrapper>
        <Logo>
            <a href="/">
                <Brand resizeByHeight/>

            </a>
        </Logo>
     </Div>
    );
  }
   
  export default MainMenu;