import React, { SFC } from 'react';
import styles from './styles.scss';
import Button from '../Button';
import RewindButton from '../../../images/buttons/rewindButton.svg';
import PlayButton from '../../../images/buttons/playButton.svg';
import NextButton from '../../../images/buttons/nextButton.svg';
import PauseButton from '../../../images/buttons/pauseButton.svg';

interface IProps {
    playButton : () => void;
    playerState : number;
};

const MusicControlPresenter : SFC<IProps> = ({ playButton, playerState }) => (
    <div className={ styles.musicControl}>
        <Button className={ styles.rewindButton } buttonName={ RewindButton } />
        <Button className={ styles.playButton } buttonName={ playerState === 1 ? PauseButton : PlayButton } clickEvent={ playButton } />
        <Button className={ styles.nextButton } buttonName={ NextButton } />
    </div>
);

export default MusicControlPresenter;