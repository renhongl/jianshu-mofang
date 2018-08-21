import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { HomePage, reducer as homePageReducer, initialState as homePageInitialState, saga as homePageSaga } from './pages/home';
import About from './pages/about';
import NotFound from './pages/notFound';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware  from 'redux-saga';
import 'antd/dist/antd.css'; 

const sagaMiddleware = createSagaMiddleware();

const initialState = {...homePageInitialState};
const reducerMapping = {...homePageReducer};
const reducer = combineReducers(reducerMapping);
const store = createStore(reducer, initialState, applyMiddleware(sagaMiddleware));

const sagas = [...homePageSaga];
sagas.forEach(saga => {
    sagaMiddleware.run(saga);
});

const JianShuRouter = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={HomePage}></Route>
            <Route path="/about" component={About}></Route>
            <Route component={NotFound}></Route>
        </Switch>
    </Router>
)


ReactDOM.render(
    <Provider store={store}>
        <JianShuRouter />
    </Provider>, 
    document.getElementById('root')
);

registerServiceWorker();
