import { createStore, combineReducers } from 'redux';
import { filterReducer } from './reducers';

const rootReducer = combineReducers({ filterReducer });
export const store = createStore(rootReducer);