import { SearchState, SET_SEARCH_TERM, SetSearchTermAction, SearchMusicAction, TOGGLE_IS_SEARCHING, ResetSearchTermAction, RESET_SEARCH_TERM } from './types';
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

export const resetSearchTerm = () : ResetSearchTermAction => {
    return {
        type : RESET_SEARCH_TERM
    };
};

export const toggleIsSearching = () => {
    return {
        type : TOGGLE_IS_SEARCHING
    };
};

// API Actions
export const searchMusic = (searchTerm : string) : ThunkAction<{}, {}, {}, SearchMusicAction> => {
    return async (dispatch : ThunkDispatch<{}, {}, SearchMusicAction>) : Promise<void> => {
        try {
            const newSearchTerm : string = encodeURI(searchTerm);
            const { data : { items : searchResult } } = await axios.get(`${ SEARCH_URL }${ newSearchTerm }`);
            dispatch(setMusicList(searchResult));
        } catch(err) {
            console.log('search.ts searchMusic error : ', err);
        }
    };
};

// initialState
const initialState : SearchState = {
    searchTerm : '',
    isSearcing : false
};

// Reducer
const reducer = (state = initialState, action : SetSearchTermAction) : SearchState => {
    switch(action.type) {
        case SET_SEARCH_TERM : 
            return applySetSearchTerm(state, action);

        case RESET_SEARCH_TERM :
            return applyResetSearchTerm(state);

        case TOGGLE_IS_SEARCHING : 
            return applyToggleIsSearching(state);

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

const applyResetSearchTerm = (state : SearchState) : SearchState => {
    return {
        ...state,
        searchTerm : ''
    };
};

const applyToggleIsSearching = (state : SearchState) : SearchState => {
    return {
        ...state,
        isSearcing : !state.isSearcing
    };
};

export default reducer;