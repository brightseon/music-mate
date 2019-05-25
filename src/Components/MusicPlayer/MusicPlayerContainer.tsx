import React, { SFC, useState } from 'react';
import MusicPlayerPresenter from './MusicPlayerPresenter';
import { MusicType } from '../../redux/modules/music/types';

interface IProps {
    currentPlay : MusicType;
};

const MusicPlayerContainer : SFC<IProps> = ({ currentPlay }) => {
    const [player, setPlayer] = useState(null);

    const musicPlay  = (e : any) => {
        const { target } = e;

        setPlayer(target);
    };

    return (
        <MusicPlayerPresenter currentPlay={ currentPlay } player={ player } musicPlay={ musicPlay } />
    );
};

export default MusicPlayerContainer;