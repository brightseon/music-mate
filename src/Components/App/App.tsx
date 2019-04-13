import React, { SFC } from 'react';
import styles from './styles.scss';
import Background from '../Background';
import MusicPlayer from '../MusicPlayer';
import Container from '../Container';

const App : SFC = () => (
    <div className={ `${ styles.app }` }>
        <Background />
        <Container />
    </div>
);

export default App;