import React, { SFC } from 'react';
import styles from './styles.scss';
import Thumbnail from '../Thumbnail';
import Time from '../Time';
import Button from '../Button';
import AddButton from '../../../images/buttons/addPlayListButton.svg';

interface IProps {
    title : string;
    url : string;
    isSearching : boolean;
};

const Item : SFC<IProps> = ({ title, url, isSearching }) => (
    <div className={ styles.item }>
        <Thumbnail className={ styles.thumbnail } thumbnail={ url } />
        <div className={ styles.musicTitleBox }>
            <span className={ styles.musicTitle }>
                { title }
            </span>
        </div>
        {
            isSearching ? <Button className={ '' } buttonName={ AddButton } /> : <Time />
        }
    </div>
);

export default Item;