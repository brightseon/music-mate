import React, { SFC } from 'react';
import styles from './styles.scss';
import Thumbnail from '../Thumbnail';
import MusicControl from '../MusicControl';
import ProgressBar from '../ProgressBar';
import MusicOption from '../MusicOption';

const MusicPlayer : SFC = () => (
    <div className={ styles.musicPlayer }>
        <div className={ styles.thumbnailBox }>
            <Thumbnail className={ `${ styles.mediumThumbnail } ${ styles.thumbnail }` } />
        </div>
        <MusicControl />
        <ProgressBar />
        <MusicOption />
    </div>
);

export default MusicPlayer;