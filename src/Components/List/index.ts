import List from './ListContainer';
import { connect } from 'react-redux';
import { MusicType, MusicState } from '../../redux/modules/music/types';
import { SearchState } from '../../redux/modules/search/types';
import { Dispatch } from 'redux';
import { addMusic } from '../../redux/modules/music/music';
import { toggleIsSearching } from '../../redux/modules/search/search';

interface IState {
    music : MusicState;
    search : SearchState;
};

interface IMapStateToProps {
    searchMusicList : MusicType[];
    musicList : MusicType[];
    isSearching : boolean;
};

interface IMapDispatchToProps {
    addMusic : (music : MusicType) => void;
};

const mapStateToProps = (state : IState) : IMapStateToProps => ({
    searchMusicList : state.music.searchMusicList,
    musicList : state.music.musicList,
    isSearching : state.search.isSearching
});

const mapDispatchToProps = (dispatch : Dispatch) : IMapDispatchToProps => ({
    addMusic : (music : MusicType) => dispatch(addMusic(music))
});

export default connect(mapStateToProps, mapDispatchToProps)(List);