
import { call, put, takeEvery } from 'redux-saga/effects';
import * as actionTypes from './actionTypes';
import * as actions from './actions';
import { fetchArticleList } from '../../api/article';
import { startingFormat, successFormat, failFormat } from '../../utils/response';


function* getArticle(action) {
    try {
        yield put(actions.getArticleListStart(startingFormat));
        const result = yield call(fetchArticleList, action.data);
        if (result.length > 0) {
            yield put(actions.getArticleListSuccess({...successFormat, data: result}));
        } else {
            yield put(actions.getArticleListFail(failFormat));
        }
    } catch (error) {
        yield put(actions.getArticleListFail(failFormat));
    }
}

function* saga() {
    yield takeEvery(actionTypes.GET_ARTICLE_LIST, getArticle);
}

export default saga;

















