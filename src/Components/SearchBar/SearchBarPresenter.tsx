import React, { SFC, ChangeEvent } from 'react';
import styles from './styles.scss';
import SearchButton from '../../../images/buttons/searchButton.svg';

interface IProps {
    search : (e : ChangeEvent<HTMLInputElement>) => void;
    searchTerm : string;
};

const SearchBarPresenter : SFC<IProps> = ({ search, searchTerm }) => (
    <div className={ styles.searchBarContainer }>
        <div className={ styles.searchBar }>
            <div className={ styles.searchBox }>
                <input className={ styles.search } type="text" value={ searchTerm } onChange={ search } />
            </div>
            <div className={ styles.searchBtnBox }>
                <img className={ styles.searchBtn } src={ SearchButton } />
            </div>
        </div>
    </div>
);

export default SearchBarPresenter;