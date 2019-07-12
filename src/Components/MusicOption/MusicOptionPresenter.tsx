import React, { SFC } from 'react';
import styles from './styles.scss';
import Button from '../Button';
import RepeatButton from '../../../images/buttons/repeatButton.svg';
import RepeatActiveButton from '../../../images/buttons/repeatActiveButton.svg';
import RandomButton from '../../../images/buttons/randomPlay.svg';
import Duration from '../Duration';

interface IProps {
    player : any;
    isRepeatAll : boolean;
    toggleIsRepeatAll : () => void;
};

const MusicOptionPresenter : SFC<IProps> = ({ player, isRepeatAll, toggleIsRepeatAll }) => (
    <div className={ styles.musicOption }>
        <div className={ styles.buttonBox }>
            {
                isRepeatAll ? (
                    <Button className={ styles.repeatButton } buttonName={ RepeatActiveButton } clickEvent={ toggleIsRepeatAll } />
                    ) : (
                    <Button className={ styles.repeatButton } buttonName={ RepeatButton } clickEvent={ toggleIsRepeatAll } />
                )
            }
            <Button className={ styles.randomButton } buttonName={ RandomButton } />
        </div>
        <Duration player={ player } />
    </div>
);

export default MusicOptionPresenter;