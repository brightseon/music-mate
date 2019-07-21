import React, { SFC } from 'react';
import SliderPresenter from './SliderPresenter';

interface IProps {
    className : string;
}

const SliderContainer : SFC<IProps> = ({ className }) => {

    return (
        <SliderPresenter className={ className } />
    );
};

export default SliderContainer;