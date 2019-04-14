import SearchBar from './SearchBarContainer';
import { connect } from 'react-redux';
import { SearchState } from '../../redux/modules/search/types';
import { setSearchTerm } from '../../redux/modules/search/search';
// import { ThunkDispatch } from 'redux-thunk';
import { Dispatch } from 'redux';

interface IState {
    search : SearchState;
};

interface IMapStateToProps {
    searchTerm : string;
}

interface IMapDispatchToProps {
    setSearchTerm : (searchTerm : string) => void;
};

const mapStateToProps = (state : IState) : IMapStateToProps => ({
    searchTerm : state.search.searchTerm
});

// const mapDispatchToProps = (dispatch : Dispatch | ThunkDispatch<{}, {}, SearchMusicAction>) : IMapDispatchToProps => ({
const mapDispatchToProps = (dispatch : Dispatch) : IMapDispatchToProps => ({
    setSearchTerm : (searchTerm : string) => dispatch(setSearchTerm(searchTerm))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);