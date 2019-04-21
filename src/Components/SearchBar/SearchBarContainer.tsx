import React, { Component, ChangeEventHandler, ChangeEvent, KeyboardEventHandler, KeyboardEvent } from 'react';
import SearchBarPresenter from './SearchBarPresenter';

interface IProps {
    searchTerm : string;
    setSearchTerm : (searchTerm : string) => void;
    searchMusic : (searchTerm : string) => void;
    resetSearchTerm : () => void;
    toggleIsSearching : (isSearching : boolean) => void;
};

class SearchBarContainer extends Component<IProps> {
    search : ChangeEventHandler = (e : ChangeEvent<HTMLInputElement>) => {
        const { setSearchTerm, toggleIsSearching } = this.props;
        const { target : { value } } = e;

        if(value === '') {
            toggleIsSearching(false);
        }

        setSearchTerm(value);
    };

    searchMusic : KeyboardEventHandler = (e : KeyboardEvent<HTMLInputElement>) => {
        const { searchTerm, searchMusic, toggleIsSearching } = this.props;
        const { keyCode : enterKey } = e;

        if(enterKey === 13) {
            searchMusic(searchTerm);
            toggleIsSearching(true);
        }
    };

    resetSearchTerm = () => {
        const { resetSearchTerm, toggleIsSearching } = this.props;

        resetSearchTerm();
        toggleIsSearching(false);
    };

    render() {
        const { searchTerm } = this.props;

        return <SearchBarPresenter search={ this.search } searchTerm={ searchTerm } searchMusic={ this.searchMusic }
            resetSearchTerm={ this.resetSearchTerm } />;
    };
};

export default SearchBarContainer;