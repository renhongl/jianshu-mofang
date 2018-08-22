
import { call, put, takeEvery } from 'redux-saga/effects';
import * as actionTypes from './actionTypes';
import * as actions from './actions';
import { fetchHotSearch } from '../../api/header';

function* queryHot(action) {
    try {
        yield put(actions.getHotSearchStart({msg: 'header start'}));
        const result = yield call(fetchHotSearch);
        if (result.hotSearch.length > 0) {
            yield put(actions.getHotSearchSuccess({...result, msg: 'header success'}));
        } else {
            yield put(action.getHotSearchFail({msg: 'header fail'}));
        }
    } catch (error) {
        yield put(action.getHotSearchFail({msg: 'header faile'}));
    }
}

function* saga() {
    yield takeEvery(actionTypes.GET_HOT_SEARCH, queryHot);
}

export default saga;

















