import { useEffect } from "react"
import { useRef } from "react"
import { useState } from "react"
import styled from "styled-components"
import Inner from "../../layouts/Inner"

const Section = styled.section`
 overflow: hidden;
    & > div > div {
        display: flex;
        flex-direction: column;
        align-items: center;
        
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
                <h2>Czarna Ha??cza</h2>
                <div>
              
                        
                    <p>Czarna Ha??cza jest najwi??ksz?? rzek?? Suwalszczyzny.
                    Jezioro Ha??cza daje pocz??tek rzece, przez pierwsze kilometry p??ynie g????bokim w??wozem w obr??bie Suwalskiego Parku Krajobrazowego.
                    Na odcinku za jeziorem Wigry Czarna Ha??cza jest jednym z najs??ynniejszych polskich nizinnych szlak??w kajakowych. Najpierw bardzo powoli p??ynie w??r??d rozlewisk i podmok??ych ????k, by za Wysokim Mostem lekko przyspieszy?? sw??j bieg w dolinie wcinaj??cej si?? bardzo malowniczo w Puszcz?? Augustowsk??. Na tym odcinku rzeka silnie meandruje. Na wysoko??ci wsi Rygol w????cza si?? w system Kana??u Augustowskiego i kieruje do granicy bia??oruskiej doprowadzaj??c jej wody do Niemna.</p>
                   
                    <img src="img/aboutRiver/about-river-photo-1.jpg" loading="lazy" alt="Zdj??cie Czarnej Ha??czy"></img>
                </div>
                
            </Inner>
        </Section>
    )
}

export default AboutRiver