import styled from "styled-components";


const Nav = styled.nav`

    & ul {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    & li {
        width: 15rem;
        text-align: center;
    }
    & a {
        color: white;   
        text-shadow: 3px 3px 3px #000;
        font-size: 1.6rem;  
        text-transform: uppercase;
        font-family: "Open Sans";
        font-weight: 700;
        position: relative;
        
        @media (min-width: 500px) {
            font-size: 2rem;
        }

        &::after {
            content: "";
            display: block;
            position: absolute;
            right: 0;
            bottom: -3px;
            height: 3px;
            width: 0;
            background-color: red;
            transition: width .3s;
        }

        &:hover {

            &::after {
                width: 100%;
                left: 0;
            }
        }
    }   


    
   

    ${props => { if(props.spaceBetween) return `
            & li{
                &:nth-child(3) {
                    margin-right: 10rem;
                }
                &:nth-child(4) {
                    margin-left: 10rem;
                }
            }
            `
        }
    }


    ${props => {if(props.mobileMenu) 
        return `
        border-top: 2px solid black;
        border-bottom: 2px solid black;
        & a{
            color: black;
            text-shadow: none;
        }

        & ul {
            flex-direction: column;
        }

        & li {
            margin: 1rem 0;
        }
    `}}

    
    ${props => {
        if(props.mainMenu) return `
            display: none;
            @media (min-width: 1200px){
                display: block;
            }
    `}}
    
    ${props => {
        if(props.primaryMenu) return `
        & li {
            width: auto;
            margin: 0 2rem;
        }    
        
        & a {
                color: black;
                text-shadow: .1rem .1rem .1rem #000;
            }
    `}}

`;

function MainNav( {spaceBetween, mobileMenu, primaryMenu, mainMenu} ) {

    const menuItems = [
        {
            title: 'Home',
            href: '#home'
        },
        {
            title: 'O Nas',
            href: '#aboutUs'
        },
        
        {
            title: 'Trasy',
            href: '#routes'
        },
        {
            title: 'Zasady',
            href: '#rules'
        },
        {
            title: 'Sauna',
            href: '#sauna'
        },
        {
            title: 'Galeria',
            href: '#gallery'
        }
        
    ]

    const menuItemsElements = menuItems.map((item, index) => (
        <li key={index}>
            <a href={item.href}>{item.title}</a>
        </li>
    ))

    return (
        <Nav spaceBetween={spaceBetween} mobileMenu={mobileMenu} primaryMenu={primaryMenu} mainMenu={mainMenu}>
            <ul>
                {menuItemsElements}
            </ul>
        </Nav>
    )
}

export default MainNav;