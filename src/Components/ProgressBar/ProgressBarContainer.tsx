import React, { SFC, useState, useEffect } from 'react';
import ProgressBarPresenter from './ProgressBarPresenter';

interface IProps {
    player : any;
    progress : number;
};

const ProgressBarContainer : SFC<IProps> = ({ player, progress }) => {
    let lastVolume : number = 100;
    const [volume, setVolume] = useState(0);
    
    const initVolume = () => {
        if(player && volume !== player.getVolume()) {
            setVolume(player.getVolume());
        }
    };

    useEffect(initVolume, [player]);

    const volumeControl = () => {
        if(!player) return;
        
        if(volume > 0) {
            player.setVolume(0);
            setVolume(0);
            lastVolume = volume;
        } else if(volume === 0) {
            player.setVolume(lastVolume);
            setVolume(lastVolume);
        }
    };

    return (
        <ProgressBarPresenter volumeControl={ volumeControl } volume={ volume } player={ player }
            progress={ progress } />
    );
};

export default ProgressBarContainer;