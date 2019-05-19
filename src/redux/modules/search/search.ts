import { 
    SearchState, SET_SEARCH_TERM, SetSearchTermAction, TOGGLE_IS_SEARCHING, 
    ResetSearchTermAction, RESET_SEARCH_TERM, ToggleIsSearcingAction, SearchActions, GetSearchState
} from './types';
import axios from 'axios';
import { SEARCH_URL, AMPERSAND, QUERY, EQUAL, PAGE_TOKEN } from '../../../../api';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { setSearchMusicList, setNextPageToken } from '../music/music';
import { SetSearchMusicListAction, SetNextPageTokenAction } from '../music/types';
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
type SearchTypeActions = SetSearchMusicListAction | LoadingAction | SetNextPageTokenAction;
const URL = `${ SEARCH_URL }${ AMPERSAND }${ QUERY }${ EQUAL }`;

export const searchMusic = (searchTerm : string, pageToken? : string) : ThunkAction<Promise<void>, {}, {}, SearchTypeActions> => {
    return async (dispatch : ThunkDispatch<{}, {}, SearchTypeActions>, getState : () => GetSearchState) : Promise<void> => {
        try {
            let data;

            if(searchTerm) {
                const newSearchTerm = encodeURI(searchTerm);
                const { data : result } = await axios.get(`${ URL }${ newSearchTerm }`);
                data = result;
            } else if(pageToken) {
                const { search : { searchTerm } } : GetSearchState = getState();
                const { data : result } = await axios.get(`${ URL }${ encodeURI(searchTerm) }${ AMPERSAND }${ PAGE_TOKEN }${ EQUAL }${ pageToken }`);
                data = result;
            }
            
            const { nextPageToken, items : searchResult } = data;

            dispatch(setNextPageToken(nextPageToken));
            dispatch(setSearchMusicList(searchResult));
        } catch(err) {
            console.log('search.ts searchMusic error : ', err);
        } finally {
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