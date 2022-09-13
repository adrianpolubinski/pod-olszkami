import styled from 'styled-components';

const Div = styled.div`
    width: 40px;
    height: 70px;
    box-shadow: inset 0 0 4px 2px #fff;
    border-radius: 25px;
    position:absolute;
    bottom: 2rem;
    left: 50%;
    transform: translate(-50%, 0);


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
    
    & i {
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
            <i className='fa-solid fa-angles-down'></i>
        </Div>
    )
}

export default ScrollIcon;