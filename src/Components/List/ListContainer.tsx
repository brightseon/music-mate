import React, { Component, createRef } from 'react';
import ListPresenter from './ListPresenter';
import { MusicType } from '../../redux/modules/music/types';

interface IProps {
    isSearching : boolean;
    musicList : [MusicType];
    searchMusicList : [MusicType];
    addMusic : (music : MusicType) => void;
    searchMusic : (searchTerm : string, nextPageToken? : string) => void;
    nextPageToken : string;
    loading : (isLoading : boolean) => void;
};

class ListContainer extends Component<IProps> {
    listBoxRef = createRef<HTMLDivElement>();
    listRef = createRef<HTMLDivElement>();

    componentDidMount = () => {
        window.addEventListener('scroll', this.handleScroll, true);
    };
    
    shouldComponentUpdate = (nextProps : IProps) : boolean => {
        const { musicList, searchMusicList } = this.props;

        if(nextProps.musicList !== musicList || nextProps.searchMusicList !== searchMusicList) {
            return true;
        }

        return false;
    };

    componentWillUnmount = () => {
        window.removeEventListener('scroll', this.handleScroll);
    };

    handleScroll = () => {
        const { isSearching } = this.props;

        if(!isSearching) return;

        const listBoxRef = this.listBoxRef.current;
        const listRef = this.listRef.current;

        let scrollHeight = Math.max(listBoxRef.scrollHeight, listRef.scrollHeight);
        let scrollTop = Math.max(listBoxRef.scrollTop, listRef.scrollTop);
        let clientHeight = listBoxRef.clientHeight;

        if(scrollTop + clientHeight === scrollHeight) {
            const { searchMusic, nextPageToken, loading } = this.props;

            loading(true);
            searchMusic(null, nextPageToken);
        }
    };

    addMusic = (music : MusicType) => {
        const { addMusic } = this.props;

        addMusic(music);
    };

    render() {
        const { isSearching, musicList, searchMusicList } = this.props;

        return <ListPresenter isSearching={ isSearching } musicList={ musicList } searchMusicList={ searchMusicList }
            addMusic={ this.addMusic } listBoxRef={ this.listBoxRef } listRef={ this.listRef } />;
    };
};

export default ListContainer;