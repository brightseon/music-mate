import React, { SFC } from 'react';
import MusicPlayerPresenter from './MusicPlayerPresenter';
import { MusicType } from '../../redux/modules/music/types';

interface IProps {
    currentPlay : MusicType;
};

const MusicPlayerContainer : SFC<IProps> = ({ currentPlay }) => {
    const musicPlay  = (e : any) => {
        console.log('musicPlay e : ', e);
        const { target : { pauseVideo } } = e;

        pauseVideo();
    };

    return <MusicPlayerPresenter currentPlay={ currentPlay } musicPlay={ musicPlay } />;
};

export default MusicPlayerContainer;