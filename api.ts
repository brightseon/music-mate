const API_ADDRESS : string = 'https://www.googleapis.com/youtube/v3';
const KEY : string = process.env.API_KEY;
const MAX_RESULTS : number = 20;
export const AMPERSAND = '&';
export const EQUAL = '=';
export const QUERY = 'q';
export const PAGE_TOKEN = 'pageToken';

export const SEARCH_URL = `${ API_ADDRESS }/search?part=snippet&key=${ KEY }&type=video&maxResults=${ MAX_RESULTS }`;