import React, { SFC } from 'react';
import styles from './styles.scss';
import Button from '../Button';
import RewindButton from '../../../images/buttons/rewindButton.svg';
import PlayButton from '../../../images/buttons/playButton.svg';
import NextButton from '../../../images/buttons/nextButton.svg';
import PauseButton from '../../../images/buttons/pauseButton.svg';
import { MOVE_MUSIC_TYPE, NEXT, PREV } from '../../types/commonTypes';
import Repeat from '../Repeat';
import Random from '../Random';

interface IProps {
    playButton : () => void;
    playerState : number;
    moveMusic : (type : MOVE_MUSIC_TYPE) => void;
};

const MusicControlPresenter : SFC<IProps> = ({ playButton, playerState, moveMusic }) => (
    <div className={ styles.musicControl }>
        <Repeat />
        <div className={ styles.controlButtons }>
            <Button className={ styles.rewindButton } buttonName={ RewindButton } clickEvent={ () => moveMusic(PREV) } />
            <Button className={ styles.playButton } buttonName={ playerState === 1 ? PauseButton : PlayButton } clickEvent={ playButton } />
            <Button className={ styles.nextButton } buttonName={ NextButton } clickEvent={ () => moveMusic(NEXT) } />
        </div>
        <Random />
    </div>
);

export default MusicControlPresenter;