import styled from 'styled-components';

import SlideList from './SlideList'
import ScrollIcon from './ScrollIcon';


const Div = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
`;


function Slider() {
    return (
        <Div>
            <SlideList />
            <ScrollIcon />
        </Div>
    )
  }
  
export default Slider;