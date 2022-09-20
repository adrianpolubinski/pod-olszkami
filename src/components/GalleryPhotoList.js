import styled from "styled-components";
import GalleryPhoto from "./GalleryPhoto";

const Ul = styled.ul`

    position: absolute;
    left: 0;
    top: 0;

    height: 15rem; 
    display: flex;

    transform: translate(${props=> props.transformValue+'px'});
    transition: transform .5s;

    @media (min-width: 500px) {
        height: 30rem;
    }

`;

function GalleryPhotoList({photos, transform, photoListRef, onClickPhoto}) {

    const photoElements = photos.map((photo, index) => {
        return <GalleryPhoto key={index} dataKey={index+1} url={`url(${photo.url})`} onClickPhoto={onClickPhoto} />
    })

    return (
        <Ul ref={photoListRef} transformValue={transform} >
            {photoElements}
        </Ul>
    )
}

export default GalleryPhotoList;