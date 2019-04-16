// Actions
export const SET_MUSIC_LIST = 'SET_MUSIC_LIST';

// Initial State Type
export interface MusicState {
    musicList : [MusicType];
};

// Action Types
export interface SetMusicListAction {
    type : typeof SET_MUSIC_LIST;
    payload : SetMusicListPayload;
};

// Payload Types
interface SetMusicListPayload {
    musicList : [MusicType];
};

// Other Types
export interface MusicType {
    kind : string;
    etag : string;
    id : IDType;
    snippet : SnippetType;
};

interface IDType {
    kind : string;
    videoId : string;
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