// Actions
export const SET_SEARCH_MUSIC_LIST = 'SET_SEARCH_MUSIC_LIST';
export const ADD_MUSIC = 'ADD_MUSIC';

// Initial State Type
export interface MusicState {
    searchMusicList : MusicType[];
    musicList : MusicType[];
};

// Action Types
export interface SetSearchMusicListAction {
    type : typeof SET_SEARCH_MUSIC_LIST;
    payload : SetSearchMusicListPayload;
};

export interface AddMusicAction {
    type : typeof ADD_MUSIC;
    payload : AddMusicPayload;
};

// Payload Types
interface SetSearchMusicListPayload {
    searchMusicList : MusicType[];
};

interface AddMusicPayload {
    addMusic : MusicType;
};

// Other Types
export interface MusicType {
    kind : string;
    etag : string;
    id : IDType;
    snippet : SnippetType;
};

export interface IDType {
    kind : string;
    videoId : string;
    channelId : string;
    playlistId : string;
};

interface SnippetType {
    publishedAt : string;
    channelId : string;
    title : string;
    description : string;
    thumbnails : ThumbnailsType;
    channelTitle : string;
    liveBroadcastContent : string;
};

interface ThumbnailsType {
    default : ThumbnailType;
    medium : ThumbnailType;
    high : ThumbnailType;
};

interface ThumbnailType {
    url : string;
    width : number;
    height : number;
};

export type MusicActions = SetSearchMusicListAction | AddMusicAction;