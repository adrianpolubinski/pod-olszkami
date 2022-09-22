import { useEffect, useState } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleChevronLeft, faCircleChevronRight } from "@fortawesome/free-solid-svg-icons"

import styled from "styled-components";

const Button = styled.button`
    height: 5rem;
    width: 5rem;
    background: none;
    border: none;   

    & svg {
        color: white;
        width: 80%;
        height: 80%;
        transition: .5s;

        ${props => {
        if(!props.isActive){
            return `
                color: #777;
            `
        }
    }}
    }

    
`

function GalleryButton({right, left, onClick, active}) {

    const [isActive, setIsActive] = useState(active);
    const [shakeMode, setShakeMode] = useState(false);

    useEffect(()=>{
        setIsActive(active)
    },[active])

    const startShakeMode = () => {
        setShakeMode(true);
    }


    const stopShakeMode = () => {
        setShakeMode(false)
    }

    return (
        <Button onClick={onClick} isActive={active} >
            {right && <FontAwesomeIcon icon={faCircleChevronRight} fade={isActive} shake={isActive && shakeMode} onMouseEnter={startShakeMode} onMouseLeave={stopShakeMode}/>}
            {left && <FontAwesomeIcon icon={faCircleChevronLeft} fade={isActive} shake={isActive && shakeMode} onMouseEnter={startShakeMode} onMouseLeave={stopShakeMode}/>}
        </Button>
    )
}

export default GalleryButton;