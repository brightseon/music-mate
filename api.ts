const API_ADDRESS : string = 'https://www.googleapis.com/youtube/v3';
const KEY : string = process.env.API_KEY;

export const SEARCH_URL = `${ API_ADDRESS }/search?part=snippet&key=${ KEY }&q=`;