


import { saga as signInSaga } from '../services/signIn';
import { saga as hotSearchSaga } from '../services/hotSearch';
import { saga as articleSaga } from '../services/article';
import { saga as articleDetailSaga } from '../services/articleDetail';


export const sagas = [
    signInSaga, 
    hotSearchSaga, 
    articleSaga,
    articleDetailSaga
];



















