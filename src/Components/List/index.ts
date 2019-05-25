import List from './ListContainer';
import { connect } from 'react-redux';
import { MusicType, MusicState, AddMusicAction, RemoveSearchItemAction, SetCurrentPlayAction, SetPlayerStateAction } from '../../redux/modules/music/types';
import { SearchState } from '../../redux/modules/search/types';
import { addMusic, removeSearchItem, setCurrentPlay, setPlayerState } from '../../redux/modules/music/music';
import { LoadingState, LoadingAction } from '../../redux/modules/loading/types';
import { searchMusic } from '../../redux/modules/search/search';
import { ThunkDispatch } from 'redux-thunk';
import { loading } from '../../redux/modules/loading/loading';

interface IState {
    music : MusicState;
    search : SearchState;
    loading : LoadingState;
};

interface IMapStateToProps {
    searchMusicList : MusicType[];
    musicList : MusicType[];
    isSearching : boolean;
    nextPageToken : string;
};

interface IMapDispatchToProps {
    addMusic : (music : MusicType) => void;
    searchMusic : (searchTerm : string, nextPageToken? : string) => void;
    loading : (isLoading : boolean) => void;
    removeSearchItem : (id : string) => void;
    setCurrentPlay : (music : MusicType) => void;
    setPlayerState : (playerState : number) => void;
};

type DispathcActions = AddMusicAction | LoadingAction | RemoveSearchItemAction | SetCurrentPlayAction | SetPlayerStateAction;

const mapStateToProps = (state : IState) : IMapStateToProps => ({
    searchMusicList : state.music.searchMusicList,
    musicList : state.music.musicList,
    isSearching : state.search.isSearching,
    nextPageToken : state.music.nextPageToken
});

const mapDispatchToProps = (dispatch : ThunkDispatch<{}, {}, DispathcActions>) : IMapDispatchToProps => ({
    addMusic : (music : MusicType) => dispatch(addMusic(music)),
    searchMusic : (searchTerm : string, nextPageToken? : string) => dispatch(searchMusic(searchTerm, nextPageToken)),
    loading : (isLoading : boolean) => dispatch(loading(isLoading)),
    removeSearchItem : (id : string) => dispatch(removeSearchItem(id)),
    setCurrentPlay : (music : MusicType) => dispatch(setCurrentPlay(music)),
    setPlayerState : (playerState : number) => dispatch(setPlayerState(playerState))
});

export default connect(mapStateToProps, mapDispatchToProps)(List);