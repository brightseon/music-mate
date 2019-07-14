import React, { SFC, useState, useEffect } from 'react';
import DurationPresenter from './DurationPresenter';
import { MusicType } from '../../redux/modules/music/types';
import { youtubePauseMusic, youtubePlayMusic } from '../../utils/youtube';
import { makeTimeFormat, getTotalDuration, makeTotalDuration } from '../../utils/Time';

interface IProps {
    currentPlayDuration : string;
    playerState : number;
    player : any;
    setPlayerState : (playerState : number) => void;
    setCurrentPlay : (music : MusicType) => void;
    setCurrentIndex : (index : number) => void;
    musicList : MusicType[];
    currentIndex : number;
    playMusic? : (music : MusicType) => void;
    getCurrentPlayDuration : (id : string) => void;
    isRepeatAll : boolean;
};

let timer : NodeJS.Timeout;
let strTotalDuration : string = '';
const SECOND = 60;

const DurationContainer : SFC<IProps> = ({ currentPlayDuration, playerState, player, setPlayerState, musicList, currentIndex, playMusic : pPlayMusic, isRepeatAll }) => {
    const [currentTime, setCurrentTime] = useState('00:00');
    
    const getCurrentTime = () => {
        if(player && playerState === 1) {
            console.log('player playerState === 1 playerState : ', player.getPlayerState());
            timer = setInterval(makeCurrentTimeFormat, 1000);
            strTotalDuration = makeDurationFormat();
        } else if(player && playerState === 2) {
            console.log('player playerState === 2 playerState : ', player.getPlayerState());
            clearInterval(timer);

            playMusic();
        }
    };

    const makeCurrentTimeFormat = () => {
        let formatTime : string = '';
        const currentTime = Math.ceil(player.getCurrentTime());
        
        if(currentTime === getTotalDuration()) {
            pauseMusic();
        }

        if(currentTime < SECOND) {
            formatTime = `00:${ makeTimeFormat(currentTime) }`;
        }

        if(currentTime >= SECOND && currentTime < 3600) {
            const min = Math.floor(currentTime / SECOND);
            const sec = (currentTime % SECOND);

            formatTime = `${ makeTimeFormat(min) }:${ makeTimeFormat(sec) }`;
        }

        if(currentTime >= 3600) {
            const hour = (currentTime / SECOND / SECOND);
            const min = ((currentTime / SECOND) % SECOND);
            const sec = (currentTime % SECOND % SECOND);

            formatTime = `
                ${ makeTimeFormat(hour) }:
                ${ makeTimeFormat(min) }:
                ${ makeTimeFormat(sec) }
            `;
        }

        setCurrentTime(formatTime);
    };

    const pauseMusic = () => {
        youtubePauseMusic();

        setPlayerState(2);
    };

    const getIndex = () : number => {
        console.log('currentIndex : ', currentIndex);
        console.log('isRepeatAll : ', isRepeatAll);

        return (isRepeatAll && currentIndex === musicList.length - 1) ? 0 : currentIndex + 1;
    };

    const playMusic = () => {
        const index = getIndex();

        if(index < musicList.length) {
            youtubePlayMusic();
            
            pPlayMusic(musicList[index]);
        }
    };

    useEffect(getCurrentTime, [player, playerState, currentPlayDuration]);
    
    const makeDurationFormat = () : string => {
        return makeTotalDuration(currentPlayDuration);
    };
    
    return (
        <DurationPresenter currentTime={ currentTime } duration={ strTotalDuration } />
    );
};

export default DurationContainer;