import React from 'react';
import styles from './styles.scss';
import MusicPlayer from '../MusicPlayer';
import SearchBar from '../SearchBar';

const Container = () => (
    <div className={ styles.container }>
        <SearchBar />
        <MusicPlayer />
    </div>
);

export default Container;