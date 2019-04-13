import React, { SFC } from 'react';
import styles from './styles.scss';
import Thumbnail from '../Thumbnail';

const Background : SFC = () => (
    <div className={ styles.background }>
        <Thumbnail className={ styles.backgroundThumbnail } />
    </div>
);

export default Background;