import React, { SFC } from 'react';
import styles from './styles.scss';

const Time : SFC = () => (
    <div className={ styles.timeBox }>
        <span className={ styles.time }>4:00</span>
    </div>
);

export default Time;