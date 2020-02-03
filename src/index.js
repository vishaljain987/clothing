import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import rootReducer from './reducers/rootReducer';


const middlewares = [];
if(process.env.NODE_ENV==='development'){
   middlewares.push(logger)
}
const store = createStore(rootReducer, applyMiddleware(...middlewares));

ReactDOM.render(<Provider store={store}>
                    <App />
                 </Provider>, document.getElementById('root'));
