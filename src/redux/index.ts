import { combineReducers, createStore, applyMiddleware } from 'redux';
import search from './modules/search';
import music from './modules/music';
import thunk from 'redux-thunk';

const middlewares = [
    thunk
];

const reducer = combineReducers({
    search,
    music
});

const store = createStore(reducer, applyMiddleware(...middlewares));

export default store;