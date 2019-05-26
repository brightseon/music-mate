import React, { SFC } from 'react';
import styles from './styles.scss';

interface IProps {
    duration : string;
};

const Time : SFC<IProps> = ({ duration }) => (
    <div className={ styles.timeBox }>
        <span className={ styles.time }>{ duration }</span>
    </div>
);

export default Time;