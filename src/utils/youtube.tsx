let youtubePlayer : any = null;

const getPlayer = () : any => {
    return youtubePlayer;
};

export const updatePlayer = (player : any) => {
    console.log('updatePlayer player : ', player);
    youtubePlayer = player;
};

export const youtubePlayMusic = () => {
    const player = getPlayer();
    console.log('youtubePlayMusic player : ', player);
    player.playVideo();
};

export const youtubePauseMusic = () => {
    const player = getPlayer();
    console.log('youtubePauseMusic player : ', player);
    player.pauseVideo();
};