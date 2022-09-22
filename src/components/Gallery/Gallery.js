import styled from "styled-components";
import Inner from "../../layouts/Inner";
import GallerySlider from "./GallerySlider";
import { winterPhotos, viewPhotos, placePhotos, equipmentPhotos} from "./GalleryConfig";

const Section = styled.section`
    background-color: #070918;
    padding: 3rem 0;
    & h2 {
        color: white;
        font-family: Caveat, sans-serif;
        font-weight: 700;
        font-size: 5rem;
        text-align: center;
    }
`;

function Gallery() {

    
    return (
        <Section id="gallery">
            <Inner>
                <h2>Przekonaj się dlaczego my!</h2>
                <GallerySlider photos={winterPhotos} title="Zimowy Klimat"/>
                <GallerySlider photos={viewPhotos} title="Piękne widoczki"/>
                <GallerySlider photos={placePhotos} title="Nasze miejsce"/>
                <GallerySlider photos={equipmentPhotos} title="Nasz sprzęt"/>
            </Inner>
        </Section>
    )
}

export default Gallery;