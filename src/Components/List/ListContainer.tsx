import React, { Component } from 'react';
import ListPresenter from './ListPresenter';
import { MusicType } from '../../redux/modules/music/types';

interface IProps {
    isSearching : boolean;
    musicList : [MusicType];
    searchMusicList : [MusicType];
    addMusic : (music : MusicType) => void;
};

class ListContainer extends Component<IProps> {
    addMusic = (music : MusicType) => {
        const { addMusic } = this.props;

        addMusic(music);
    };

    render() {
        const { isSearching, musicList, searchMusicList } = this.props;

        return <ListPresenter isSearching={ isSearching } musicList={ musicList } searchMusicList={ searchMusicList }
            addMusic={ this.addMusic } />;
    };
};

export default ListContainer;