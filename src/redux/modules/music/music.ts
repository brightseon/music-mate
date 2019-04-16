import { MusicState, SET_MUSIC_LIST, SetMusicListAction, MusicType } from "./types";

// Action
export const setMusicList = (musicList : [MusicType]) : SetMusicListAction => {
    return {
        type : SET_MUSIC_LIST,
        payload : {
            musicList
        }
    };
};

const initialState : MusicState = {
    musicList : null
};

const reducer = (state : MusicState = initialState, action : SetMusicListAction) :  MusicState => {
    switch(action.type) {
        case SET_MUSIC_LIST : 
            return applySetMusicList(state, action);

        default :
            return state;
    }
};

const applySetMusicList = (state : MusicState, action : SetMusicListAction) : MusicState => {
    return {
        ...state,
        musicList : action.payload.musicList
    };
};

export default reducer;