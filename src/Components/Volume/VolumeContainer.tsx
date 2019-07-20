import React, { SFC, useState, useEffect } from 'react';
import VolumePresenter from './VolumePresenter';

interface IProps {
    player : any;
};

let lastVolume : number = 0;

const VolumeContainer : SFC<IProps> = ({ player }) => {
    const [volume, setVolume] = useState(0);

    const initVolume = () => {
        if(!player) return;

        const playerVolume = player.getVolume();
        
        if(volume !== playerVolume) {
            setLastVolume(playerVolume);
            setVolume(playerVolume);
        }
    };

    useEffect(initVolume, [player]);

    const settingVolume = (volume : number) => {
        player.setVolume(volume);
        setVolume(volume);
    };

    const setLastVolume = (volume : number) => {
        lastVolume = volume;
    };

    const toggleMute = () => {
        if(!player) return;
        
        if(volume > 0) {
            setLastVolume(volume);
            settingVolume(0);
        } else if(volume === 0) {
            settingVolume(lastVolume);
        }
    };
    
    return <VolumePresenter volume={ volume } toggleMute={ toggleMute } />;
};

export default VolumeContainer;