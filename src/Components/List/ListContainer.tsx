import React, { createRef, memo, SFC, useEffect } from 'react';
import ListPresenter from './ListPresenter';
import { MusicType } from '../../redux/modules/music/types';
import { youtubePlayMusic } from '../../utils/youtube';

interface IProps {
    isSearching : boolean;
    musicList : [MusicType];
    searchMusicList : [MusicType];
    addMusic : (music : MusicType) => void;
    searchMusic : (searchTerm : string, nextPageToken? : string) => void;
    nextPageToken : string;
    loading : (isLoading : boolean) => void;
    removeSearchItem : (id : string) => void;
    setCurrentPlay : (music : MusicType) => void;
    setPlayerState : (playerState : number) => void;
    getCurrentPlayDuration : (id : string) => void;
    setCurrentIndex : (currentIndex : number) => void;
    playMusic? : (music : MusicType) => void;
};

const ListContainer : SFC<IProps> = ({ isSearching, musicList, searchMusicList, addMusic : pAddMusic, searchMusic, nextPageToken, loading, removeSearchItem, setCurrentPlay, setPlayerState, getCurrentPlayDuration, setCurrentIndex, playMusic : pPlayMusic }) => {
    const listBoxRef = createRef<HTMLDivElement>();
    const listRef = createRef<HTMLDivElement>();

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, true);
    }, [searchMusicList]);

    const handleScroll = () => {
        if(!isSearching) return;

        const listBox = listBoxRef.current;
        const list = listRef.current;

        if(list) {
            let scrollHeight = Math.max(listBox.scrollHeight, list.scrollHeight);
            let scrollTop = Math.max(listBox.scrollTop, list.scrollTop);
            let clientHeight = listBox.clientHeight;
    
            if(scrollTop + clientHeight === scrollHeight) {
                loading(true);
                searchMusic(null, nextPageToken);
            }
        }
    };

    const addMusic = (music : MusicType) => {
        pAddMusic(music);
        removeSearchItem(music.id.videoId);
    };

    const playMusic = (music : MusicType) => {
        pPlayMusic(music);
    };
    
    return (
        <ListPresenter isSearching={ isSearching } musicList={ musicList } searchMusicList={ searchMusicList }
            addMusic={ addMusic } listBoxRef={ listBoxRef } listRef={ listRef } playMusic={ playMusic } />
    );
};

const propsAreEqual = (prevProps : IProps, nextProps : IProps) : boolean => {
    const result = prevProps.musicList !== nextProps.musicList || prevProps.searchMusicList !== nextProps.searchMusicList || prevProps.isSearching !== nextProps.isSearching;

    return !result;
};

export default memo<IProps>(ListContainer, propsAreEqual);