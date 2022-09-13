import styled from 'styled-components';

import Slide from './Slide';
import { useEffect, useState } from 'react';


const Ul = styled.ul`
    list-style: none;
    position: relative;

    height: 100%;
    width: 100%;
`;


function SlideList() {

    const [activeSlide, setActiveSlide] = useState(0);

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
        const intervalIndex = setInterval(changeSlideHandle, 6000)
        return () => clearInterval(intervalIndex);
      }, []);



    const changeSlideHandle = () => {
        setActiveSlide(prev => {
            if(prev < slidesConfig.length - 1)
                return prev+1;
            else
                return 0;
        })
    }

    

    const slideElements = slidesConfig.map(( slideConfig, index ) => {
        return (
            <Slide key={index} config={slideConfig} isActive={activeSlide===index?true:false}/>
        )
    })

    return (
        <Ul>
            {slideElements}
        </Ul>
    )
  }
  
  export default SlideList;