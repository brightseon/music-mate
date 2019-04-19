import { SearchState, SET_SEARCH_TERM, SetSearchTermAction, SearchMusicAction } from './types';
import axios from 'axios';
import { SEARCH_URL } from '../../../../api';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { setMusicList } from '../music/music';

// Actions
export const setSearchTerm = (searchTerm : string) : SetSearchTermAction => {
    return {
        type : SET_SEARCH_TERM,
        payload : {
            searchTerm
        }
    };
};

// API Actions
export const searchMusic = (searchTerm : string) : ThunkAction<{}, {}, {}, SearchMusicAction> => {
    return async (dispatch : ThunkDispatch<{}, {}, SearchMusicAction>) : Promise<void> => {
        try {
            const newSearchTerm : string = encodeURI(searchTerm);
            const { data : { items : searchResult } } = await axios.get(`${ SEARCH_URL }${ newSearchTerm }`);
            console.log('searchResult : ', searchResult);
            dispatch(setMusicList(searchResult));
        } catch(err) {
            console.log('search.ts searchMusic error : ', err);
        }
    };
};

// initialState
const initialState : SearchState = {
    searchTerm : ''
};

// Reducer
const reducer = (state = initialState, action : SetSearchTermAction) : SearchState => {
    switch(action.type) {
        case SET_SEARCH_TERM : 
            return applySetSearchTerm(state, action);

        default :
            return state;
    }
};

const applySetSearchTerm = (state : SearchState, action : SetSearchTermAction) : SearchState => {
    return {
        ...state,
        searchTerm : action.payload.searchTerm
    };
};

export default reducer;