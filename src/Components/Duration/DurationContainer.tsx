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
        let formatTime = '';
        const currentTime = Math.ceil(player.getCurrentTime());
        console.log('currentTime : ', currentTime);

        if(currentTime < 60) {
            formatTime = `00:${ currentTime.toString().length < 2 ? `0${ currentTime }` : currentTime }`;
        }

        if(currentTime > 60 && currentTime < 3600) {
            const min = Math.floor(currentTime / 60).toString();
            const sec = (currentTime % 60).toString();

            formatTime = `${ min.length < 2 ? `0${ min }` : min }:${ sec.length < 2 ? `0${ sec }` : sec }`;
        }

        if(currentTime > 3600) {
            const hour = (currentTime / 60 / 60).toString();
            const min = ((currentTime / 60) % 60).toString();
            const sec = (currentTime % 60 % 60).toString();

            formatTime = `
                ${ hour.length < 2 ? `0${ hour }` : hour }:
                ${ min.length < 2 ? `0${ min }` : min }:
                ${ sec.length < 2 ? `0${ sec }` : sec }
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
            hour = `${ splitHour.length < 2 ? `0${ splitHour }` : splitHour }:`;
        }

        if(execMin) {
            const splitMin = execMin[0].split('M')[0];
            min = `${ splitMin.length < 2 ? `0${ splitMin }` : splitMin }:`;
        }

        if(execSec) {
            const splitSec = execSec[0].split('S')[0];
            sec = `${ splitSec.length < 2 ? `0${ splitSec }` : splitSec }`;
        }

        return `${ hour }${ min }${ sec }`;
    };

    return (
        <DurationPresenter currentTime={ currentTime } duration={ makeDurationFormat() } />
    );
};

export default DurationContainer;