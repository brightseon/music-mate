import React, { SFC } from 'react';
import styles from './styles.scss';

const ProgressBar : SFC = () => (
    <div className={ styles.progressBar }>
        <div className={ styles.line }>
            <div className={ styles.circle }></div>
        </div>
    </div>
);

export default ProgressBar;