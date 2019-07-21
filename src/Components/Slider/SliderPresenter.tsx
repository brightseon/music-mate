import React, { SFC, ChangeEvent } from 'react';
import styles from './styles.scss';

interface IProps {
    className : string;
    volume : number;
    controlVolume : (e : ChangeEvent<HTMLInputElement>) => void;
};

const SliderPresenter : SFC<IProps> = ({ className, volume, controlVolume }) => (
    <div className={ `${ styles.volumeControlBox } ${ className }` }>
        <input className={ styles.volumeControl } type="range" min="0" max="100" step="1" value={ volume } onChange={ controlVolume } />
    </div>
);

export default SliderPresenter;