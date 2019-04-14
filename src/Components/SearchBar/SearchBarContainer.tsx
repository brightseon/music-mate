import React, { Component, ChangeEventHandler, ChangeEvent } from 'react';
import SearchBarPresenter from './SearchBarPresenter';

interface IProps {
    searchTerm : string;
    setSearchTerm : (searchTerm : string) => void;
}

class SearchBarContainer extends Component<IProps> {
    search : ChangeEventHandler = (e : ChangeEvent<HTMLInputElement>) => {
        const { setSearchTerm } = this.props;
        const { target : { value } } = e;

        setSearchTerm(value);        
    };

    render() {
        const { searchTerm } = this.props;

        return <SearchBarPresenter search={ this.search } searchTerm={ searchTerm } />;
    };
};

export default SearchBarContainer;