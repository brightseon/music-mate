import React, { SFC, useState, useEffect } from 'react';
import DurationPresenter from './DurationPresenter';
import { MusicType } from '../../redux/modules/music/types';
import { youtubePauseMusic, youtubePlayMusic } from '../../utils/youtube';

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
    let totalDuration : number = 0;
    const [currentTime, setCurrentTime] = useState('00:00');

    const makeTimeFormat = (time : number | string) => {
        const strTime = typeof time === 'number' ? time.toString() : time;

        return strTime.length < 2 ? `0${ strTime }` : strTime;
    };
    
    const getCurrentTime = () => {
        if(player && playerState === 1) {
            timer = setInterval(makeCurrentTimeFormat, 1000);
            strTotalDuration = makeDurationFormat();
        } else if(player && playerState === 2) {
            console.log('clear')
            clearInterval(timer);
        }
    };

    const makeCurrentTimeFormat = () => {
        let formatTime : string = '';
        const currentTime = Math.ceil(player.getCurrentTime());
        
        if(currentTime === totalDuration) {
            pauseMusic();
            playMusic();
        }

        if(currentTime < SECOND) {
            formatTime = `00:${ makeTimeFormat(currentTime) }`;
        }

        if(currentTime > SECOND && currentTime < 3600) {
            const min = Math.floor(currentTime / SECOND);
            const sec = (currentTime % SECOND);

            formatTime = `${ makeTimeFormat(min) }:${ makeTimeFormat(sec) }`;
        }

        if(currentTime > 3600) {
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
        const idx = currentIndex + 1;
        let returnIndex = 0;

        console.log('isRepeatAll : ', isRepeatAll);
        console.log('idx : ', idx);
        console.log('musicList.length : ', musicList.length);
        if(idx === musicList.length) {
            if(!isRepeatAll) {
                return;
            }
        } else {
            returnIndex = idx;
        }

        return returnIndex;
    };

    const playMusic = () => {
        const index = getIndex();

        if(index === 0 || index) {
            youtubePlayMusic();
            
            pPlayMusic(musicList[index]);
        }
    };

    useEffect(getCurrentTime, [player, playerState, currentPlayDuration]);
    
    const makeDurationFormat = () => {
        const hourRegex = new RegExp('[0-9]{1,2}H', 'gi');
        const minRegex = new RegExp('[0-9]{1,2}M', 'gi');
        const secRegex = new RegExp('[0-9]{1,2}S', 'gi');
        const execHour = hourRegex.exec(currentPlayDuration);
        const execMin = minRegex.exec(currentPlayDuration);
        const execSec = secRegex.exec(currentPlayDuration);
        let hour = '', min = '', sec = '';
        
        if(execHour) {
            const splitHour = execHour[0].split('H')[0];
            hour = `${ makeTimeFormat(splitHour) }:`;
            totalDuration += parseInt(splitHour) * SECOND * SECOND;
        }
        
        if(execMin) {
            const splitMin = execMin[0].split('M')[0];
            min = `${ makeTimeFormat(splitMin) }:`;
            totalDuration += parseInt(splitMin) * SECOND;
        }
        
        if(execSec) {
            const splitSec = execSec[0].split('S')[0];
            sec = makeTimeFormat(splitSec);
            totalDuration += parseInt(splitSec);
        }

        return `${ hour }${ min }${ sec }`;
    };
    
    return (
        <DurationPresenter currentTime={ currentTime } duration={ strTotalDuration } />
    );
};

export default DurationContainer;