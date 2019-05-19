// Actions
export const SET_SEARCH_MUSIC_LIST = 'SET_SEARCH_MUSIC_LIST';
export const ADD_MUSIC = 'ADD_MUSIC';
export const RESET_SEARCH_MUSIC_LIST = 'RESET_SEARCH_MUSIC_LIST';
export const SET_NEXT_PAGE_TOKEN = 'SET_NEXT_PAGE_TOKEN';
export const REMOVE_SEARCH_ITEM = 'REMOVE_SEARCH_ITEM';
export const SET_CURRENT_PLAY = 'SET_CURRENT_PLAY';

// Initial State Type
export interface MusicState {
    searchMusicList : MusicType[];
    musicList : MusicType[];
    nextPageToken : string;
    currentPlay : MusicType;
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

export interface ResetSearchMusicListAction {
    type : typeof RESET_SEARCH_MUSIC_LIST;
};

export interface SetNextPageTokenAction {
    type : typeof SET_NEXT_PAGE_TOKEN;
    payload : SetNextPageTokenPayload;
};

export interface RemoveSearchItemAction {
    type : typeof REMOVE_SEARCH_ITEM;
    payload : RemoveSearchItemPayload;
};

export interface SetCurrentPlayAction {
    type : typeof SET_CURRENT_PLAY;
    payload : SetCurrentPlayPayload;
}

// Payload Types
interface SetSearchMusicListPayload {
    searchMusicList : MusicType[];
};

interface AddMusicPayload {
    music : MusicType;
};

interface SetNextPageTokenPayload {
    nextPageToken : string;
};

interface RemoveSearchItemPayload {
    id : string;
};

interface SetCurrentPlayPayload {
    music : MusicType;
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

export type MusicActions = SetSearchMusicListAction
                            | AddMusicAction 
                            | ResetSearchMusicListAction 
                            | SetNextPageTokenAction 
                            | RemoveSearchItemAction
                            | SetCurrentPlayAction;