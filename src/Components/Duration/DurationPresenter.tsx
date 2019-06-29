import React, { SFC } from 'react';
import styles from './styles.scss';
import Time from '../Time';

interface IProps {
    duration : string;
    currentTime : string;
};

const DurationPresenter : SFC<IProps> = ({ duration, currentTime }) => (
    <div className={ styles.duration }>
        <Time duration={ `${ currentTime }` } />
        <span className={ styles.slash }>/</span>
        <Time duration={ duration ? duration : '00:00' } />
    </div>
);

export default DurationPresenter;