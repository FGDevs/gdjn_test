import React from 'react';
import ReactDom from 'react-dom';
import App from "./App";
import 'index.css';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from'redux';
import Thunk from 'redux-thunk';
import Reducers from './redux/reducers';


ReactDom.render(
  <React.StrictMode>
		<Provider store = {createStore(Reducers,{}, applyMiddleware(Thunk))}>
    	<App/>
		</Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);