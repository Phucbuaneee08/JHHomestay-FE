import { createStore, combineReducers } from 'redux';
import { filterReducer } from './reducers';

const rootReducer = combineReducers({ filterReducer });
export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());