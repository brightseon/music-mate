import React, { SFC, MouseEvent, useEffect, useState } from 'react';
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
};

const ItemContainer : SFC<IProps> = ({ title, url, isSearching, addMusic, playMusic, idx, currentPlay }) => {
    const [duration, setDuration] = useState('00:00');

    const getItemDuration = async () => {
        if(idx) {
            const duration =  await getDuration(idx);
    
            const strDuration = makeTotalDuration(duration);
            setDuration(strDuration);
        }
    };

    useEffect(() => { getItemDuration(); }, []);

    return <ItemPresenter title={ title } url={ url } isSearching={ isSearching } idx={ idx }
        addMusic={ addMusic } playMusic={ playMusic } duration={ duration } currentPlay={ currentPlay } />;
};

export default ItemContainer