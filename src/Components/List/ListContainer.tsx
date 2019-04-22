import React, { Component } from 'react';
import ListPresenter from './ListPresenter';
import { MusicType } from '../../redux/modules/music/types';

interface IProps {
    isSearching : boolean;
    musicList : [MusicType];
    searchMusicList : [MusicType];
    addMusic : (music : MusicType) => void;
    isLoading : boolean;
};

class ListContainer extends Component<IProps> {
    shouldComponentUpdate = (nextProps : IProps) : boolean => {
        const { musicList, searchMusicList, isLoading } = this.props;

        if(nextProps.musicList !== musicList || nextProps.searchMusicList !== searchMusicList || nextProps.isLoading !== isLoading) {
            return true;
        }

        return false;
    };

    addMusic = (music : MusicType) => {
        const { addMusic } = this.props;

        addMusic(music);
    };

    render() {
        const { isSearching, musicList, searchMusicList, isLoading } = this.props;

        return <ListPresenter isSearching={ isSearching } musicList={ musicList } searchMusicList={ searchMusicList }
            addMusic={ this.addMusic } isLoading={ isLoading } />;
    };
};

export default ListContainer;