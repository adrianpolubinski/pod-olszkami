const initialState = {
    visibleArticles: 0,
    articleRefs: []
}

const actionTypes = {
    updateVisibleArticles: "UPDATE_VISIBLE_ARTICLES",
    addArticleRef: "Add_ARTICLE_REF",
}

function aboutUsReducer(prevState = initialState, action){
    switch(action.type) {
        case actionTypes.updateVisibleArticles: 
            return {
                ...prevState,
                visibleArticles: action.payload,
            };
        case actionTypes.addArticleRef:
            return {
                ...prevState,
                articleRefs: [...prevState.articleRefs, action.payload],
            };
        case actionTypes.reset:
            return  {
                ...prevState,
                ...initialState
            };
        default:
            return prevState;
    }
}

export {initialState, actionTypes, aboutUsReducer}