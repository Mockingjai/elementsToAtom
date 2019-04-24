import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from "react-redux";
import { createStore } from "redux";
import createAtom from './reducers/one-reducer';

const store = createStore(
    createAtom,
    window.devToolsExtension && window.devToolsExtension()
);

ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>
    , document.getElementById('root'));







