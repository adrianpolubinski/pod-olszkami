import { useEffect, useState } from "react";
import styled from "styled-components";
import PaginationItem from "./PaginationItem";

const Ul = styled.ul`
    position: absolute;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    list-style: none;
`



function Pagination({slidesCount, activeSlide, changeOnSelectSlide, stopAutoChangeSlide, startAutoChangeSlide}){

    const [activeItem, setActiveItem] = useState(activeSlide)

    useEffect(()=>{
        setActiveItem(activeSlide)
    }, [activeSlide])

    const onClickHandler = (e) => {
        changeOnSelectSlide(parseInt(e.target.id));
    }

    let listItemElements = [];
    for(let i=0; i<slidesCount; i++){
        if(i===activeItem)
            listItemElements.push(
            <PaginationItem 
                key={i} 
                id={i} 
                active 
                onClickHandler={onClickHandler} 
                stopAutoChangeSlide={stopAutoChangeSlide}
                startAutoChangeSlide={startAutoChangeSlide}
                />)
        else listItemElements.push(
        <PaginationItem 
        key={i} 
        id={i} 
        onClickHandler={onClickHandler} 
        stopAutoChangeSlide={stopAutoChangeSlide}
        startAutoChangeSlide={startAutoChangeSlide}/>)
    }

    return (
        <Ul>
            {listItemElements}
        </Ul>
    )
}

export default Pagination