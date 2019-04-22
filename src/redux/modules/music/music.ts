import { 
    MusicState, SET_SEARCH_MUSIC_LIST, SetSearchMusicListAction, MusicType, 
    MusicActions, ADD_MUSIC, AddMusicAction, RESET_SEARCH_MUSIC_LIST, ResetSearchMusicListAction
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

const initialState : MusicState = {
    searchMusicList : [],
    musicList : []
};

const reducer = (state : MusicState = initialState, action : MusicActions) :  MusicState => {
    switch(action.type) {
        case SET_SEARCH_MUSIC_LIST : 
            return applySetMusicList(state, action);

        case ADD_MUSIC : 
            return applyAddMusic(state, action);

        case RESET_SEARCH_MUSIC_LIST : 
            return applyResetSearchMusicList(state);

        default :
            return state;
    }
};

const applySetMusicList = (state : MusicState, action : SetSearchMusicListAction) : MusicState => {
    return {
        ...state,
        searchMusicList : action.payload.searchMusicList
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

export default reducer;