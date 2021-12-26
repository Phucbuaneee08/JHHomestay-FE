import { createStore, combineReducers } from 'redux';
import { filterReducer, homestayIdReducer, guestNumberReducer } from './reducers';

const rootReducer = combineReducers({ filterReducer, homestayIdReducer, guestNumberReducer });
export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());