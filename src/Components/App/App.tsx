import React, { SFC } from 'react';
import styles from './styles.scss';
import Background from '../Background';
import MusicPlayer from '../MusicPlayer';

const App : SFC = () => (
    <div className={ `${ styles.app }` }>
        <Background />
        <MusicPlayer />
    </div>
);

export default App;