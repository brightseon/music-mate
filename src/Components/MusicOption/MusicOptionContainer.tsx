import React, { SFC } from 'react';
import MusicOptionPresenter from './MusicOptionPresenter';

interface IProps {
    player : any;
    isRepeatAll : boolean;
    toggleIsRepeatAll : () => void;
};

const MusicOptionContainer : SFC<IProps> = ({ player, isRepeatAll, toggleIsRepeatAll }) => {

    return (
        <MusicOptionPresenter player={ player } isRepeatAll={ isRepeatAll } toggleIsRepeatAll={ toggleIsRepeatAll } />
    );
};

export default MusicOptionContainer;