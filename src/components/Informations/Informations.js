import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import Inner from "../../layouts/Inner";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";

const Section = styled.section`
    margin-bottom: 5rem;
    opacity: 0;
    transition: 1s;
    & > div > div {
        border: .5rem solid orange;
        padding: 2rem;
        border-radius: 3rem;

        & > h2 {
            text-align: center;
            text-transform: uppercase;
            font-size: 3.5rem;
            & > svg {
                color: orange;
            }
        } 
        & > ol {
            margin-left: 2rem;
        }
    }

    ${props=>{
        if(props.isVisible)
            return "opacity: 1;";
    }}
    

`

function Informations() {
    const [isVisible, setIsVisible] = useState(false);
    const informationRef = useRef();

    const checkIsVisible = () => {
        const windowOffsetBottom = window.innerHeight+window.scrollY-50;

        if(windowOffsetBottom > informationRef.current.offsetTop){
            setIsVisible(true);
        } else setIsVisible(false);
    }

    useEffect(()=>{
        window.addEventListener('scroll', checkIsVisible)
        return ()=> window.removeEventListener('scroll', checkIsVisible)
    }, [])

    return (
        <Section ref={informationRef} isVisible={isVisible}>
            <Inner>
                <div>
                    <h2>Ważne informacje <FontAwesomeIcon icon={faTriangleExclamation} /></h2>
                    <ol>
                        <li>Jesteśmy małą firmą rodzinną.</li>
                        <li>Zapraszamy na spływy, które umawiamy indywidualnie dla każdej grupy.</li>
                        <li>Najlepszym rozwiązaniem są grupy 8 osobowe.</li>
                        <li>Niemniej jednak organizujemy też spływy indywidualnie 1 - 2  - 3 lub 4 osobom.</li>
                        <li>Spływy z Maćkowej Rudy i Wysokiego Mostu do Frącek proponujemy rozpoczynać w godzinach porannych.</li>
                        <li>Proponujemy przyjazd Frącki  32,  „Pod Olszkami” w godzinach: 10:00 lub 11:00  jeśli chcemy dołączyć do grupy. Wówczas zawozimy w górę rzeki i spływa się do nas (czas nielimitowany).</li>
                        <li>Jeśli ma to być grupa zorganizowana proponujemy wypłynięcie w godzinach dogodnych dla siebie.</li>
                        <li>Spływy w dół rzeki proponujemy rozpocząć w godzinach porannych ok. godziny 9 – 10  wypłynięcie (warunkiem jest dopłynięcie do śluz  o godzinie 17 w Mikaszówce) lub jeśli to jest grupa zorganizowana warunkiem jest dopłynięcie do czasu zamknięcia ostatniej śluzy</li>
                    </ol>
                   
                </div>
            </Inner>
        </Section>
    )
}

export default Informations;