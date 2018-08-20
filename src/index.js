import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/home';
import About from './pages/about';
import NotFound from './pages/notFound';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const store = createStore();

const JianShuRouter = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={Home}></Route>
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
