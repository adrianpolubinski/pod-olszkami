import styled from 'styled-components';

const Footer = styled.footer`
    width: 100%;
`;

function FooterLayout( {children} ){

    return (
        <Footer>
            { children }
        </Footer>
    )
  }
  
  export default FooterLayout;