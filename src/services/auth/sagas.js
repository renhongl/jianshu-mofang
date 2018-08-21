
import { call, put, takeEvery } from 'redux-saga/effects';
import * as actionTypes from './actionTypes';
import * as actions from './actions';
import { fetchUserInfor } from '../../api/auth';
import { message } from 'antd';

function* queryUser(action) {
    try {
        const result = yield call(fetchUserInfor, action.data);
        if (result.length > 0) {
            yield put(actions.authSignInSuccess({...result[0], msg: 'success', valid: true}));
            message.info('Sign In Successfully!');
        } else {
            message.warning('User name or password is wrong!');
        }
    } catch (error) {
        message.error(error);
    }
}

function* saga() {
    yield takeEvery(actionTypes.AUTH_SIGN_IN, queryUser);
}

export default saga;

















