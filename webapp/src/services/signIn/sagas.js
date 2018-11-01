
import { call, put, takeEvery } from 'redux-saga/effects';
import * as actionTypes from './actionTypes';
import * as actions from './actions';
import { fetchUserInfor } from '../../api/signIn';
import { startingFormat, successFormat, failFormat } from '../../utils/response';


function* queryUser(action) {
    try {
        yield put(actions.signInStart({...startingFormat, msg: '登陆中...'}));
        const result = yield call(fetchUserInfor, action.data);
        if (result.length > 0) {
            yield put(actions.signInSuccess({...successFormat, data: result[0], msg: '登录成功，正在跳转。'}));
        } else {
            yield put(actions.signInFail({...failFormat, msg: '用户名或密码错误。'}));
        }
    } catch (error) {
        yield put(actions.signInFail({...failFormat, msg: '未知错误。'}));
    }
}

function* saga() {
    yield takeEvery(actionTypes.SIGN_IN, queryUser);
}

export default saga;

















