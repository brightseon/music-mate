// Actions
export const SET_SEARCH_TERM : string = 'SET_SEARCH_TERM';
export const SEARCH_MUSIC : string = 'SEARCH_MUSIC';
export const RESET_SEARCH_TERM : string = 'RESET_SEARCH_TERM';
export const TOGGLE_IS_SEARCHING : string = 'IS_SEARCHING';

// Initial State Type
export interface SearchState {
    searchTerm : string;
    isSearcing : boolean;
};

// Action Types
export interface SetSearchTermAction {
    type : typeof SET_SEARCH_TERM;
    payload : SetSearchTermPayload;
};

export interface SearchMusicAction {
    type : typeof SEARCH_MUSIC;
};

export interface ResetSearchTermAction {
    type : typeof RESET_SEARCH_TERM;
};

export interface ToggleIsSearcingAction {
    type : typeof TOGGLE_IS_SEARCHING;
};

// Payload Types
interface SetSearchTermPayload {
    searchTerm : string;
};