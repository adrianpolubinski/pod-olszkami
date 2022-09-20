import { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import GalleryModal from "./GalleryModal";
import GalleryPhotoList from "./GalleryPhotoList";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleChevronLeft, faCircleChevronRight } from "@fortawesome/free-solid-svg-icons"


const Div = styled.div`
    margin-top: 5rem;

    & > h3 {
        text-align: center;
        color: white;
        font-size: 5rem;
        font-family: Caveat, sans-serif;
    }

    & > div {
        margin-top: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 17rem;
        width: 100%;
    }

    & > div > div {
        height: 15rem;
        max-width: 17rem;
        width: 100%;
        max-height: 100%;
        overflow: hidden;
        position: relative;
    }

    & button {
        height: 5rem;
        width: 5rem;
        background: none;
        border: none;   
    }

    & svg {
        color: white;
        width: 80%;
        height: 80%;
        transition: .5s;
    }

    @media (min-width: 500px) {
        & > div {
            height: 32rem;
        }

        & > div > div {
            height: 30rem;
            max-width: 32rem;

        }
    }


    @media (min-width: 800px ) {
        & div > div {
            max-width: 64rem;
        }
    }

    @media (min-width: 1200px ) {
        & div > div {
            max-width: 96rem;
        }
    }
`

function GallerySlider( {photos, title} ) {

    const [actualPhoto, setActualPhoto] = useState(0);
    const [transform, setTransform] = useState(0);
    
    const photoListRef = useRef();

    const [selectedPhoto, setSelectedPhoto] = useState();
    const [galleryModalVisible, setGalleryModalVisible] = useState(false);

    const scrollListenerHandler=()=>{
        setTransform(0);
        setActualPhoto(0);
    }
    
    useEffect(()=>{
        window.addEventListener('resize', scrollListenerHandler)
    }, [])


    const prevPhotoHandler = ()=> {
        if(actualPhoto > 0){
            const photoWidth = photoListRef.current.children[0].clientWidth;
            setTransform( prev => prev + photoWidth + 20 );
            setActualPhoto( prev => prev - 1 );
        }
    }

    const setNextPhoto =()=> {
        const photoWidth = photoListRef.current.children[0].clientWidth;
        setTransform( prev => prev - photoWidth - 20)
        setActualPhoto( prev => prev + 1 );
    }

    const nextPhotoHandler = ()=> {
        if(window.innerWidth < 800 && actualPhoto < photos.length-1){
            setNextPhoto();
        } else if(window.innerWidth < 1200 && actualPhoto < photos.length-2){
            setNextPhoto();
        } else if(actualPhoto < photos.length-3){
            setNextPhoto();
        }
    }

    const onClickPhoto = (event) => {

        setSelectedPhoto({
            url: window.getComputedStyle(event.target).backgroundImage,
            alt: "test",
            key: event.target.getAttribute('data-key')
        });
        setGalleryModalVisible(true);
    }
   
    return (
        <>
        <Div>
            <h3>{title}</h3>
            <div>
                <button onClick={prevPhotoHandler}><FontAwesomeIcon icon={faCircleChevronLeft} /></button>
                <div>
                    <GalleryPhotoList 
                        photos={photos} 
                        transform={transform} 
                        photoListRef={photoListRef}
                        onClickPhoto={onClickPhoto}/>
                </div>
                <button onClick={nextPhotoHandler}><FontAwesomeIcon icon={faCircleChevronRight} /></button>
            </div>
        </Div>
        <GalleryModal 
            galleryModalVisible={galleryModalVisible} 
            setGalleryModalVisible={setGalleryModalVisible} 
            selectedPhoto={selectedPhoto} 
            actualPhoto={actualPhoto} 
            photosCount={photos.length}/>
        </>
    )
}

export default GallerySlider;