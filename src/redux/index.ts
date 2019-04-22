import { combineReducers, createStore, applyMiddleware } from 'redux';
import search from './modules/search';
import music from './modules/music';
import loading from './modules/loading';
import thunk from 'redux-thunk';

const middlewares = [
    thunk
];

const reducer = combineReducers({
    search,
    music,
    loading
});

const store = createStore(reducer, applyMiddleware(...middlewares));

export default store;