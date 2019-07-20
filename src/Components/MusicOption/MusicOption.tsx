import React, { SFC } from 'react';
import styles from './styles.scss';
import Duration from '../Duration';
import Volume from '../Volume';

interface IProps {
    player : any;
};

const MusicOption : SFC<IProps> = ({ player }) => (
    <div className={ styles.musicOption }>
        <Volume player={ player } />
        <Duration player={ player } />
    </div>
);

export default MusicOption;