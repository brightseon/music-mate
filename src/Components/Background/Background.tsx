import React, { SFC } from 'react';
import styles from './styles.scss';
import Thumbnail from '../Thumbnail';
import { MusicType } from '../../redux/modules/music/types';

interface IProps {
    currentPlay : MusicType;
};

const Background : SFC<IProps> = ({ currentPlay }) => (
    <div className={ styles.background }>
        <Thumbnail className={ styles.backgroundThumbnail } thumbnail={ currentPlay && currentPlay.snippet.thumbnails.high.url } />
    </div>
);

export default Background;