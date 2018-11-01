


import { combineReducers } from 'redux';
import { reducer as signIn } from '../services/signIn';
import { reducer as hotSearch } from '../services/hotSearch';
import { reducer as article } from '../services/article';
import { reducer as articleDetail } from '../services/articleDetail';


export const reducer  = combineReducers({
    signIn,
    hotSearch,
    article,
    articleDetail,
});