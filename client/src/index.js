import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { applyMiddleware, createStore } from "redux";
import { BrowserRouter } from 'react-router-dom';
import logger from "redux-logger";
import { Provider } from 'react-redux'
import rootReducer from './reducers/rootReducer';

const store = createStore(rootReducer, applyMiddleware(logger));
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);