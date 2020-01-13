import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux'
import store from './store'
import Posts from './component/Posts/Posts';
import { BrowserRouter, Route } from 'react-router-dom';
import Comments from './component/Comments/Comments';

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
    <Route exact path="/" component={App}/>
    <Route exact path='/user/:id' component={Posts}/>
    <Route exact path='/user/:id/:idPost' component={Comments}/>
    
    </BrowserRouter>
     

    </Provider>,
    document.getElementById("root")
  );