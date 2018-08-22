
import { call, put, takeEvery } from 'redux-saga/effects';
import * as actionTypes from './actionTypes';
import * as actions from './actions';
import { fetchUserInfor } from '../../api/auth';

function* queryUser(action) {
    try {
        yield put(actions.authSignInStart({msg: '登陆中...', valid: false}));
        const result = yield call(fetchUserInfor, action.data);
        if (result.length > 0) {
            yield put(actions.authSignInSuccess({...result[0], msg: '登录成功，正在跳转。', valid: true}));
        } else {
            yield put(actions.authSignInFail({msg: '用户名或密码错误。', valid: false}));
        }
    } catch (error) {
        yield put(actions.authSignInFail({msg: '未知错误。', valid: false}));
    }
}

function* saga() {
    yield takeEvery(actionTypes.AUTH_SIGN_IN, queryUser);
}

export default saga;

















