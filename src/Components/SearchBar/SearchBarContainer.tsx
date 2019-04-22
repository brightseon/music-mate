import React, { Component, ChangeEventHandler, ChangeEvent, KeyboardEventHandler, KeyboardEvent } from 'react';
import SearchBarPresenter from './SearchBarPresenter';

interface IProps {
    searchTerm : string;
    setSearchTerm : (searchTerm : string) => void;
    searchMusic : (searchTerm : string) => void;
    resetSearchTerm : () => void;
    toggleIsSearching : (isSearching : boolean) => void;
    resetSearchMusicList : () => void;
    loading : (isLoading : boolean) => void;
};

class SearchBarContainer extends Component<IProps> {
    search : ChangeEventHandler = (e : ChangeEvent<HTMLInputElement>) => {
        const { setSearchTerm, toggleIsSearching, resetSearchMusicList } = this.props;
        const { target : { value } } = e;

        if(value === '') {
            toggleIsSearching(false);
            resetSearchMusicList();
        }
        
        setSearchTerm(value);
    };

    searchMusic : KeyboardEventHandler = (e : KeyboardEvent<HTMLInputElement>) => {
        const { searchTerm, searchMusic, toggleIsSearching, loading } = this.props;
        const { keyCode : enterKey } = e;

        if(enterKey === 13 && searchTerm.length > 0) {
            searchMusic(searchTerm);
            toggleIsSearching(true);
            loading(true);
        }
    };

    clickSearchBtn = () => {
        const { searchTerm, searchMusic, toggleIsSearching, loading } = this.props;

        if(searchTerm.length > 0) {
            searchMusic(searchTerm);
            toggleIsSearching(true);
            loading(true);
        }
    };

    resetSearchTerm = () => {
        const { resetSearchTerm, toggleIsSearching, resetSearchMusicList } = this.props;

        resetSearchTerm();
        toggleIsSearching(false);
        resetSearchMusicList();
    };

    render() {
        const { searchTerm } = this.props;

        return <SearchBarPresenter search={ this.search } searchTerm={ searchTerm } searchMusic={ this.searchMusic }
            resetSearchTerm={ this.resetSearchTerm } clickSearchBtn={ this.clickSearchBtn } />;
    };
};

export default SearchBarContainer;