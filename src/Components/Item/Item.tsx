import React, { SFC } from 'react';
import styles from './styles.scss';
import Thumbnail from '../Thumbnail';
import Time from '../Time';

const Item : SFC = () => (
    <div className={ styles.item }>
        <Thumbnail className={ styles.thumbnail } />
        <div className={ styles.musicTitleBox }>
            <span className={ styles.musicTitle }>
                악동 뮤지션 - 오랜날 오랜밤
            </span>
        </div>
        <Time />
    </div>
);

export default Item;