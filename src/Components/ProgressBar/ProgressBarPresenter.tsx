import React, { SFC } from 'react';
import styles from './styles.scss';

interface IProps {
    player : any;
    progress : number;
};

const ProgressBarPresenter : SFC<IProps> = ({ progress }) => (
    <div className={ styles.progressBar }>
        <div className={ styles.line }>
            <div className={ styles.progress } style={{ width : `${ progress }%` }}></div>
        </div>
    </div>
);

export default ProgressBarPresenter;