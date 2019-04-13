import React from 'react';
import styles from './styles.scss';
import SearchButton from '../../../images/buttons/searchButton.svg';

const Search = () => (
    <div className={ styles.searchBarContainer }>
        <div className={ styles.searchBar }>
            <div className={ styles.searchBox }>
                <input className={ styles.search } type="text" />
            </div>
            <div className={ styles.searchBtnBox }>
                <img className={ styles.searchBtn } src={ SearchButton } />
            </div>
        </div>
    </div>
);

export default Search;