import { combineReducers, createStore } from 'redux';
import search from './modules/search';

const reducer = combineReducers({
    search
});

const store = createStore(reducer);

export default store;