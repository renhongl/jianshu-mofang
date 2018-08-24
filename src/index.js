import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { HomePage } from './pages/home';
import About from './pages/about';
import NotFound from './pages/notFound';
import registerServiceWorker from './registerServiceWorker';
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware  from 'redux-saga';
import 'antd/dist/antd.css'; 
import './index.css';
import { reducer } from './utils/registerReducer';
import { initialState } from './utils/registerState';
import { sagas } from './utils/registerSaga';
import { SigninPage } from './pages/signin';
import { SignupPage } from './pages/signup';


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

