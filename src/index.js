
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

import registerServiceWorker from './registerServiceWorker';
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware  from 'redux-saga';

//import styles
import 'antd/dist/antd.css'; 
import './index.css';

//import register
import { reducer } from './utils/registerReducer';
import { initialState } from './utils/registerState';
import { sagas } from './utils/registerSaga';
import getComponent from './utils/asyncComponent';

//get async page, for dynamic loading
const HomePage = getComponent(() => import('./pages/home'));
const SigninPage = getComponent(() => import('./pages/signin'));
const SignupPage = getComponent(() => import('./pages/signup'));
const About = getComponent(() => import('./pages/about'));
const NotFound = getComponent(() => import('./pages/notFound'));

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, initialState, applyMiddleware(sagaMiddleware));

sagas.forEach(saga => {
    sagaMiddleware.run(saga);
});

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Switch>
                <Route exact path="/" component={HomePage}></Route>
                <Route path="/signIn" component={SigninPage}></Route>
                <Route path="/signUp" component={SignupPage}></Route>
                <Route path="/about" component={About}></Route>
                <Route component={NotFound}></Route>
            </Switch>
        </Router>
    </Provider>, 
    document.getElementById('root')
);

registerServiceWorker();


