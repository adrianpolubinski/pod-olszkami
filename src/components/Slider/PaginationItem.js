import { useEffect, useState } from "react";
import styled from "styled-components";

const Li = styled.li`
    height: 2rem;
    width: 2rem;
    border-radius: 50%;
    border: .3rem solid white;
    background-color: white;
    margin: 0 1rem;
    transition: 1s;
    &:hover {
        cursor: pointer;
    }
    ${props => {if(props.active){
        return `
            background-color: gray;
        `
    }}}
`

function PaginationItem({onClickHandler, active, id, stopAutoChangeSlide, startAutoChangeSlide}){
    const [isActive, setIsActive] = useState(active);

    useEffect(()=>{
        setIsActive(active)
    }, [active])

    return (
        <Li id={id} onClick={onClickHandler} active={isActive} onMouseEnter={stopAutoChangeSlide} onMouseLeave={startAutoChangeSlide}></Li>
    )
}

export default PaginationItem;