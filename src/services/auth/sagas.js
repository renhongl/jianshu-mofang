
import { call, put, takeEvery } from 'redux-saga/effects';
import * as actionTypes from './actionTypes';
import * as actions from './actions';
import { fetchUserInfor } from '../../api/auth';

function* queryUser(action) {
    try {
        yield put(actions.authSignInStart({msg: 'loading...'}));
        const result = yield call(fetchUserInfor, action.data);
        if (result.length > 0) {
            yield put(actions.authSignInSuccess({...result[0], msg: 'sign successfully', valid: true}));
        } else {
            yield put(actions.authSignInFail({msg: 'User name or password is wrong!'}));
        }
    } catch (error) {
        yield put(actions.authSignInFail({msg: 'failure'}));
    }
}

function* saga() {
    yield takeEvery(actionTypes.AUTH_SIGN_IN, queryUser);
}

export default saga;

















