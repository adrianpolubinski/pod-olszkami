import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";


const Button = styled.button`
    width: 60%;
    height: 4rem;
    background-color: #0059c7;
    color: white;
    font-size: 1.8rem;
    border: none;
 
`

function RoutesButton( {changeButtonState} ) {

    const [isActive, setIsActive] = useState(false);

    const setText = () => {
        if(isActive){
            return "Pokaż mniej";
        } return "Pokaż więcej!";
    } 

    const onClickHandle = () => {
        setIsActive(prev=> !prev);  
    }
    

    useEffect(()=>{
        changeButtonState(isActive);
    }, [isActive])

    return (
        <Button onClick={onClickHandle} >{setText()}</Button>
    )
}

export default RoutesButton;