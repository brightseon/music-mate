import { REPEAT_STATE_TYPE } from "../../../types/commonTypes";

// Actions
export const SET_SEARCH_MUSIC_LIST = 'SET_SEARCH_MUSIC_LIST';
export const ADD_MUSIC = 'ADD_MUSIC';
export const RESET_SEARCH_MUSIC_LIST = 'RESET_SEARCH_MUSIC_LIST';
export const SET_NEXT_PAGE_TOKEN = 'SET_NEXT_PAGE_TOKEN';
export const REMOVE_SEARCH_ITEM = 'REMOVE_SEARCH_ITEM';
export const SET_CURRENT_PLAY = 'SET_CURRENT_PLAY';
export const SET_PLAYER_STATE = 'SET_PLAYER_STATE';
export const SET_CURRENT_PLAY_DURATION = 'SET_CURRENT_PLAY_DURATION';
export const SET_CURRENT_INDEX = 'SET_CURRENT_INDEX';
export const SET_REPEAT_STATE = 'SET_REPEAT_STATE';
export const SET_PROGRESS = 'SET_PROGRESS';
export const TOGGLE_IS_RANDOM = 'TOGGLE_IS_RANDOM';

// Initial State Type
export interface MusicState {
    searchMusicList : MusicType[];
    musicList : MusicType[];
    nextPageToken : string;
    currentPlay : MusicType;
    playerState : number;
    currentPlayDuration : string;
    currentIndex : number;
    repeatState : REPEAT_STATE_TYPE;
    progress : number;
    isRandom : boolean;
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
};

export interface SetPlayerStateAction {
    type : typeof SET_PLAYER_STATE;
    payload : SetPlayerStatePayload;
};

export interface SetCurrentPlayDurationAction {
    type : typeof SET_CURRENT_PLAY_DURATION;
    payload : SetCurrentPlayDurationPayload;
};

export interface SetCurrentIndexAction {
    type : typeof SET_CURRENT_INDEX;
    payload : SetCurrentIndexPayload;
}

export interface SetRepeatStateAction {
    type : typeof SET_REPEAT_STATE;
    payload : SetRepeatStatePayload;
};

export interface SetProgressAction {
    type : typeof SET_PROGRESS;
    payload : SetProgressPayload;
};

export interface ToggleIsRandom {
    type : typeof TOGGLE_IS_RANDOM;
};

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

interface SetPlayerStatePayload {
    playerState : number;
};

interface SetCurrentPlayDurationPayload {
    duration : string;
};

interface SetCurrentIndexPayload {
    currentIndex : number;
};

interface SetRepeatStatePayload {
    repeatState : REPEAT_STATE_TYPE;
};

interface SetProgressPayload {
    progress : number;
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
                            | SetCurrentPlayAction
                            | SetPlayerStateAction
                            | SetCurrentPlayDurationAction
                            | SetCurrentIndexAction
                            | SetRepeatStateAction
                            | SetProgressAction
                            | ToggleIsRandom;