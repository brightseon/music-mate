import SearchBar from './SearchBarContainer';
import { connect } from 'react-redux';
import { SearchState, SearchMusicAction } from '../../redux/modules/search/types';
import { setSearchTerm, searchMusic, resetSearchTerm } from '../../redux/modules/search/search';
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
};

const mapStateToProps = (state : IState) : IMapStateToProps => ({
    searchTerm : state.search.searchTerm
});

const mapDispatchToProps = (dispatch : ThunkDispatch<{}, {}, SearchMusicAction>) : IMapDispatchToProps => ({
    setSearchTerm : (searchTerm : string) => dispatch(setSearchTerm(searchTerm)),
    searchMusic : (searchTerm : string) => dispatch(searchMusic(searchTerm)),
    resetSearchTerm : () => dispatch(resetSearchTerm())
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);