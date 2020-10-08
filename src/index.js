import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './home';
import Backup from './backup' 
import * as serviceWorker from './serviceWorker';
import {Switch, BrowserRouter, Route} from 'react-router-dom'
import store from './redux/store'
import {Provider} from 'react-redux'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
    <Switch>
    <Route exact path='/' component={App} />
    {/* <Route exact path='/home/:userId' component={Home} /> */}
    <Route exact path='/home/:userId' component={Home} />
    <Route exact path='/backup' component={Backup} />
    </Switch>
    </BrowserRouter>
    </Provider>    
  </React.StrictMode>,
  document.getElementById('root')
);


serviceWorker.unregister();
