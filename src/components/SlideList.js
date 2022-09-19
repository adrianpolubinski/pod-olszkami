import styled from 'styled-components';

import Slide from './Slide';

const Ul = styled.ul`
    height: 100%;
    width: 100%;

    position: absolute;
    left: 0;
    top: 0;
`;

function SlideList( {slidesConfig, activeSlide} ) {


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
        </>
        
    )
  }
  
  export default SlideList;