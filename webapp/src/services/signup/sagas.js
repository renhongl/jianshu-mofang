
import { call, put, takeEvery } from 'redux-saga/effects';
import * as actionTypes from './actionTypes';
import * as actions from './actions';
import { createUser } from '../../api/signUp';

function* createUserFunc(action) {
    try {
        yield put(actions.signUpStart());
        const result = yield call(createUser, action.data);
        if (result.status === '0000') {
            yield put(actions.signUpSuccess(result));
        } else {
            yield put(actions.signUpFail());
        }
    } catch (error) {
        yield put(actions.signUpFail());
    }
}

function* saga() {
    yield takeEvery(actionTypes.SIGN_UP, createUserFunc);
}

export default saga;

















