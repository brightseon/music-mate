import React, { SFC } from 'react';
import styles from './styles.scss';
import Button from '../Button';
import RepeatButton from '../../../images/buttons/repeatButton.svg';
import RandomButton from '../../../images/buttons/randomPlay.svg';
import Duration from '../Duration';

interface IProps {
    player : any;
};

const MusicOptionPresenter : SFC<IProps> = ({ player }) => (
    <div className={ styles.musicOption }>
        <div className={ styles.buttonBox }>
            <Button className={ styles.repeatButton } buttonName={ RepeatButton } />
            <Button className={ styles.randomButton } buttonName={ RandomButton } />
        </div>
        <Duration player={ player } />
    </div>
);

export default MusicOptionPresenter;