let youtubePlayer : any = null;

const getPlayer = () : any => {
    return youtubePlayer;
};

export const updatePlayer = (player : any) => {
    youtubePlayer = player;
};

export const youtubePlayMusic = () => {
    getPlayer().playVideo();
};

export const youtubePauseMusic = () => {
    getPlayer().pauseVideo();
};