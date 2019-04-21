import List from './List';
import { connect } from 'react-redux';
import { MusicType, MusicState } from '../../redux/modules/music/types';
import { SearchState } from '../../redux/modules/search/types';

interface IState {
    music : MusicState;
    search : SearchState;
};

interface IMapStateToProps {
    searchMusicList : MusicType[];
    musicList : MusicType[];
    isSearching : boolean;
};

const mapStateToProps = (state : IState) : IMapStateToProps => ({
    searchMusicList : state.music.searchMusicList,
    musicList : state.music.musicList,
    isSearching : state.search.isSearching
});

export default connect(mapStateToProps)(List);