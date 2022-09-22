import styled from "styled-components";

const Li = styled.li`
    width: 15rem;
    height: 15rem;

    margin: 0 1rem;

    background-image: ${props => props.url};
    background-position: center;
    background-size: cover;
    
    border-radius: 20%;

    flex-shrink: 0;
    cursor: pointer;
    transition: filter .5s, transform .5s;
    
    &:hover {
        filter: blur(.15rem);
        transform: scale(95%);
    }
   
    @media (min-width: 500px) {
        width: 30rem;
        height: 30rem;
    }

`

function GalleryPhoto( {url, onClickPhoto, dataKey} ){

    return (
        <Li url={url} onClick={onClickPhoto} data-key={dataKey}></Li>
    )
}

export default GalleryPhoto;