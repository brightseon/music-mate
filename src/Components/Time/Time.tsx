import React, { SFC } from 'react';
import styles from './styles.scss';

interface IProps {
    className? : string;
    duration : string;
};

const Time : SFC<IProps> = ({ className, duration }) => (
    <div className={ `${ styles.timeBox } ${ className }` }>
        <span className={ styles.time }>{ duration }</span>
    </div>
);

export default Time;