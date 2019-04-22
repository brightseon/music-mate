import { LoadingState, LoadingAction, LOADING } from './types';

export const loading = (isLoading : boolean) : LoadingAction => {
    return {
        type : LOADING,
        payload : {
            isLoading
        }
    };
};

const initialState : LoadingState = {
    isLoading : false
};

const reducer = (state : LoadingState = initialState, action : LoadingAction) : LoadingState => {
    switch(action.type) {
        case LOADING : 
            return applyIsLoading(state, action);

        default : 
            return state;
    }
};

const applyIsLoading = (state : LoadingState, action : LoadingAction) : LoadingState => {
    return {
        ...state,
        isLoading : action.payload.isLoading
    };
};

export default reducer;