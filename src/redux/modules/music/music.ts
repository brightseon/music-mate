import { 
    MusicState, SET_SEARCH_MUSIC_LIST, SetSearchMusicListAction, MusicType, 
    MusicActions, ADD_MUSIC, AddMusicAction, RESET_SEARCH_MUSIC_LIST, ResetSearchMusicListAction, 
    SetNextPageTokenAction, SET_NEXT_PAGE_TOKEN, RemoveSearchItemAction, REMOVE_SEARCH_ITEM, 
    SetCurrentPlayAction, SET_CURRENT_PLAY
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

export const removeSearchItem = (id : string) : RemoveSearchItemAction => {
    return {
        type : REMOVE_SEARCH_ITEM,
        payload : {
            id
        }
    };
};

export const setCurrentPlay = (music : MusicType) : SetCurrentPlayAction => {
    return {
        type : SET_CURRENT_PLAY,
        payload : {
            music
        }
    };
};

const initialState : MusicState = {
    searchMusicList : [],
    musicList : [],
    nextPageToken : '',
    currentPlay : null
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

        case REMOVE_SEARCH_ITEM : 
            return applyRemoveSearchItem(state, action);

        case SET_CURRENT_PLAY :
            return applySetCurrentPlay(state, action);

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

const applyRemoveSearchItem = (state : MusicState, action : RemoveSearchItemAction) : MusicState => {
    return {
        ...state,
        searchMusicList : state.searchMusicList.filter(searchMusic => searchMusic.id.videoId !== action.payload.id)
    };
};

const applySetCurrentPlay = (state : MusicState, action : SetCurrentPlayAction) : MusicState => {
    return {
        ...state,
        currentPlay : action.payload.music
    }
};

export default reducer;