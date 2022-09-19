import styled from 'styled-components';

const Main = styled.main`
    width: 100%;

    & h1 {
        margin: 2rem 0;
        text-align: center;
    }
`;

function MainLayout( {children} ){

    return (
        <Main>
            { children }
        </Main>
    )
  }
  
  export default MainLayout;