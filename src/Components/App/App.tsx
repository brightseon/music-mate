import React, { SFC } from 'react';
import styles from './styles.scss';
import Background from '../Background';
import Body from '../Body';

const App : SFC = () => (
    <div className={ `${ styles.app }` }>
        <Background />
        <Body />
    </div>
);

export default App;