import styled from "styled-components";
import Inner from "../layouts/Inner";
import GallerySlider from "./GallerySlider";


const Section = styled.section`
    background-color: #070918;
    padding: 3rem 0;
    & h2 {
        color: white;
        text-align: center;
        font-size: 4rem;
    }
`;

function Gallery() {

    const winterPhotos = [{
        url: "img/gallery/winter/photo-1-preview.jpg",
        alt: "Zimowe zdjęcie",
    },
    {
        url: "img/gallery/winter/photo-2-preview.jpg",
        alt: "Zimowe zdjęcie",
    },
    {
        url: "img/gallery/winter/photo-3-preview.jpg",
        alt: "Zimowe zdjęcie",
    },
    {
        url: "img/gallery/winter/photo-4-preview.jpg",
        alt: "Zimowe zdjęcie",
    },
    {
        url: "img/gallery/winter/photo-5-preview.jpg",
        alt: "Zimowe zdjęcie"
    },
    {
        url: "img/gallery/winter/photo-6-preview.jpg",
        alt: "Zimowe zdjęcie"
    },
    {
        url: "img/gallery/winter/photo-7-preview.jpg",
        alt: "Zimowe zdjęcie"
    },
    {
        url: "img/gallery/winter/photo-8-preview.jpg",
        alt: "Zimowe zdjęcie"
    }];

    const viewPhotos = [{
        url: "img/gallery/view/photo-1-preview.jpg",
        alt: "Zdjęcie z pięknego widoku",
    },
    {
        url: "img/gallery/view/photo-2-preview.jpg",
        alt: "Zdjęcie z pięknego widoku",
    },
    {
        url: "img/gallery/view/photo-3-preview.jpg",
        alt: "Zdjęcie z pięknego widoku",
    },
    {
        url: "img/gallery/view/photo-4-preview.jpg",
        alt: "Zdjęcie z pięknego widoku",
    },
    {
        url: "img/gallery/view/photo-5-preview.jpg",
        alt: "Zdjęcie z pięknego widoku"
    },
    {
        url: "img/gallery/view/photo-6-preview.jpg",
        alt: "Zdjęcie z pięknego widoku"
    }];

    const placePhotos = [{
        url: "img/gallery/place/photo-1-preview.jpg",
        alt: "Zdjęcie z miejsca pod olszkami",
    },
    {
        url: "img/gallery/place/photo-2-preview.jpg",
        alt: "Zdjęcie z miejsca pod olszkami",
    },
    {
        url: "img/gallery/place/photo-3-preview.jpg",
        alt: "Zdjęcie z miejsca pod olszkami",
    },
    {
        url: "img/gallery/place/photo-4-preview.jpg",
        alt: "Zdjęcie z miejsca pod olszkami",
    },
    {
        url: "img/gallery/place/photo-5-preview.jpg",
        alt: "Zdjęcie z miejsca pod olszkami"
    },
    {
        url: "img/gallery/place/photo-6-preview.jpg",
        alt: "Zdjęcie z miejsca pod olszkami"
    }];


    const equipmentPhotos = [{
        url: "img/gallery/equipment/photo-1-preview.jpg",
        alt: "Zdjęcie z wyposarzenia",
    },
    {
        url: "img/gallery/equipment/photo-2-preview.jpg",
        alt: "Zdjęcie z wyposarzenia",
    },
    {
        url: "img/gallery/equipment/photo-3-preview.jpg",
        alt: "Zdjęcie z wyposarzenia",
    },
    {
        url: "img/gallery/equipment/photo-4-preview.jpg",
        alt: "Zdjęcie z wyposarzenia",
    },
    {
        url: "img/gallery/equipment/photo-5-preview.jpg",
        alt: "Zdjęcie z wyposarzenia"
    }];
    return (
        <Section>
            <Inner>
                <h2>Galeria</h2>
                <GallerySlider photos={winterPhotos} title="Zimowy Klimat"/>
                <GallerySlider photos={viewPhotos} title="Piękne widoczki"/>
                <GallerySlider photos={placePhotos} title="Nasze miejsce"/>
                <GallerySlider photos={equipmentPhotos} title="Nasz sprzęt"/>
            </Inner>
        </Section>
    )
}

export default Gallery;