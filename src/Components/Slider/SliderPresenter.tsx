import React, { SFC } from 'react';
import styles from './styles.scss';

interface IProps {
    className : string;
};

const SliderPresenter : SFC<IProps> = ({ className }) => (
    <div className={ `${ styles.volumeControlBox } ${ className }` }>
        <input className={ styles.volumeControl } type="range" min="0" max="100" />
    </div>
);

export default SliderPresenter;