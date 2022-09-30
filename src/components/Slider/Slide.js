import styled from 'styled-components';

const Li = styled.li`
  width: 100%;
  height: 100%;

  background-image: ${props => props.url};
  background-position: center;
  background-size: cover;

  position: absolute;
  left: 0;
  top: 0;

  opacity: 0;
  transition: 1s;


  & div {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 80%;
    transform: translate(-50%, -50%);
  }

  & div p:first-child {
    font-size: 5rem;
    color: white;
    text-align: center;
    text-shadow: .4rem .4rem .4rem #000;

    @media (min-width: 768px) {
      font-size: 7rem;
    }
  
 }

  & div p:last-child {
      font-size: 3rem;
      color:white;
      text-align: center;
      text-shadow: .3rem .3rem .3rem #000;

      @media (min-width: 500px) {
      font-size: 5rem;
    }
  } 

  ${props => {
    if(props.isActive){
      return 'opacity: 1';
    }}};

`;


function Slide( {config, isActive} ) {
  return (
    <Li isActive={isActive} url={`url(${config.url})`}>
      <div>
          <p>{config.title}</p>
          <p>{config.subtitle}</p>
      </div>
    </Li>
  );
}
 
export default Slide;