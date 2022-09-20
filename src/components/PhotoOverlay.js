import { useEffect, useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark} from "@fortawesome/free-solid-svg-icons"

const Img = styled.img`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 80%;
    max-height: 90%;
    z-index: 99;
`;

const Div = styled.div`
    position: fixed;
    right: 2rem;
    top: 2rem;

    color:white;
    width: 5rem;
    height: 5rem;
    z-index: 99;

    & > svg {
        height: 100%;
        width: 100%;
        cursor: pointer;
    }
`

const Span = styled.span`
    position: fixed;
    bottom: 2rem;
    font-size: 2rem;
    left: 50%;
    transform: translateX(-50%);
    color: white;
    z-index: 99;
`
  

function PhotoOverlay( {selectedPhoto, setGalleryModalVisible, photosCount, actualPhoto} ) {
    
    const [photo, setPhoto] = useState( {src:"", alt:""} );

    useEffect(()=>{
        let src = selectedPhoto.url.slice(5,-2);
        src = src.replace(/-preview/, "");
        
        setPhoto({
            src: src,
            alt: selectedPhoto.alt,
            key: selectedPhoto.key
        });
        
    }, [selectedPhoto])

    const onCloseModalHandler = () => {
        setGalleryModalVisible(false);
    }

    return (
        <>
        <Img src={photo.src} alt={photo.alt} loading="lazy"></Img>
        <Div><FontAwesomeIcon icon={faCircleXmark} onClick={onCloseModalHandler}/></Div>
        <Span>{photo.key} / {photosCount}</Span>
        </>
        
    )
}

export default PhotoOverlay;