import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import Inner from "../../layouts/Inner";


const Section = styled.section`
    padding-top: 5rem;
    background-color: #070918;
    color: white;

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

`

function Rules() {
    return (
        <Section id="rules">
            <Inner>
                <div>
                    <h2>Uwaga, ważne informacje <FontAwesomeIcon icon={faTriangleExclamation} /></h2>
                    <h3>Zasady zachowania na spływie</h3>
                    <ol>
                        <li>Zasada</li>
                        <li>Zasada</li>
                        <li>Zasada</li>
                        <li>Zasada</li>
                    </ol>
                    <h3>Zasady zachowania w saunie</h3>
                    <ol>
                        <li>Zasada</li>
                        <li>Zasada</li>
                        <li>Zasada</li>
                        <li>Zasada</li>
                    </ol>
                   
                </div>
            </Inner>
        </Section>
    )
}

export default Rules;