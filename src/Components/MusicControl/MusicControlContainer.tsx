import React, { SFC } from 'react';
import MusicControlPresenter from './MusicControlPresenter';

interface IProps {
    player : any;
    playerState : number;
    setPlayerState : (playerState : number) => void;
};

const MusicControlContainer : SFC<IProps> = ({ player, playerState, setPlayerState }) => {
    const playButton = () => {
        if(player.getPlayerState() === 1) {
            pauseMusic();
            setPlayerState(2);
        } else if(player.getPlayerState() === 2) {
            playMusic();
            setPlayerState(1);
        }
    };
    
    const playMusic = () => {
        player.playVideo();
    };

    const pauseMusic = () => {
        player.pauseVideo();
    };

    return (
        <MusicControlPresenter playButton={ playButton } playerState={ playerState } />
    );
};

export default MusicControlContainer;