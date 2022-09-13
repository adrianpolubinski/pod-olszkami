import styled from "styled-components";

const Ul = styled.ul`

    list-style: none;
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

        text-shadow: .3rem .3rem .3rem #000;
    }

    & i {
        margin: .5rem auto;
        font-size: 2rem;
    }


    // modifiers
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
            & i {
                margin: 0;
                margin-right: 1rem ;
            }
    `}}

    ${props => {
        if(props.black) 
        return `
        & a {
            color: black;
        }
    `}}

`



function SocialList({children, black, column}) {
    
    const socialElements = children.map((social, index) => (
        <li key={index}>
            { social }
        </li>
    ))

    return (
        <Ul black={black} column={column}>
            { socialElements }
        </Ul>
    )
}

export default SocialList;