const API_URL : string = 'https://www.googleapis.com/youtube/v3';
const YOUTUBE_URL : string = 'https://www.youtube.com/embed/';
const KEY : string = process.env.API_KEY;
const MAX_RESULTS : number = 20;
export const AMPERSAND = '&';
export const EQUAL = '=';
export const QUERY = 'q';
export const PAGE_TOKEN = 'pageToken';

export const SEARCH_URL = `${ API_URL }/search?part=snippet&key=${ KEY }&type=video&maxResults=${ MAX_RESULTS }`;
export const MUSIC_PLAY_URL = `${ YOUTUBE_URL }`;