import React, { SFC } from 'react';
import styles from './styles.scss';
import Background from '../Background';

const App : SFC = () => (
    <div className={ styles.app }>
        <Background />
    </div>
);

export default App;