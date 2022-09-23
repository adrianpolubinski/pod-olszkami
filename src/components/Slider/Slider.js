import styled from "styled-components";

import ScrollIcon from "./ScrollIcon";
import SlideList from "./SlideList";
import Pagination from "./Pagination";
import { useEffect, useState } from "react";
import { useCallback } from "react";
import { useMemo } from "react";


const Div=styled.div`
    width: 100%;
    height: 100%;
    
    position: relative;
`

function Slider(){

    const [activeSlide, setActiveSlide] = useState(0);
    const [autoChangeSlide, setAutoChangeSlide] = useState(true);

    const slidesConfig = useMemo( () => {
        return [{
            url: 'img/slider/slider-image-1.jpg',
            title: 'Super',
            subtitle: 'Super piekny subtitle'
        },
        {
            url: 'img/slider/slider-image-2.jpg',
            title: 'Mega',
            subtitle: 'Mega piekny subtitle'
        },
        {
            url: 'img/slider/slider-image-3.jpg',
            title: 'Fajnie',
            subtitle: 'dsadssd piekny subtitle'
        }]
    }, []);
    

    const changeSlideHandle = useCallback( () => {
        setActiveSlide(prev => {
            if(prev < slidesConfig.length - 1)
                return prev+1;
            else
                return 0;
        })
    }, [slidesConfig]);

    useEffect(() => {
        let intervalIndex;
        if(autoChangeSlide){
            intervalIndex = setInterval(changeSlideHandle, 6000);
        } else {
            clearInterval(intervalIndex);
        }

        return () => clearInterval(intervalIndex);

    }, [autoChangeSlide, changeSlideHandle]);

    const changeOnSelectSlide=(slideIndex)=>{
        setActiveSlide(slideIndex);
    }
    
    const stopAutoChangeSlide = () => {
        setAutoChangeSlide(false)
    }

    const startAutoChangeSlide = () => {
        setAutoChangeSlide(true)
    }

    return (
        <Div>
            <SlideList slidesConfig={slidesConfig} activeSlide={activeSlide}/>
            <Pagination  
                slidesCount={slidesConfig.length} 
                activeSlide={activeSlide} 
                changeOnSelectSlide={changeOnSelectSlide} 
                stopAutoChangeSlide={stopAutoChangeSlide}
                startAutoChangeSlide={startAutoChangeSlide}/>
            <ScrollIcon />     
        </Div>
    )
}

export default Slider;