const API_ADDRESS : string = 'https://www.googleapis.com/youtube/v3';
const KEY : string = process.env.API_KEY;
const MAX_RESULTS : number = 20;

export const SEARCH_URL = `${ API_ADDRESS }/search?part=snippet&key=${ KEY }&maxResults=${ MAX_RESULTS }&q=`;