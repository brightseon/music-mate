import React, { SFC, ChangeEvent, ChangeEventHandler } from 'react';
import SliderPresenter from './SliderPresenter';

interface IProps {
    className : string;
    volume : number;
    settingVolume : (volume : number) => void;
}

const SliderContainer : SFC<IProps> = ({ className, volume, settingVolume }) => {
    const controlVolume : ChangeEventHandler = (e : ChangeEvent<HTMLInputElement>) => {
        const { target : { value } } = e;

        settingVolume(parseInt(value));
    }

    return (
        <SliderPresenter className={ className } volume={ volume } controlVolume={ controlVolume } />
    );
};

export default SliderContainer;