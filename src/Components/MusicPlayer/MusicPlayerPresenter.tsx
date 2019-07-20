import React, { SFC } from 'react';
import styles from './styles.scss';
import Thumbnail from '../Thumbnail';
import MusicControl from '../MusicControl';
import ProgressBar from '../ProgressBar';
import MusicOption from '../MusicOption';
import { MusicType } from '../../redux/modules/music/types';
import YouTube, { Options } from 'react-youtube';

interface IProps {
    currentPlay : MusicType;
    musicPlay : (e : any) => void;
    player : any;
};

const opts : Options = {
    playerVars : {
        autoplay : 1,
        enablejsapi : 1,
        controls : 0
    }
};

const MusicPlayerPresenter : SFC<IProps> = ({ currentPlay, musicPlay, player }) => (
    <div className={ styles.musicPlayer }>
        { 
            currentPlay && (
                <YouTube containerClassName={ styles.hiddenPlayerContainer } className={ styles.hiddenPlayer } 
                    videoId={ currentPlay.id.videoId } opts={ opts } onReady={ musicPlay } />
            )
        }
        <div className={ styles.thumbnailBox }>
            <Thumbnail className={ `${ styles.mediumThumbnail } ${ styles.thumbnail }` } thumbnail={ currentPlay && currentPlay.snippet.thumbnails.medium.url } />
        </div>
        <ProgressBar player={ player } />
        <MusicControl player={ player } />
        <MusicOption player={ player } />
    </div>
);

export default MusicPlayerPresenter;