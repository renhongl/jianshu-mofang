
import { call, put, takeEvery } from 'redux-saga/effects';
import * as actionTypes from './actionTypes';
import * as actions from './actions';
import { fetchUserInfor } from '../../api/signIn';
import { startingFormat, successFormat, failFormat } from '../../utils/response';


function* queryUser(action) {
    try {
        yield put(actions.signInStart());
        const result = yield call(fetchUserInfor, action.data);
        if (result.status === '0000') {
            yield put(actions.signInSuccess(result));
        } else {
            yield put(actions.signInFail());
        }
    } catch (error) {
        yield put(actions.signInFail());
    }
}

function* saga() {
    yield takeEvery(actionTypes.SIGN_IN, queryUser);
}

export default saga;

















