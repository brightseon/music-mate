import React, { SFC } from 'react';
import styles from './styles.scss';
import Button from '../Button';
import { OFF, REPEAT_ALL, REPEAT_ONE, REPEAT_STATE_TYPE } from '../../types/commonTypes';
import RepeatButton from '../../../images/buttons/repeatButton.svg';
import RepeatActiveButton from '../../../images/buttons/repeatActiveButton.svg';
import RepeatOneButton from '../../../images/buttons/repeatOneButton.svg';

interface IProps {
    repeatState : REPEAT_STATE_TYPE;
    changeRepeatState : () => void;
};

const buttonName = (repeatState : REPEAT_STATE_TYPE) => {
    switch(repeatState) {
        case OFF :
            return RepeatButton;

        case REPEAT_ALL :
            return RepeatActiveButton;

        case REPEAT_ONE :
            return RepeatOneButton;
    }
};

const RepeatPresenter : SFC<IProps> = ({ repeatState, changeRepeatState }) => (
    <div className={ styles.repeatButtons }>
        <Button className={ styles.repeatButton } buttonName={ buttonName(repeatState) } clickEvent={ changeRepeatState } />
    </div>
);

export default RepeatPresenter;