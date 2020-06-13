import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import shopReducer from './reducers';

let store = createStore(
  shopReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
