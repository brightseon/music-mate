import React, { SFC } from 'react';
import RepeatPresenter from './RepeatPresenter';
import { OFF, REPEAT_ALL, REPEAT_ONE, REPEAT_STATE_TYPE } from '../../types/commonTypes';

interface IProps {
    repeatState : REPEAT_STATE_TYPE;
    setRepeatState : (repeatState : REPEAT_STATE_TYPE) => void;
};

const RepeatContainer : SFC<IProps> = ({ repeatState, setRepeatState }) => {
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
        <RepeatPresenter repeatState={ repeatState } changeRepeatState={ changeRepeatState } />
    );
};

export default RepeatContainer;