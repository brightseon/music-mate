import React, { SFC } from 'react';
import styles from './styles.scss';
import Thumbnail from '../Thumbnail';

const App : SFC = () => (
    <div className={ styles.app }>
        <Thumbnail className={ styles.backgroundThumbnail } />
    </div>
);

export default App;