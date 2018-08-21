


import React from 'react';
import { view as AuthComp, reducer as authReducer, saga as authSaga } from '../services/auth';

const initialState = {
    auth: {
        id: '001',
        userName: 'renhongl',
        password: '112233',
        msg: 'Need sign in',
        valid: false
    }
};

const reducer = {
    auth: authReducer
}

const saga = [authSaga];

const HomePage = () => (
    <div>Home<AuthComp /></div>
)

export {
    HomePage,
    reducer,
    initialState,
    saga,
}