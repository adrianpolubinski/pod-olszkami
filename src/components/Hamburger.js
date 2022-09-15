import { useState } from "react";
import styled from "styled-components";

const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;

    width: 100%;
    height: 100%;

    background-color: inherit;

    & div {
        position: relative;
        width: 60%;
        height: 60%;
    }

    & span {
        position: absolute;
        width: 100%;
        height: .3rem;
        background-color: #000;
        transition: .2s ease-in;

        &:nth-child(1) {
            top: 0;
            left: 0;
        }

        &:nth-child(2), &:nth-child(3) {
            top: 50%;
            left: 0;
            transform: translateY(-50%);
        }

        &:nth-child(4) {
            bottom: 0;
            left: 0;
        }
    }

    ${props=>{
        if(props.isActive)
            return `
            & span{

                &:nth-child(1) {
                    transform: translate(-50%);
                    opacity: 0;
                }

                &:nth-child(2) {
                    transform: translateY(-50%) rotate(45deg);
                }

                &:nth-child(3) {
                    transform: translateY(-50%) rotate(-45deg);
                }

                &:nth-child(4) {
                    transform: translate(50%);
                    opacity: 0;
                }
            }`
    }}
`

function Hamburger(props){

    const [isActive, setIsAcive] = useState(false);
    
    const handleOnClickHamburger = () => {
        setIsAcive(prev => !prev);     
        props.changeMobileMenuState();
    }

    return (
        <Button isActive={isActive} onClick={handleOnClickHamburger} >
            <div>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </Button>
    )
}

export default Hamburger;