import React, { SFC } from 'react';
import MusicOptionPresenter from './MusicOptionPresenter';

interface IProps {
    player : any;
};

const MusicOptionContainer : SFC<IProps> = ({ player }) => {

    return (
        <MusicOptionPresenter player={ player } />
    );
};

export default MusicOptionContainer;