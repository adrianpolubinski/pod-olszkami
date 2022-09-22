import { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import GalleryModal from "./GalleryModal";
import GalleryPhotoList from "./GalleryPhotoList";
import GalleryButton from "./GalleryButton";



const Div = styled.div`
    margin-top: 3rem;

    & > h3 {
        text-align: center;
        color: white;
        font-size: 3.5rem;
        font-family: Caveat, sans-serif;
        border-bottom: .1rem solid white;
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

    const [leftButtonActive, setLeftButtonActive] = useState(false);
    const [rightButtonActive, setRightButtonActive] = useState(true);



    const scrollListenerHandler=()=>{
        setTransform(0);
        setActualPhoto(0);
        setLeftButtonActive(false);
        setRightButtonActive(true)
    }
    
    useEffect(()=>{
        window.addEventListener('resize', scrollListenerHandler)
    }, [])


    const prevPhotoHandler = ()=> {
        // check unlock right buton
        if(window.innerWidth < 800 && actualPhoto < photos.length){
            setRightButtonActive(true);
        } else if(window.innerWidth < 1200 && actualPhoto < photos.length-1){
            setRightButtonActive(true);
        } else if(actualPhoto < photos.length-2){
            setRightButtonActive(true);
        }
        // check lock left button
        if (actualPhoto === 1){
            setLeftButtonActive(false);
        }
        // check schould change slide
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
            if (actualPhoto === photos.length-2){
                setRightButtonActive(false);
            }
        } else if(window.innerWidth < 1200 && actualPhoto < photos.length-2){
            setNextPhoto();
            if (actualPhoto === photos.length-3){
                setRightButtonActive(false);
            }
        } else if(actualPhoto < photos.length-3){
            setNextPhoto();
            if (actualPhoto === photos.length-4){
                setRightButtonActive(false);
            }
        } 
        if (actualPhoto === 0){
            setLeftButtonActive(true);
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
                <GalleryButton left onClick={prevPhotoHandler} active={leftButtonActive}></GalleryButton>
                <div>
                    <GalleryPhotoList 
                        photos={photos} 
                        transform={transform} 
                        photoListRef={photoListRef}
                        onClickPhoto={onClickPhoto}/>
                </div>
                <GalleryButton right onClick={nextPhotoHandler} active={rightButtonActive}></GalleryButton>
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