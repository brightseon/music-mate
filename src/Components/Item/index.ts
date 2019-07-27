import Item from './ItemContainer';
import { connect } from 'react-redux';
import { SearchState } from '../../redux/modules/search/types';
import { MusicState, MusicType } from '../../redux/modules/music/types';
import { removeMusicList } from '../../redux/modules/music/music';
import { Dispatch } from 'redux';

interface IState {
    search : SearchState;
    music : MusicState;
};

interface IMapStateToProps {
    isSearching : boolean;
    currentPlay : MusicType;
    musicList : MusicType[];
};

interface IMapDispatchToProps {
    removeMusicList : (id : string) => void;
};

const mapStateToProps = (state : IState) : IMapStateToProps => ({
    isSearching : state.search.isSearching,
    currentPlay : state.music.currentPlay,
    musicList : state.music.musicList
});

const mapDispatchToProps = (dispatch : Dispatch) : IMapDispatchToProps => ({
    removeMusicList : (id : string) => dispatch(removeMusicList(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Item);