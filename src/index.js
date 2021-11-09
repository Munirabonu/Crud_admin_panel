import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'antd/dist/antd.css'
import { applyMiddleware, createStore } from "redux";
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './redux/reducer/rootReducer';
import { Provider } from 'react-redux';
import Home from './component/Home';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)), window.REDUX_DEVTOOLS_EXTENSION &&window.REDUX_DEVTOOLS_EXTENSION())


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

