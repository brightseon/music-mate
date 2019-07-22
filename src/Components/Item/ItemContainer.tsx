import React, { SFC, MouseEvent, useEffect, useState, MouseEventHandler } from 'react';
import ItemPresenter from './ItemPresenter';
import { getDuration, makeTotalDuration } from '../../utils/Time';
import { MusicType } from '../../redux/modules/music/types';

interface IProps {
    title : string;
    url : string;
    isSearching : boolean;
    addMusic? : (e : MouseEvent<HTMLDivElement>) => void;
    playMusic? : () => void;
    idx? : string;
    currentPlay : MusicType;
    removeMusicList : (id : string) => void;
};

const ItemContainer : SFC<IProps> = ({ title, url, isSearching, addMusic, playMusic, idx, currentPlay, removeMusicList : pRemoveMusicList }) => {
    const [duration, setDuration] = useState('00:00');

    const getItemDuration = async () => {
        if(idx) {
            const duration =  await getDuration(idx);
    
            const strDuration = makeTotalDuration(duration);
            setDuration(strDuration);
        }
    };

    useEffect(() => { getItemDuration(); }, []);

    const removeMusicList : MouseEventHandler = (e : MouseEvent) => {
        e.stopPropagation();
        
        pRemoveMusicList(idx);
    };

    return <ItemPresenter title={ title } url={ url } isSearching={ isSearching } idx={ idx }
        addMusic={ addMusic } playMusic={ playMusic } duration={ duration } currentPlay={ currentPlay }
        removeMusicList={ removeMusicList } />;
};

export default ItemContainer