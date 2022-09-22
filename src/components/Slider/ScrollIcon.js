import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons"



const Div = styled.div`
    width:  3.5rem;
    height: 6rem;
    box-shadow: inset 0 0 4px 2px #fff;
    border-radius: 25px;
    position:absolute;
    bottom: 6rem;
    left: 50%;
    transform: translate(-50%, 0);


    @media (min-width: 768px) {
        width: 4rem;
        height: 7rem;
    }

    &::before {
        content: "";
        display: block;
        width: .8rem;
        height: 1.6rem;
        border-radius: 25px;
        box-shadow: inset 0 0 4px 2px #fff;
        position: absolute;
        top: 10%;
        left: 50%;
        transform: translateX(-50%);
    }
    
    & svg {
        top: 20%;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        color: #fff;
        font-size: 1.5rem;
        animation: scroll 1.2s linear infinite;
    }
    
    @keyframes scroll {
        0% {
            opacity: 0;
        }
        25% {
            
            top: 40%
        }
        50% {
            opacity: 1;
        }
        75% {
            
            top: 60%
        }
    
        100% {
            opacity: 0;
            top: 80%
        }
    }
`;



function ScrollIcon() {
    return (
        <Div>
            <FontAwesomeIcon icon={faAnglesDown} />
        </Div>
    )
}

export default ScrollIcon;