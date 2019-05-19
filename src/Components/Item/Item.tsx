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
    playMusic? : () => void;
};

const Item : SFC<IProps> = ({ title, url, isSearching, addMusic, playMusic }) => (
    <div className={ styles.item } onClick={ playMusic }>
        <div className={ styles.musicInfo }>
            <Thumbnail className={ styles.thumbnail } thumbnail={ url } />
            <div className={ styles.musicTitleBox } title={ title }>
                <span className={ styles.musicTitle }>
                    { title }
                </span>
            </div>
        </div>
        {
            isSearching ? <Button className={ styles.addMusicBtn } buttonName={ AddButton } clickEvent={ addMusic } /> : <Time />
        }
    </div>
);

export default Item;