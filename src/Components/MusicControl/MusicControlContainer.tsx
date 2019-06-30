import React, { SFC } from 'react';
import MusicControlPresenter from './MusicControlPresenter';
import { MusicType } from '../../redux/modules/music/types';
import { MOVE_MUSIC_TYPE, NEXT, PREV } from '../../types/commonTypes';

interface IProps {
    player : any;
    playerState : number;
    setPlayerState : (playerState : number) => void;
    currentIndex : number;
    musicList : MusicType[];
    setCurrentPlay : (music : MusicType) => void;
    setCurrentIndex : (index : number) => void;
};

const MusicControlContainer : SFC<IProps> = ({ player, playerState, setPlayerState, currentIndex, musicList, setCurrentPlay, setCurrentIndex }) => {
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

    const calcCurrentIndex = (action : MOVE_MUSIC_TYPE) => {
        let currentIdx = currentIndex;
        const lastIndex = musicList.length - 1;

        if(currentIdx === 0 && action === PREV) {
            currentIdx = lastIndex;
        } else if(currentIdx === lastIndex && action === NEXT) {
            currentIdx = 0;
        } else {
            switch(action) {
                case NEXT :
                    currentIdx += 1;
                    break;
    
                case PREV :
                    currentIdx -= 1;
                    break;
            }
        }

        return currentIdx;
    };

    const getMusic = (index : number) => {
        return musicList[index];
    }

    const updateMusic = (music : MusicType, index : number) => {
        setCurrentPlay(music);
        setCurrentIndex(index);
    };

    const moveMusic = (type : MOVE_MUSIC_TYPE) => {
        const index = calcCurrentIndex(type);
        const music = getMusic(index);

        updateMusic(music, index);
    };

    return (
        <MusicControlPresenter playButton={ playButton } playerState={ playerState } moveMusic={ moveMusic } />
    );
};

export default MusicControlContainer;