import React, { SFC, useState, useEffect } from 'react';
import DurationPresenter from './DurationPresenter';
import { MusicType } from '../../redux/modules/music/types';
import { youtubePauseMusic, youtubePlayMusic } from '../../utils/youtube';
import { makeTimeFormat, getTotalDuration, makeTotalDuration } from '../../utils/Time';
import { REPEAT_STATE_TYPE, REPEAT_ALL, REPEAT_ONE } from '../../types/commonTypes';

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
    repeatState : REPEAT_STATE_TYPE;
    setProgress : (progress : number) => void;
};

let timer : NodeJS.Timeout;
let strTotalDuration : string = '';
const SECOND = 60;

const DurationContainer : SFC<IProps> = ({ currentPlayDuration, playerState, player, setPlayerState, musicList, currentIndex, playMusic : pPlayMusic, repeatState, setProgress }) => {
    const [currentTime, setCurrentTime] = useState('00:00');
    
    const getCurrentTime = () => {
        if(!player) return;

        switch(playerState) {
            case 0 :
                clearInterval(timer);
                nextPlayMusic();
                break;

            case 1 :
                timer = setInterval(makeCurrentTimeFormat, 1000);
                strTotalDuration = makeDurationFormat();
                break;

            case 2 :
                clearInterval(timer);
                break;
        }
    };


    const makePercent = (currentTime : number, totalDuration : number) => {
        setProgress(currentTime / totalDuration * 100);
    };
    
    const makeCurrentTimeFormat = () => {
        let formatTime : string = '';
        const currentTime = Math.ceil(player.getCurrentTime());
        const totalDuration = getTotalDuration();

        makePercent(currentTime, totalDuration);
        
        if(currentTime === totalDuration) {
            stopMusic();
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

    const stopMusic = () => {
        setPlayerState(0);
    };


    const getIndex = () : number => {
        return (repeatState === REPEAT_ALL && currentIndex === musicList.length - 1) ? 0 : currentIndex + 1;
    };  

    const nextPlayMusic = () => {
        const index = repeatState === REPEAT_ONE ? currentIndex : getIndex();

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