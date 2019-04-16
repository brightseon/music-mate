import React, { SFC, ChangeEvent, KeyboardEvent } from 'react';
import styles from './styles.scss';
import SearchButton from '../../../images/buttons/searchButton.svg';

interface IProps {
    search : (e : ChangeEvent<HTMLInputElement>) => void;
    searchTerm : string;
    searchMusic : (e : KeyboardEvent) => void;
};

const SearchBarPresenter : SFC<IProps> = ({ search, searchTerm, searchMusic }) => (
    <div className={ styles.searchBarContainer }>
        <div className={ styles.searchBar }>
            <div className={ styles.searchBox }>
                <input className={ styles.search } type="text" value={ searchTerm } onChange={ search } onKeyDown={ searchMusic } />
            </div>
            <div className={ styles.searchBtnBox }>
                <img className={ styles.searchBtn } src={ SearchButton } />
            </div>
        </div>
    </div>
);

export default SearchBarPresenter;