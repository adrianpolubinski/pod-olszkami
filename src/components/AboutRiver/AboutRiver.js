import { useEffect } from "react"
import { useRef } from "react"
import { useState } from "react"
import styled from "styled-components"
import Inner from "../../layouts/Inner"

const Section = styled.section`
 
    & > div > div {
        display: flex;
        flex-direction: column;
        align-items: center;
        overflow: hidden;
        & > img {
            transform: translateX(50%);
            transition: 1s;
            margin-top: 3rem;
            width: 80%;
            max-width: 60rem;
            border-radius: 3rem;
            box-shadow: 0rem 0rem 1.2rem .5rem #000;
        }
    }

    & > div > div > p {
        transform: translateX(-50%);
        transition: 1s;
        text-align: justify;
        color: #333;
        margin: 1rem 0;
        font-size: 3rem;
        font-family: Caveat, sans-serif; 
    }


    & > div > h2 {
        color: #333;
        margin: 1rem 0;
        font-size: 4rem;
        font-family: Caveat, sans-serif;
        border-bottom:.3rem solid black;
        display: inline;
    }

    @media (min-width: 1300px) {
        & > div > div {
            flex-direction: row;
            & > img {
                margin-top: 0;
                margin-left: 5rem;
                width: 40%;
            }
        }
    }

    ${props => {
        if(props.isVisible){
            return `
            & > div > div > img {
                transform: translateX(0);
            }

            & > div > div > p{
                transform: translateX(0);
            }
            
            
            `
        }
    }}
        
`

function AboutRiver(){
    
    const [isVisible, setIsVisible] = useState(false);
    const headerTitleRef = useRef();
    
    const checkIsVisible = () => {
        const windowOffsetBottom = window.innerHeight+window.scrollY-50;

        if(windowOffsetBottom > headerTitleRef.current.offsetTop){
            setIsVisible(true);
        } else setIsVisible(false);
    }

    useEffect(()=>{
        window.addEventListener('scroll', checkIsVisible)
        return ()=> window.removeEventListener('scroll', checkIsVisible)
    }, [])
    return (
        <Section ref={headerTitleRef} isVisible={isVisible}>
            <Inner>
                <h2>Czarna Hańcza</h2>
                <div>
              
                        
                    <p>Czarna Hańcza jest największą rzeką Suwalszczyzny
                    Jezioro Hańcza daje początek rzece, przez pierwsze kilometry płynie głębokim wąwozem w obrębie Suwalskiego Parku Krajobrazowego.
                    Na odcinku za jeziorem Wigry Czarna Hańcza jest jednym z najsłynniejszych polskich nizinnych szlaków kajakowych. Najpierw bardzo powoli płynie wśród rozlewisk i podmokłych łąk, by za Wysokim Mostem lekko przyspieszyć swój bieg w dolinie wcinającej się bardzo malowniczo w Puszczę Augustowską. Na tym odcinku rzeka silnie meandruje. Na wysokości wsi Rygol włącza się w system Kanału Augustowskiego i kieruje do granicy białoruskiej doprowadzając jej wody do Niemna.</p>
                   
                    <img src="img/aboutUs/photo-1.jpg" loading="lazy" alt="Zdjęcie Czarnej Hańczy"></img>
                </div>
                
            </Inner>
        </Section>
    )
}

export default AboutRiver