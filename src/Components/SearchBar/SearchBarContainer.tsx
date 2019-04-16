import React, { Component, ChangeEventHandler, ChangeEvent, KeyboardEventHandler, KeyboardEvent } from 'react';
import SearchBarPresenter from './SearchBarPresenter';

interface IProps {
    searchTerm : string;
    setSearchTerm : (searchTerm : string) => void;
    searchMusic : (searchTerm : string) => void;
}

class SearchBarContainer extends Component<IProps> {
    search : ChangeEventHandler = (e : ChangeEvent<HTMLInputElement>) => {
        const { setSearchTerm } = this.props;
        const { target : { value } } = e;

        setSearchTerm(value);        
    };

    searchMusic : KeyboardEventHandler = (e : KeyboardEvent<HTMLInputElement>) : void => {
        const { keyCode : enterKey } = e;

        if(enterKey === 13) {
            this.props.searchMusic(this.props.searchTerm);
        }
    };

    render() {
        const { searchTerm } = this.props;

        return <SearchBarPresenter search={ this.search } searchTerm={ searchTerm } searchMusic={ this.searchMusic } />;
    };
};

export default SearchBarContainer;