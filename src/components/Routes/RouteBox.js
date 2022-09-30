import styled from "styled-components"
import {FontAwesomeIcon}  from "@fortawesome/react-fontawesome";
import { faFlag, faFlagCheckered, faRoute, faStopwatch } from "@fortawesome/free-solid-svg-icons";
import RoutesButton from "./RoutesButton";
import { useState } from "react";

const Div = styled.div`
    position: relative;
    margin-top: 6rem;


    & > div:nth-child(2){
        width: 100%;
        max-width: 35rem;
        max-height: 50rem;
        padding-bottom: 7rem;
        background-color: white;
        border-radius: 20px;
        overflow: hidden;

        transition: max-height .3s;

        ${props=>{
            if(props.isExpand){
                return `
                    max-height: 90rem;
                `;
            }
        }}

        & > img{
            width: 100%;
            border-top-left-radius: 20px;
            border-top-right-radius: 20px;
        }

        & > div {
            padding: 0 1rem;
        }

        & > div:first-of-type {

            & > p:first-child {
                text-align: center;
                font-weight: 700;
            }

            & svg {
                color: #0059c7;

                &.fa-triangle-exclamation{
                    color: #ff6100;
                }
            }
        }

        & > div + div {
            
            & > p:first-of-type {
                margin-top: 1rem;
                text-align: center;
                font-weight: 700;
            }
        }
    }

    & > div:last-child {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        padding: 1rem 0;
        background-color: rgba(0,0,0,70%);
        display: flex;
        align-items: center;
        justify-content: center;
    }
`

const TitleBox= styled.div`
        ${props=>{
            if(props.color==="blue"){
                return `
                    background: linear-gradient(153deg, rgba(2,0,36,1) 0%, rgba(50,50,255,1) 55%, rgba(0,78,255,1) 100%);
                `
            } else if(props.color==='green'){
                return `
                    background: linear-gradient(167deg, rgba(2,0,36,1) 0%, rgba(47,202,96,1) 91%, rgba(0,255,89,1) 100%);
                `
            } else if(props.color==='orange'){
                return `
                    background: linear-gradient(167deg, rgba(2,0,36,1) 0%, rgba(202,125,47,1) 48%, rgba(255,154,0,1) 100%);
                `
            } else if(props.color==='red'){
                return `
                    background: linear-gradient(153deg, rgba(2,0,36,1) 0%, rgba(202,75,47,1) 42%, rgba(255,0,0,1) 100%);
                `
            } else if(props.color==='pink'){
                return `
                    background: linear-gradient(167deg, rgba(2,0,36,1) 0%, rgba(202,47,180,1) 57%, rgba(192,0,255,1) 100%);
                `
            } else if(props.color==='aqua'){
                return `
                    background: linear-gradient(167deg, rgba(2,0,36,1) 0%, rgba(47,188,202,1) 58%, rgba(0,211,255,1) 100%);
                `
            }

           
        }}
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        height: 100%;
        border-radius: 1rem;
        box-shadow: 0 0 1.7rem -0.3rem #42445a;
        width: 60%;
        height: 5rem;

        position: absolute;
        left: 50%;
        
        transform: translate(-50%, -50%);
        & > p {
            color: white;
            font-family: Caveat, sans-serif;
            font-weight: 700;
            font-size: 3rem;
        }   

`

function RouteBox({title, distance, time, description, begin, end, color}) {

    const [isExpand, setIsExpand] = useState(false);

    const changeButtonState = (state) => {
        setIsExpand(state);
    }

    
    return (
        <Div isExpand={isExpand}>
            <TitleBox color={color}>
                <p>{title}</p>
            </TitleBox>
            <div>
                <img src="img/aboutUs/photo-1.jpg" alt="test" loading="lazy" />
                <div>
                    <p>Informacje o trasie:</p>
                    {begin && <p><FontAwesomeIcon icon={faFlag} /> Początek trasy: {begin}</p>}
                    {end && <p><FontAwesomeIcon icon={faFlagCheckered} /> Koniec trasy: {end}</p>}
                    {distance && <p><FontAwesomeIcon icon={faRoute} /> Dystans trasy: {distance}</p>}
                    {time && <p><FontAwesomeIcon icon={faStopwatch} /> Czas trasy: {time}</p>}
                </div>
                <div>
                    <p>Opis trasy:</p>
                    <p>{description}</p>
                </div>
                
            </div>
            <div>
                <RoutesButton changeButtonState={changeButtonState}/>
            </div>
            
        </Div>
            
    )
}

export default RouteBox