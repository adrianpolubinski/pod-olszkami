import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";

const Article = styled.article`
    opacity: 0;
    margin: 5rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: transform 1.5s, opacity 1.5s;

    &:nth-child(odd){
        transform: translateX(-50%);    
    }

    &:nth-child(even){
        transform: translateX(50%);
    }

    & div {
        width: 100%;
    }

    & div h2 {
        font-size: 3rem;
        font-family: Caveat, sans-serif;
        margin-bottom: 2rem;
    }

    & div p {
        font-size: 2.5rem;
        font-family: Caveat, sans-serif;
        text-align: justify;
    }

    & img {
        height: auto;
        width: 100%;
        max-width: 35rem;
        margin-top: 5rem;
        border-radius: 2rem;
        box-shadow: 0rem 0rem 1.2rem .5rem #000;
    }

    @media (min-width: 500px) {
        & div h2 {
            font-size: 3.5rem;
        }
        & div p {
            font-size: 3rem;
        }
    }

    @media (min-width: 900px) {
        margin: 5rem 0;
        flex-direction: row;
        &:nth-child(odd){
            & img {
                margin-left: 3rem;
                box-shadow: 1rem 1rem 1.5rem .3rem #000;
            }
        }
        &:nth-child(even){
            flex-direction: row-reverse; 
            & img {
                margin-right: 3rem;
                box-shadow: -1rem 1rem 1.5rem .3rem #000;
            }
        }

        & div {
            width:60%;
        }

        & img {
            height: auto;
            width: 40rem;
            margin: 0;
        }
    }
    
    @media (min-width: 1200px) {
        
        & div h2 {
            font-size: 4rem;
        }
        & div p {
            font-size: 3.3rem;
        }
        
    }
    ${props =>{
        if(props.visible===true) {
            return `
                opacity: 1;
          
                &:nth-child(odd){
                    transform: translateX(0);
                }
                &:nth-child(even){
                    transform: translateX(0);
                }
            `
        }
    }}


  


`

function AboutUsArticle( {article, getArticleRefs, visible} ) {

    const [isVisible, setIsVisible] = useState(visible);
    const articleRef = useRef();

    useEffect(()=>{ setIsVisible(visible) }, [visible])

    
    getArticleRefs(articleRef);
    return (
        <Article visible={isVisible} ref={articleRef}>
            <div>     
                <h2>{article.h2}</h2>
                <p>{article.p}</p>
            </div>
            <img loading="lazy" src={article.imgSrc} alt={article.imgAlt} />
        </Article>
    );
}

export default AboutUsArticle;