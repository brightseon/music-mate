export const SET_SEARCH_TERM = 'SET_SEARCH_TERM';
export const SEARCH : string = 'SEARCH';

export interface SearchState {
    searchTerm : string;
};

export interface SetSearchTermAction {
    type : typeof SET_SEARCH_TERM;
    payload : SetSearchTermPayload;
};

// export interface SearchMusicAction {
//     type : typeof SET_SEARCH_TERM;
//     payload : SearchActionPayload;
// };

interface SetSearchTermPayload {
    searchTerm : string;
};