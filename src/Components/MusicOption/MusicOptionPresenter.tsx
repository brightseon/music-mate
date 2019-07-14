import React, { SFC } from 'react';
import styles from './styles.scss';
import Button from '../Button';
import RepeatButton from '../../../images/buttons/repeatButton.svg';
import RepeatActiveButton from '../../../images/buttons/repeatActiveButton.svg';
import RepeatOneButton from '../../../images/buttons/repeatOneButton.svg';
import RandomButton from '../../../images/buttons/randomPlay.svg';
import Duration from '../Duration';
import { REPEAT_STATE_TYPE, OFF, REPEAT_ALL, REPEAT_ONE } from '../../types/commonTypes';

interface IProps {
    player : any;
    repeatState : string;
    changeRepeatState : () => void;
};

const MusicOptionPresenter : SFC<IProps> = ({ player, repeatState, changeRepeatState }) => (
    <div className={ styles.musicOption }>
        <div className={ styles.buttonBox }>
            {
                repeatState === OFF && (
                    <Button className={ styles.repeatButton } buttonName={ RepeatButton } clickEvent={ changeRepeatState } />
                )
            }
            {
                repeatState === REPEAT_ALL && (
                    <Button className={ styles.repeatButton } buttonName={ RepeatActiveButton } clickEvent={ changeRepeatState } />
                )
            }
            {
                repeatState === REPEAT_ONE && (
                    <Button className={ styles.repeatButton } buttonName={ RepeatOneButton } clickEvent={ changeRepeatState } />
                )
            }
            <Button className={ styles.randomButton } buttonName={ RandomButton } />
        </div>
        <Duration player={ player } />
    </div>
);

export default MusicOptionPresenter;