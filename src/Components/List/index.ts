import List from './ListContainer';
import { connect } from 'react-redux';
import { MusicType, MusicState } from '../../redux/modules/music/types';
import { SearchState } from '../../redux/modules/search/types';
import { Dispatch } from 'redux';
import { addMusic } from '../../redux/modules/music/music';
import { LoadingState } from '../../redux/modules/loading/types';

interface IState {
    music : MusicState;
    search : SearchState;
    loading : LoadingState;
};

interface IMapStateToProps {
    searchMusicList : MusicType[];
    musicList : MusicType[];
    isSearching : boolean;
    isLoading : boolean;
};

interface IMapDispatchToProps {
    addMusic : (music : MusicType) => void;
};

const mapStateToProps = (state : IState) : IMapStateToProps => ({
    searchMusicList : state.music.searchMusicList,
    musicList : state.music.musicList,
    isSearching : state.search.isSearching,
    isLoading : state.loading.isLoading
});

const mapDispatchToProps = (dispatch : Dispatch) : IMapDispatchToProps => ({
    addMusic : (music : MusicType) => dispatch(addMusic(music))
});

export default connect(mapStateToProps, mapDispatchToProps)(List);