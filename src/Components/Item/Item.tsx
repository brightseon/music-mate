import React, { SFC } from 'react';
import styles from './styles.scss';
import Thumbnail from '../Thumbnail';
import Time from '../Time';

interface IProps {
    title : string;
    url : string;
};

const Item : SFC<IProps> = ({ title, url }) => (
    <div className={ styles.item }>
        <Thumbnail className={ styles.thumbnail } thumbnail={ url } />
        <div className={ styles.musicTitleBox }>
            <span className={ styles.musicTitle }>
                { title }
            </span>
        </div>
        <Time />
    </div>
);

export default Item;