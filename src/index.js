import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore,combineReducers,applyMiddleware,compose} from 'redux';
import counterReducer from './store/reducers/couter';
import resultReducer from './store/reducers/results';
// import reducer from './store/reducer';
import {Provider} from 'react-redux';

import thunk from 'redux-thunk';

const rootReducer=combineReducers({
  ctr:counterReducer,
  res:resultReducer
})


//middleware
const logger= store =>{
  return next =>{
    return action=>{
      console.log('[Middelware] dipatching',action);
      const result=next(action);
      console.log('[Middleware] state : ',store.getState());
      return result
    }
  }
}

// const store=createStore(reducer);
const composeEnahancers=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store=createStore(rootReducer,composeEnahancers( applyMiddleware(logger,thunk)));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
