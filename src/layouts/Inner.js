import styled from 'styled-components';

const Div = styled.div`
    max-width: 122rem;
    height: 100%;
    width: 100%;
    padding: 0 2rem;
    margin: 0 auto;
`;

function Inner( {children} ){

    return (
        <Div>
            { children }
        </Div>
    )
  }
  
  export default Inner;