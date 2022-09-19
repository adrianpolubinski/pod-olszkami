import { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import Inner from "../layouts/Inner";
import AboutUsArticle from "./AboutUsArticle";

const Section = styled.section`
    overflow: hidden;
    & h1 {
      
        margin: 5rem 0;
        font-size: 3rem;
        font-family: Caveat, sans-serif;
        @media (min-width: 500px) {
            font-size: 5rem;
        }
    }

`

function AboutUs(){

    const [visibleArticles, setVisibleArticles] = useState(0);

    const articleRefs = [];
    const articles = [
        {
            h2: "Kim jesteśmy?",
            p: "Znajdujemy się w zacisznym i malowniczym miejscu nad rzeką Czarna Hańcza Zajmujemy się organizacją spływów kajakowych. Nasze kajaki pływają po rzekach: Czarna Hańcza, Marycha, Kanał Augustowski.",
            imgSrc: "img/aboutUs/aboutUs-image-1.jpg",
            imgAlt: "Zdjęcie kajaków"
        },
        {
            h2: "Co oferujemy?",
            p: "Oferujemy miejsce rekreacyjne z ogniskiem, dużą nową wiatą i możliwością wynajęcia sauny. Pole namiotowe, do dyspozycji odpoczywających są udostepnione 2 łazienki z prysznicami. Do każdego klienta podchodzimy indywidualnie.",
            imgSrc: "img/aboutUs/aboutUs-image-2.jpg",
            imgAlt: "Zdjęcie wiaty z sauną"
        },
        {
            h2: "Co w sobie cenimy?",
            p: "Najważniejszą rzeczą dla nas jest komfort naszych klientów. Posiadamy szereg udogodnień takich jak: duży bezpłatny parking, dobrą lokalizację, albowiem jesteśmy zlokalizowani przy samej drodze krajowej DK16. W zasięgu 300 m znajduje się sklep spożywczy oraz stacja paliw.",
            imgSrc: "img/aboutUs/aboutUs-image-3.jpg",
            imgAlt: "Zdjęcie w zimową porę roku"
        }
    ]

   

    const setVisibleArticlesHandler = () => {
        const windowOffsetBottom = window.innerHeight+window.scrollY;
        const articleOffestTop1 = articleRefs[0].current.offsetTop;
        const articleOffestTop2 = articleRefs[1].current.offsetTop;
        const articleOffestTop3 = articleRefs[2].current.offsetTop;
        setVisibleArticles(0);
        if( windowOffsetBottom > articleOffestTop1 
            && windowOffsetBottom < articleOffestTop2)
                setVisibleArticles(1);
        else if( windowOffsetBottom > articleOffestTop2 
            && windowOffsetBottom < articleOffestTop3)
            setVisibleArticles(2);
        else if( windowOffsetBottom > articleOffestTop3)
            setVisibleArticles(3);
    }

    useEffect(()=>{
        window.addEventListener('scroll', setVisibleArticlesHandler);
        return ()=> window.removeEventListener('scroll', setVisibleArticlesHandler)
    }, [setVisibleArticlesHandler])

    const getArticleRefs = ( ref ) => {
        articleRefs.push(ref)
    }

    const articleElements = articles.map((article, index) => {
        if(index<visibleArticles)
            return <AboutUsArticle key={index} article={article} getArticleRefs={getArticleRefs} visible={true}/>
        else  return <AboutUsArticle key={index} article={article}       getArticleRefs={getArticleRefs} visible={false}/>
    });

    return (
        <Section id="aboutUs">
            <Inner>
                <h1>Pod Olszkami - Spływy kajakowe, Sauna, oraz wiele więcej! </h1>
                {articleElements}
            </Inner>
        </Section>
    )
}

export default AboutUs;