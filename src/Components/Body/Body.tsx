import React, { SFC } from 'react';
import styles from './styles.scss';
import MusicPlayer from '../MusicPlayer';
import SearchBar from '../SearchBar';
import List from '../List';

const Body : SFC = () => (
    <div className={ styles.body }>
        <SearchBar />
        <div className={ styles.musicBox }>
            <MusicPlayer videoId={ '' } />
            <List />
        </div>
    </div>
);

export default Body;