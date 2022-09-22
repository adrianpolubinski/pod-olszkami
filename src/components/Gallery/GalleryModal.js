import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Backdrop from '../Modal/Backdrop';
import PhotoOverlay from '../Modal/PhotoOverlay';

function GalleryModal({galleryModalVisible, setGalleryModalVisible, selectedPhoto, actualPhoto, photosCount}) {

    const [isVisivble, setIsVisible] = useState(galleryModalVisible);

    useEffect(()=>{
        setIsVisible(galleryModalVisible);
    } ,[galleryModalVisible])

    return (
        <>
            {isVisivble && ReactDOM.createPortal(<Backdrop setGalleryModalVisible={setGalleryModalVisible}/>, document.getElementById('backdrop-root'))}
            {isVisivble && ReactDOM.createPortal(
            <PhotoOverlay 
                selectedPhoto={selectedPhoto} 
                setGalleryModalVisible={setGalleryModalVisible} 
                actualPhoto={actualPhoto}
                photosCount={photosCount}/>,
                document.getElementById('overlay-root')
            )}
        </>   
    )
}

export default GalleryModal;