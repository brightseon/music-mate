import React, { SFC } from 'react';
import styles from './styles.scss';
import Item from '../Item';

const List : SFC = () => (
    <div className={ styles.listBox }>
        <div className={ styles.list }>
            <Item />
            <Item />
            <div className={ styles.listBackground }></div>
        </div>
    </div>
);

export default List;