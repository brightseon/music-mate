import React, { SFC } from 'react';
import styles from './styles.scss';
import Thumbnail from '../Thumbnail';
import MusicControl from '../MusicControl';
import ProgressBar from '../ProgressBar';
import MusicOption from '../MusicOption';
import { MUSIC_PLAY_URL } from '../../../api';

interface IProps {
    videoId : string;
};

const MusicPlayer : SFC<IProps> = ({ videoId }) => (
    <div className={ styles.musicPlayer }>
        <iframe className={ styles.hiddenPlayer } src={ `${ MUSIC_PLAY_URL }${ videoId }` } />
        <div className={ styles.thumbnailBox }>
            <Thumbnail className={ `${ styles.mediumThumbnail } ${ styles.thumbnail }` } />
        </div>
        <MusicControl />
        <ProgressBar />
        <MusicOption />
    </div>
);

export default MusicPlayer;