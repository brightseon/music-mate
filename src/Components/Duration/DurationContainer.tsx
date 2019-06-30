import React, { SFC, useState, useEffect } from 'react';
import DurationPresenter from './DurationPresenter';

interface IProps {
    currentPlayDuration : string;
    playerState : number;
    player : any;
};

let timer : NodeJS.Timeout;

const DurationContainer : SFC<IProps> = ({ currentPlayDuration, playerState, player }) => {
    const [currentTime, setCurrentTime] = useState('00:00');

    const makeTimeFormat = (time : number | string) => {
        const strTime = typeof time === 'number' ? time.toString() : time;

        return strTime.length < 2 ? `0${ strTime }` : strTime;
    };
    
    const getCurrentTime = () => {
        console.log('playerState : ', playerState, player);
        console.log('timer : ', timer);
        if(player && playerState === 1) {
            console.log('setTimer : ', playerState);
            timer = setInterval(makeCurrentTimeFormat, 1000);
            console.log('setTimer timer : ', timer);
        } else if(player && playerState === 2) {
            console.log('if inner timer : ', timer);
            clearInterval(timer);
        }
    };

    const makeCurrentTimeFormat = () => {
        let formatTime : string = '';
        const currentTime = Math.ceil(player.getCurrentTime());
        console.log('currentTime : ', currentTime);

        if(currentTime < 60) {
            formatTime = `00:${ makeTimeFormat(currentTime) }`;
        }

        if(currentTime > 60 && currentTime < 3600) {
            const min = Math.floor(currentTime / 60);
            const sec = (currentTime % 60);

            formatTime = `${ makeTimeFormat(min) }:${ makeTimeFormat(sec) }`;
        }

        if(currentTime > 3600) {
            const hour = (currentTime / 60 / 60);
            const min = ((currentTime / 60) % 60);
            const sec = (currentTime % 60 % 60);

            formatTime = `
                ${ makeTimeFormat(hour) }:
                ${ makeTimeFormat(min) }:
                ${ makeTimeFormat(sec) }
            `;
        }

        setCurrentTime(formatTime);
    };

    useEffect(getCurrentTime, [player, playerState]);

    const makeDurationFormat = () : string => {
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
        }

        if(execMin) {
            const splitMin = execMin[0].split('M')[0];
            min = `${ makeTimeFormat(splitMin) }:`;
        }

        if(execSec) {
            const splitSec = execSec[0].split('S')[0];
            sec = makeTimeFormat(splitSec);
        }

        return `${ hour }${ min }${ sec }`;
    };

    return (
        <DurationPresenter currentTime={ currentTime } duration={ makeDurationFormat() } />
    );
};

export default DurationContainer;