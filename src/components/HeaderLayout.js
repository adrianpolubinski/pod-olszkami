import styled from 'styled-components';

const Header = styled.header`
    position: relative;
    height: 100vh;
    width: 100%;
`;

function HeaderLayout( {children} ){

    return (
        <Header>
            { children }
        </Header>
    )
  }
  
  export default HeaderLayout;