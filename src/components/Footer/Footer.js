import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import Inner from "../../layouts/Inner";

const Div = styled.div`
border-top: solid .5rem white;

    height: 7rem;
    display: flex;
    justify-content: space-between;
    padding-top: 1rem;
    & > p {
        font-size: 2rem;
        color: white
    }
    & > a {
        font-size: 2rem;
        color: white;
    }
`

function Footer(){
    return(
        <Inner>
           
            <Div>
                <p>© Pod Olszkami 2022</p>
                <a href="#home">Przejdź do góry <FontAwesomeIcon icon={faArrowUp} /></a>
            </Div>
        </Inner>
        
    )
}

export default Footer;