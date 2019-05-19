import React, { SFC, MouseEvent } from 'react';
import styles from './styles.scss';
import Thumbnail from '../Thumbnail';
import Time from '../Time';
import Button from '../Button';
import AddButton from '../../../images/buttons/addPlayListButton.svg';

interface IProps {
    title : string;
    url : string;
    isSearching : boolean;
    addMusic? : (e : MouseEvent<HTMLDivElement>) => void;
};

const Item : SFC<IProps> = ({ title, url, isSearching, addMusic }) => (
    <div className={ styles.item }>
        <Thumbnail className={ styles.thumbnail } thumbnail={ url } />
        <div className={ styles.musicTitleBox }>
            <span className={ styles.musicTitle }>
                { title }
            </span>
        </div>
        {
            isSearching ? <Button className={ styles.addMusicBtn } buttonName={ AddButton } clickEvent={ addMusic } /> : <Time />
        }
    </div>
);

export default Item;