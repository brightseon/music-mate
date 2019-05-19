import React, { SFC, ChangeEvent, KeyboardEvent } from 'react';
import styles from './styles.scss';
import SearchButton from '../../../images/buttons/searchButton.svg';
import ClearButton from '../../../images/buttons/clearButton.svg';

interface IProps {
    search : (e : ChangeEvent<HTMLInputElement>) => void;
    searchTerm : string;
    searchMusic : (e : KeyboardEvent) => void;
    resetSearchTerm : () => void;
    clickSearchBtn : () => void;
};

const SearchBarPresenter : SFC<IProps> = ({ search, searchTerm, searchMusic, resetSearchTerm, clickSearchBtn }) => (
    <div className={ styles.searchBarContainer }>
        <div className={ styles.searchBar }>
            <div className={ styles.searchBox }>
                <input className={ styles.search } type="text" value={ searchTerm } onChange={ search } onKeyDown={ searchMusic } />
                <div className={ styles.clearBtnBox }>
                    <img className={ styles.clearBtn } src={ ClearButton } onClick={ resetSearchTerm } />
                </div>
            </div>
            <div className={ styles.searchBtnBox } onClick={ clickSearchBtn }>
                <img className={ styles.searchBtn } src={ SearchButton } />
            </div>
        </div>
    </div>
);

export default SearchBarPresenter;