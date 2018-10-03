

import * as actionTypes from './actionTypes';

export default (articleDetail = null, action) => {
    switch(action.type) {
        case actionTypes.GET_ARTICLE_DETAIL:
            return {...action.data};

        case actionTypes.GET_ARTICLE_DETAIL_START:
            return {...action.data};

        case actionTypes.GET_ARTICLE_DETAIL_SUCCESS:
            return {...action.data};

        case actionTypes.GET_ARTICLE_DETAIL_FAIL:
            return {...action.data};
        
        default:
            return articleDetail;
    }
}