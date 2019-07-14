import React, { SFC } from 'react';
import MusicOptionPresenter from './MusicOptionPresenter';
import { REPEAT_STATE_TYPE, OFF, REPEAT_ALL, REPEAT_ONE } from '../../types/commonTypes';

interface IProps {
    player : any;
    repeatState : string;
    setRepeatState : (repeatState : REPEAT_STATE_TYPE) => void;
};

const MusicOptionContainer : SFC<IProps> = ({ player, repeatState, setRepeatState }) => {

    const changeRepeatState = () => {
        switch(repeatState) {
            case OFF :
                setRepeatState(REPEAT_ALL);
                break;

            case REPEAT_ALL : 
                setRepeatState(REPEAT_ONE);
                break;

            case REPEAT_ONE :
                setRepeatState(OFF);
                break;
        }
    };

    return (
        <MusicOptionPresenter player={ player } repeatState={ repeatState } changeRepeatState={ changeRepeatState } />
    );
};

export default MusicOptionContainer;