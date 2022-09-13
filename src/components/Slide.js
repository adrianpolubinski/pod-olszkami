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
  transition: 1.5s;


  & div {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  & div h2 {
    font-size: 8rem;
    color: white;
    text-align: center;
    text-shadow: .3rem .3rem .3rem #000;

 }

  & div p{
      font-size: 5rem;
      color:white;
      text-shadow: .3rem .3rem .3rem #000;
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
          <h2>{config.title}</h2>
          <p>{config.subtitle}</p>
      </div>
    </Li>
  );
}
 
export default Slide;