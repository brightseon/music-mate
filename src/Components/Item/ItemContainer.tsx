import React, { SFC, MouseEvent, useEffect, useState } from 'react';
import ItemPresenter from './ItemPresenter';
import { getDuration, makeTotalDuration } from '../../utils/Time';

interface IProps {
    title : string;
    url : string;
    isSearching : boolean;
    addMusic? : (e : MouseEvent<HTMLDivElement>) => void;
    playMusic? : () => void;
    idx? : string;
};

const ItemContainer : SFC<IProps> = ({ title, url, isSearching, addMusic, playMusic, idx }) => {
    const [duration, setDuration] = useState('00:00');

    const getItemDuration = async () => {
        if(idx) {
            const duration =  await getDuration(idx);
    
            const strDuration = makeTotalDuration(duration);
            setDuration(strDuration);
        }
    };

    useEffect(() => { getItemDuration(); }, []);

    return <ItemPresenter title={ title } url={ url } isSearching={ isSearching } 
        addMusic={ addMusic } playMusic={ playMusic } duration={ duration } />;
};

export default ItemContainer