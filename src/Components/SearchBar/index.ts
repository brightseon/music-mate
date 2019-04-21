import SearchBar from './SearchBarContainer';
import { connect } from 'react-redux';
import { SearchState, SearchActions } from '../../redux/modules/search/types';
import { setSearchTerm, searchMusic, resetSearchTerm, toggleIsSearching } from '../../redux/modules/search/search';
import { ThunkDispatch } from 'redux-thunk';

interface IState {
    search : SearchState;
};

interface IMapStateToProps {
    searchTerm : string;
}

interface IMapDispatchToProps {
    setSearchTerm : (searchTerm : string) => void;
    searchMusic : (searchTerm : string) => void;
    resetSearchTerm : () => void;
    toggleIsSearching : (isSearching : boolean) => void;
};

const mapStateToProps = (state : IState) : IMapStateToProps => ({
    searchTerm : state.search.searchTerm
});

const mapDispatchToProps = (dispatch : ThunkDispatch<{}, {}, SearchActions>) : IMapDispatchToProps => ({
    setSearchTerm : (searchTerm : string) => dispatch(setSearchTerm(searchTerm)),
    searchMusic : (searchTerm : string) => dispatch(searchMusic(searchTerm)),
    resetSearchTerm : () => dispatch(resetSearchTerm()),
    toggleIsSearching : (isSearching : boolean) => dispatch(toggleIsSearching(isSearching))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);