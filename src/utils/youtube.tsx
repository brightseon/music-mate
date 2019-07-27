let youtubePlayer : any = null;

const getPlayer = () : any => {
    return youtubePlayer;
};

export const updatePlayer = (player : any) => {
    youtubePlayer = player;
};

export const youtubePlayMusic = () => {
    const player = getPlayer();
    
    player.playVideo();
};

export const youtubePauseMusic = () => {
    const player = getPlayer();

    player.pauseVideo();
};