import React, { SFC, MouseEvent, useEffect, useState, MouseEventHandler } from 'react';
import ItemPresenter from './ItemPresenter';
import { getDuration, makeTotalDuration } from '../../utils/Time';
import { MusicType } from '../../redux/modules/music/types';

interface IProps {
    title : string;
    url : string;
    isSearching : boolean;
    addMusic? : (e : MouseEvent<HTMLDivElement>) => void;
    musicStarted? : () => void;
    idx? : string;
    currentPlay : MusicType;
    removeMusicList : (id : string) => void;
    musicList : MusicType[];
    playMusic? : (music : MusicType) => void;
};

const ItemContainer : SFC<IProps> = ({ title, url, isSearching, addMusic, musicStarted, idx, currentPlay, removeMusicList : pRemoveMusicList, musicList, playMusic }) => {
    const [duration, setDuration] = useState('00:00');

    // 음악의 총 재생시간을 계산한다.
    const getItemDuration = async () => {
        if(idx) {
            const duration =  await getDuration(idx);
    
            const strDuration = makeTotalDuration(duration);
            setDuration(strDuration);
        }
    };

    useEffect(() => { getItemDuration(); }, []);

    // 현재 재생중인 음악의 다음 음악을 가져온다.
    const getNextMusic = () : MusicType => {
        const currentIndex = musicList.findIndex(music => music.id.videoId === idx);

        return musicList[currentIndex + 1];
    };

    // 재생목록에서 음악을 삭제한다.
    const removeMusicList : MouseEventHandler = (e : MouseEvent) => {
        e.stopPropagation();
        
        if(currentPlay && idx === currentPlay.id.videoId) {
            playMusic(getNextMusic());
        }
        
        pRemoveMusicList(idx);
    };

    return <ItemPresenter title={ title } url={ url } isSearching={ isSearching } idx={ idx }
        addMusic={ addMusic } playMusic={ musicStarted } duration={ duration } currentPlay={ currentPlay }
        removeMusicList={ removeMusicList } />;
};

export default ItemContainer;