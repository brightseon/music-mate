import React, { SFC } from 'react';
import MusicOptionPresenter from './MusicOptionPresenter';

interface IProps {
    currentPlayDuration : string;
};

const MusicOptionContainer : SFC<IProps> = ({ currentPlayDuration }) => {

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
        <MusicOptionPresenter duration={ makeDurationFormat() } />
    );
};

export default MusicOptionContainer;