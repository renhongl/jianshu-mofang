
import { call, put, takeEvery } from 'redux-saga/effects';
import * as actionTypes from './actionTypes';
import * as actions from './actions';
import { fetchHotSearch } from '../../api/hotSearch';
import { startingFormat, successFormat, failFormat } from '../../utils/response';

function* queryHot(action) {
    try {
        yield put(actions.getHotSearchStart(startingFormat));
        const result = yield call(fetchHotSearch);
        if (result.items.length > 0) {
            yield put(actions.getHotSearchSuccess({...successFormat, data: [...result.items]}));
        } else {
            yield put(actions.getHotSearchFail(failFormat));
        }
    } catch (error) {
        yield put(actions.getHotSearchFail(failFormat));
    }
}

function* saga() {
    yield takeEvery(actionTypes.GET_HOT_SEARCH, queryHot);
}

export default saga;

















