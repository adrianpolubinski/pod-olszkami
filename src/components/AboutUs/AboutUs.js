import { useReducer } from "react";
import { useCallback, useEffect, useMemo } from "react";

import { initialState, actionTypes, aboutUsReducer } from "./AboutUsReducer";

import styled from "styled-components";
import Inner from "../../layouts/Inner";
import AboutUsArticle from "./AboutUsArticle";
import AboutUsConfig from './AboutUsConfig';

const Section = styled.section`
    color: #333;
    overflow: hidden;
    & > div > h2 {
        text-align: center;
        color: #333;
        margin: 5rem 0;
        font-size: 5rem;
        font-family: Caveat, sans-serif;
        border-bottom: .5rem solid black;
    }
`


function AboutUs(){

    const [{visibleArticles, articleRefs}, dispatch] = useReducer(aboutUsReducer, initialState);

    // not get same articles after rerender
    const articles = useMemo(() => {
        return AboutUsConfig;
    }, []);

    const memoizedSetVisibleArtivles = useCallback(() => {
        const windowOffsetBottom = window.innerHeight+window.scrollY-50;
        const articleOffestTop1 = articleRefs[0].current.offsetTop;
        const articleOffestTop2 = articleRefs[1].current.offsetTop;
        const articleOffestTop3 = articleRefs[2].current.offsetTop;
        dispatch({type: actionTypes.updateVisibleArticles, payload: 0})
        if( windowOffsetBottom > articleOffestTop1 
            && windowOffsetBottom < articleOffestTop2)
                dispatch({type: actionTypes.updateVisibleArticles, payload: 1})
        else if( windowOffsetBottom > articleOffestTop2 
            && windowOffsetBottom < articleOffestTop3)
                dispatch({type: actionTypes.updateVisibleArticles, payload: 2})
        else if( windowOffsetBottom > articleOffestTop3)
                dispatch({type: actionTypes.updateVisibleArticles, payload: 3})
    }, [articleRefs])

    useEffect(()=>{
        window.addEventListener('scroll', memoizedSetVisibleArtivles);
        return ()=> window.removeEventListener('scroll', memoizedSetVisibleArtivles)
    }, [memoizedSetVisibleArtivles])

  
    const articleElements = articles.map((article, index) => {
        if(index<visibleArticles)
            return (
                <AboutUsArticle 
                    key={index} 
                    article={article} 
                    dispatchAboutUs={dispatch} 
                    visible={true}/>)
        else  return (
                <AboutUsArticle 
                    key={index} 
                    article={article}
                    dispatchAboutUs={dispatch}
                    visible={false}/>)
    });

    return (
        <Section id="aboutUs">
            <Inner>
                <h2>Kilka słów O NAS</h2>
                {articleElements}
            </Inner>
        </Section>
    )
}

export default AboutUs;