import styled from 'styled-components';

const Footer = styled.footer`
    background-color: #070918;
`;

function FooterLayout( {children} ){

    return (
        <Footer>
            { children }
        </Footer>
    )
  }
  
  export default FooterLayout;