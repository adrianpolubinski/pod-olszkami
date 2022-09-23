import styled from "styled-components"
import Inner from "../../layouts/Inner";

const Section = styled.section`

    & > div > h1 {
        color: #333;
        margin: 5rem 0;
        font-size: 5rem;
        font-family: Caveat, sans-serif;
        border-bottom: .5rem solid black;
    }
        
    @media (min-width: 500px) {
        font-size: 5rem;
    }
`

function HeaderTitle(){
    return (
        <Section>
            <Inner>
                <h1>Pod Olszkami - Spływy kajakowe, Sauna, oraz wiele więcej ! </h1>
            </Inner>
        </Section>
        
    )
}

export default HeaderTitle;