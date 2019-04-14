import React, { SFC } from 'react';
import styles from './styles.scss';
import Button from '../Button';
import RewindButton from '../../../images/buttons/rewindButton.svg';
import PlayButton from '../../../images/buttons/playButton.svg';
import NextButton from '../../../images/buttons/nextButton.svg';

const MusicControl : SFC = () => (
    <div className={ styles.musicControl}>
        <Button className={ styles.rewindButton } buttonName={ RewindButton } />
            <Button className={ styles.playButton } buttonName={ PlayButton } />
            <Button className={ styles.nextButton } buttonName={ NextButton } />
    </div>
);

export default MusicControl;