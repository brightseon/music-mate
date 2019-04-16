import SearchBar from './SearchBarContainer';
import { connect } from 'react-redux';
import { SearchState, SearchMusicAction } from '../../redux/modules/search/types';
import { setSearchTerm, searchMusic } from '../../redux/modules/search/search';
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
};

const mapStateToProps = (state : IState) : IMapStateToProps => ({
    searchTerm : state.search.searchTerm
});

const mapDispatchToProps = (dispatch : ThunkDispatch<{}, {}, SearchMusicAction>) : IMapDispatchToProps => ({
    setSearchTerm : (searchTerm : string) => dispatch(setSearchTerm(searchTerm)),
    searchMusic : (searchTerm : string) => dispatch(searchMusic(searchTerm))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);