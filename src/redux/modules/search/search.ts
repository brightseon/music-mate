import { 
    SearchState, SET_SEARCH_TERM, SetSearchTermAction, TOGGLE_IS_SEARCHING, 
    ResetSearchTermAction, RESET_SEARCH_TERM, ToggleIsSearcingAction, SearchActions
} from './types';
import axios from 'axios';
import { SEARCH_URL } from '../../../../api';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { setSearchMusicList } from '../music/music';
import { SetSearchMusicListAction } from '../music/types';
import { loading } from '../loading/loading';
import { LoadingAction } from '../loading/types';

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

export const toggleIsSearching = (isSearching : boolean) : ToggleIsSearcingAction => {
    return {
        type : TOGGLE_IS_SEARCHING,
        payload : {
            isSearching
        }
    };
};

// API Actions
export const searchMusic = (searchTerm : string) : ThunkAction<Promise<void>, {}, {}, SetSearchMusicListAction | LoadingAction> => {
    return async (dispatch : ThunkDispatch<{}, {}, SetSearchMusicListAction | LoadingAction>) : Promise<void> => {
        try {
            const newSearchTerm : string = encodeURI(searchTerm);
            const { data : { items : searchResult } } = await axios.get(`${ SEARCH_URL }${ newSearchTerm }`);
            dispatch(setSearchMusicList(searchResult));
        } catch(err) {
            console.log('search.ts searchMusic error : ', err);
        } finally {
            console.log('searchMusic finally')
            dispatch(loading(false));
        }
    };
};

// initialState
const initialState : SearchState = {
    searchTerm : '',
    isSearching : false
};

// Reducer
const reducer = (state : SearchState = initialState, action : SearchActions) : SearchState => {
    switch(action.type) {
        case SET_SEARCH_TERM : 
            return applySetSearchTerm(state, action);

        case RESET_SEARCH_TERM :
            return applyResetSearchTerm(state);

        case TOGGLE_IS_SEARCHING : 
            return applyToggleIsSearching(state, action);

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

const applyToggleIsSearching = (state : SearchState, action : ToggleIsSearcingAction) : SearchState => {
    return {
        ...state,
        isSearching : action.payload.isSearching
    };
};

export default reducer;