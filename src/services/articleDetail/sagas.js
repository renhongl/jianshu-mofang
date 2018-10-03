
import { call, put, takeEvery } from 'redux-saga/effects';
import * as actionTypes from './actionTypes';
import * as actions from './actions';
import { fetchArticleDetail } from '../../api/articleDetail';
import { startingFormat, successFormat, failFormat } from '../../utils/response';


function* getArticleDetail(action) {
    try {
        yield put(actions.getArticleDetailStart(startingFormat));
        const result = yield call(fetchArticleDetail, action.data);
        if (result) {
            yield put(actions.getArticleDetailSuccess({...successFormat, data: result}));
        } else {
            yield put(actions.getArticleDetailFail(failFormat));
        }
    } catch (error) {
        yield put(actions.getArticleDetailFail(failFormat));
    }
}

function* saga() {
    yield takeEvery(actionTypes.GET_ARTICLE_DETAIL, getArticleDetail);
}

export default saga;

















