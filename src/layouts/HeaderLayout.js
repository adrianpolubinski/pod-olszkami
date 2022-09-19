import styled from 'styled-components';

const Header = styled.header`
    height: 100vh;
    width: 100%;
`;

function HeaderLayout( {children} ){

    return (
        <Header id="home">
            { children }
        </Header>
    )
  }
  
  export default HeaderLayout;