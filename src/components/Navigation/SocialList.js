import styled from "styled-components";

const Ul = styled.ul`

    display: flex;

    & li {
        margin: 0 2rem;

        &:first-child {
            margin-left: 0;
        }
        &:last-child {
            margin-right: 0;
        }
    }

    & a {
        color: white;
        font-size: 1.5rem;
        font-weight: 700;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        text-shadow: .3rem .3rem .3rem #000;
    }

    & svg {
        margin-bottom: .5rem;
        font-size: 2rem;
        
    }

    // Modifiers
    ${props=> { 
        if(props.column) 
        return `

            flex-direction: column;
         
            & a {
                flex-direction: row;
                text-shadow: none;
            }
            & li {
                margin: 1rem 0;    
            }
            & svg {
                margin-right: 1rem ;
                margin-bottom: 0;
            }
    `}}

    ${props => {
        if(props.black) 
        return `
        & a {
            color: black;
        }
    `}}

    // Media
    ${props => {
        if(props.mobileMenu){
            return `

                @media (min-width: 500px){
                    & a {
                        font-size: 2rem;
                    }
                }
                
            `;
        }
    }}

`



function SocialList({children, black, column, mobileMenu}) {
    
    const socialElements = children.map((social, index) => (
        <li key={index}>
            { social }
        </li>
    ))

    return (
        <Ul black={black} column={column} mobileMenu={mobileMenu}>
            { socialElements }
        </Ul>
    )
}

export default SocialList;