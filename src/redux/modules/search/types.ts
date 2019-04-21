// Actions
export const SET_SEARCH_TERM = 'SET_SEARCH_TERM';
export const SEARCH_MUSIC = 'SEARCH_MUSIC';
export const RESET_SEARCH_TERM = 'RESET_SEARCH_TERM';
export const TOGGLE_IS_SEARCHING = 'TOGGLE_IS_SEARCHING';

// Initial State Type
export interface SearchState {
    searchTerm : string;
    isSearching : boolean;
};

// Action Types
export interface SetSearchTermAction {
    type : typeof SET_SEARCH_TERM;
    payload : SetSearchTermPayload;
};

export interface ResetSearchTermAction {
    type : typeof RESET_SEARCH_TERM;
};

export interface ToggleIsSearcingAction {
    type : typeof TOGGLE_IS_SEARCHING;
    payload : ToggleIsSearchingPayload;
};

// Payload Types
interface SetSearchTermPayload {
    searchTerm : string;
};

interface ToggleIsSearchingPayload {
    isSearching : boolean;
};

export type SearchActions = SetSearchTermAction | ResetSearchTermAction | ToggleIsSearcingAction;