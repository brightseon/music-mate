import React, { SFC } from 'react';
import styles from './styles.scss';
import Button from '../Button';
import RepeatButton from '../../../images/buttons/repeatButton.svg';
import RandomButton from '../../../images/buttons/randomPlay.svg';
import Time from '../Time';

interface IProps {
    duration : string;
};

const MusicOptionPresenter : SFC<IProps> = ({ duration }) => (
    <div className={ styles.musicOption }>
        <div className={ styles.buttonBox }>
            <Button className={ styles.repeatButton } buttonName={ RepeatButton } />
            <Button className={ styles.randomButton } buttonName={ RandomButton } />
        </div>
        <Time duration={ duration } />
    </div>
);

export default MusicOptionPresenter;