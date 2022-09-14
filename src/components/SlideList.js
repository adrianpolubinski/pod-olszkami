import styled from 'styled-components';

import Slide from './Slide';
import { useEffect, useState } from 'react';
import Pagination from './Pagination';

const Ul = styled.ul`
    list-style: none;
    position: relative;

    height: 100%;
    width: 100%;
`;



function SlideList() {

    const [activeSlide, setActiveSlide] = useState(0);
    const [autoChangeSlide, setAutoChangeSlide] = useState(true);

    const slidesConfig = [{
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

    
    useEffect(() => {
        let intervalIndex;

        if(autoChangeSlide){
            intervalIndex = setInterval(changeSlideHandle, 6000);
        } else {
            clearInterval(intervalIndex);
        }

        return () => clearInterval(intervalIndex);
      }, [autoChangeSlide]);



    const changeSlideHandle = () => {
        setActiveSlide(prev => {
            if(prev < slidesConfig.length - 1)
                return prev+1;
            else
                return 0;
        })
    }


    const changeOnSelectSlide=(slideIndex)=>{
        setActiveSlide(slideIndex);
    }
    
    const stopAutoChangeSlide = () => {
        setAutoChangeSlide(false)
    }

    const startAutoChangeSlide = () => {
        setAutoChangeSlide(true)
    }

    const slideElements = slidesConfig.map(( slideConfig, index ) => {
        return (
            <Slide key={index} config={slideConfig} isActive={activeSlide===index?true:false} />
        )
    })

    return (
        <>
            <Ul>
                {slideElements}
            </Ul>
            <Pagination 
            slidesCount={slidesConfig.length} 
            activeSlide={activeSlide} 
            changeOnSelectSlide={changeOnSelectSlide} 
            stopAutoChangeSlide={stopAutoChangeSlide}
            startAutoChangeSlide={startAutoChangeSlide}/>
        </>
        
    )
  }
  
  export default SlideList;