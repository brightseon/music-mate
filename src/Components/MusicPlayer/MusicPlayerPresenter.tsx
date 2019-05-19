import React, { SFC } from 'react';
import styles from './styles.scss';
import Thumbnail from '../Thumbnail';
import MusicControl from '../MusicControl';
import ProgressBar from '../ProgressBar';
import MusicOption from '../MusicOption';
import { MUSIC_PLAY_URL } from '../../../api';
import { MusicType } from '../../redux/modules/music/types';
import YouTube, { Options } from 'react-youtube';

interface IProps {
    currentPlay : MusicType;
    musicPlay : (e : any) => void;
};

const opts : Options = {
    playerVars : {
        origin : MUSIC_PLAY_URL,
        autoplay : 1,
        enablejsapi : 1
    }
};

const MusicPlayerPresenter : SFC<IProps> = ({ currentPlay, musicPlay }) => (
    <div className={ styles.musicPlayer }>
        {/* { currentPlay && <iframe className={ styles.hiddenPlayer } src={ `${ MUSIC_PLAY_URL }${ currentPlay.id.videoId }?autoplay=1` } /> } */}
        { currentPlay && <YouTube className={ styles.hiddenPlayer } videoId={ currentPlay.id.videoId } opts={ opts } onReady={ musicPlay } /> }
        <div className={ styles.thumbnailBox }>
            <Thumbnail className={ `${ styles.mediumThumbnail } ${ styles.thumbnail }` } />
        </div>
        <MusicControl />
        <ProgressBar />
        <MusicOption />
    </div>
);

export default MusicPlayerPresenter;