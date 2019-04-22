export const LOADING = 'LOADING';

// Initial State
export interface LoadingState {
    isLoading : boolean;
};

export interface LoadingAction {
    type : typeof LOADING;
    payload : LoadingActionPayload;
};

interface LoadingActionPayload {
    isLoading : boolean;
};