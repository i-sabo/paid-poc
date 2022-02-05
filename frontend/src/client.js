import React from 'react'
import { render } from 'react-dom'
import { Router, browserHistory } from 'react-router'
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import routes from './routes'
import rootReducer from './reducers/rootReducer'

// Grab the state from a global injected into server-generated HTML
const preloadedState = window.__PRELOADED_STATE__;

// Create Redux store with initial state
const store = createStore(rootReducer, preloadedState, applyMiddleware(thunk));

console.log("Rendering from client.js");
render(
  <Provider store={store}>
    <Router routes={routes} history={browserHistory}/>
  </Provider>,
  document.getElementById('app')
);
