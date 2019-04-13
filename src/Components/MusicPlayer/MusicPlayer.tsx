import React, { SFC } from 'react';
import styles from './styles.scss';
import Thumbnail from '../Thumbnail';
import Button from '../Button';
import RewindButton from '../../../images/buttons/rewindButton.svg';
import PlayButton from '../../../images/buttons/playButton.svg';
import NextButton from '../../../images/buttons/nextButton.svg';

const MusicPlayer : SFC = () => (
    <div className={ styles.musicPlayer }>
        <Thumbnail className={ `${ styles.mediumThumbnail } ${ styles.thumbnail }` } />
        <div className={ styles.buttonContainer }>
            <Button className={ styles.rewindButton } buttonName={ RewindButton } />
            <Button className={ styles.playButton } buttonName={ PlayButton } />
            <Button className={ styles.nextButton } buttonName={ NextButton } />
        </div>
    </div>
);

export default MusicPlayer;