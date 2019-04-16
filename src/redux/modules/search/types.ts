// Actions
export const SET_SEARCH_TERM : string = 'SET_SEARCH_TERM';
export const SEARCH_MUSIC : string = 'SEARCH_MUSIC';

// Initial State Type
export interface SearchState {
    searchTerm : string;
};

// Action Types
export interface SetSearchTermAction {
    type : typeof SET_SEARCH_TERM;
    payload : SetSearchTermPayload;
};

export interface SearchMusicAction {
    type : typeof SEARCH_MUSIC;
};

// Payload Types
interface SetSearchTermPayload {
    searchTerm : string;
};