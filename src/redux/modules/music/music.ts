import { 
    MusicState, SET_SEARCH_MUSIC_LIST, SetSearchMusicListAction, MusicType, 
    MusicActions, ADD_MUSIC, AddMusicAction 
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

export const addMusic = (addMusic : MusicType) : AddMusicAction => {
    return {
        type : ADD_MUSIC,
        payload : {
            addMusic
        }
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

        default :
            return state;
    }
};

const applySetMusicList = (state : MusicState, action : SetSearchMusicListAction) : MusicState => {
    console.log('action.payload.searchMusicList : ', action.payload.searchMusicList);
    return {
        ...state,
        searchMusicList : action.payload.searchMusicList
    };
};

const applyAddMusic = (state : MusicState, action : AddMusicAction) : MusicState => {
    return {
        ...state,
        musicList : state.musicList.concat(action.payload.addMusic)
    };
};

export default reducer;