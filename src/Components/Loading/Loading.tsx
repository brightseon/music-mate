import React from 'react';
import styles from './styles.scss';
import LoadingImg from '../../../images/loading.png';

const Loading = () => (
    <div className={ styles.loadingBox }>
        <img className={ styles.loading } src={ LoadingImg } />
    </div>
);

export default Loading;