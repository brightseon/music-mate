import { 
    MusicState, SET_SEARCH_MUSIC_LIST, SetSearchMusicListAction, MusicType, 
    MusicActions, ADD_MUSIC, AddMusicAction, RESET_SEARCH_MUSIC_LIST, ResetSearchMusicListAction, 
    SetNextPageTokenAction, SET_NEXT_PAGE_TOKEN
} from "./types";

// Action
export const setSearchMusicList = (searchMusicList : MusicType[]) : SetSearchMusicListAction => {
    return {
        type : SET_SEARCH_MUSIC_LIST,
        payload : {
            searchMusicList
        }
    };
};

export const addMusic = (music : MusicType) : AddMusicAction => {
    return {
        type : ADD_MUSIC,
        payload : {
            music
        }
    };
};

export const resetSearchMusicList = () : ResetSearchMusicListAction => {
    return {
        type : RESET_SEARCH_MUSIC_LIST
    };
};

export const setNextPageToken = (nextPageToken : string) : SetNextPageTokenAction => {
    return {
        type : SET_NEXT_PAGE_TOKEN,
        payload : {
            nextPageToken
        }
    };
};

const initialState : MusicState = {
    searchMusicList : [],
    musicList : [],
    nextPageToken : ''
};

const reducer = (state : MusicState = initialState, action : MusicActions) :  MusicState => {
    switch(action.type) {
        case SET_SEARCH_MUSIC_LIST : 
            return applySetMusicList(state, action);

        case ADD_MUSIC : 
            return applyAddMusic(state, action);

        case RESET_SEARCH_MUSIC_LIST : 
            return applyResetSearchMusicList(state);

        case SET_NEXT_PAGE_TOKEN : 
            return applySetNextPageToken(state, action);

        default :
            return state;
    }
};

const applySetMusicList = (state : MusicState, action : SetSearchMusicListAction) : MusicState => {
    return {
        ...state,
        searchMusicList : state.searchMusicList.concat(action.payload.searchMusicList)
    };
};

const applyAddMusic = (state : MusicState, action : AddMusicAction) : MusicState => {
    return {
        ...state,
        musicList : state.musicList.concat(action.payload.music)
    };
};

const applyResetSearchMusicList = (state : MusicState) : MusicState => {
    return {
        ...state,
        searchMusicList : []
    };
};

const applySetNextPageToken = (state : MusicState, action : SetNextPageTokenAction) : MusicState => {
    return {
        ...state,
        nextPageToken : action.payload.nextPageToken
    };
};

export default reducer;