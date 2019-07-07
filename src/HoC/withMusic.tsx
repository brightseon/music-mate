import React, { SFC } from "react";
import { MusicType } from "../redux/modules/music/types";

interface IProps {
    musicList : MusicType[];
    setCurrentPlay : (music : MusicType) => void;
    setPlayerState : (playerState : number) => void;
    getCurrentPlayDuration : (id : string) => void;
    setCurrentIndex : (currentIndex : number) => void;
};

const withMusic = <P extends IProps>(Component : SFC<P>) => {
    return (props : P) => {
        console.log(`${ Component.name } withMusic props : `, props);
        const findIndex = (music : MusicType) => {
            const { musicList } = props;

            return musicList.findIndex(musicItem => musicItem.id.videoId === music.id.videoId);
        };

        const playMusic = (music : MusicType) => {
            const { setCurrentPlay, setPlayerState, getCurrentPlayDuration, setCurrentIndex } = props;

            setCurrentPlay(music);
            setPlayerState(1);
            getCurrentPlayDuration(music.id.videoId);
            setCurrentIndex(findIndex(music));
        };

        return <Component { ...props } playMusic={ playMusic } />;
    }
};

export default withMusic;