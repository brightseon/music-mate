import { combineReducers, createStore, applyMiddleware } from 'redux';
import search from './modules/search';
import thunk from 'redux-thunk';

const middlewares = [
    thunk
];

const reducer = combineReducers({
    search
});

const store = createStore(reducer, applyMiddleware(...middlewares));

export default store;