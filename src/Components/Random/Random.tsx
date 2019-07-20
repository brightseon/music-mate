import React, { SFC } from 'react';
import styles from './styles.scss';
import Button from '../Button';
import RandomButton from '../../../images/buttons/randomPlay.svg';
import RandomActiveButton from '../../../images/buttons/randomPlayActiveButton.svg';

interface IProps {
    isRandom : boolean;
    toggleIsRandom : () => void;
};

const Random : SFC<IProps> = ({ isRandom, toggleIsRandom }) => (
    <div className={ styles.randomButtons }>
        <Button className={ styles.randomButton } buttonName={ isRandom ? RandomActiveButton : RandomButton } clickEvent={ toggleIsRandom } />
    </div>
);

export default Random;