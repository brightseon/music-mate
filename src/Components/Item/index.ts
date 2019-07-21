import Item from './ItemContainer';
import { connect } from 'react-redux';
import { SearchState } from '../../redux/modules/search/types';
import { MusicState, MusicType } from '../../redux/modules/music/types';

interface IState {
    search : SearchState;
    music : MusicState;
};

interface IMapStateToProps {
    isSearching : boolean;
    currentPlay : MusicType;
};

const mapStateToProps = (state : IState) : IMapStateToProps => ({
    isSearching : state.search.isSearching,
    currentPlay : state.music.currentPlay
});

export default connect(mapStateToProps)(Item);