import MusicControl from './MusicControlContainer';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { MusicState, MusicType } from '../../redux/modules/music/types';
import { setPlayerState, setCurrentPlay, setCurrentIndex } from '../../redux/modules/music/music';

interface IState {
    music : MusicState;
};

interface IMapStateToProps {
    playerState : number;
    currentIndex : number;
    musicList : MusicType[];
};

interface IMapDispatchToProps {
    setPlayerState : (playerState : number) => void;
    setCurrentPlay : (music : MusicType) => void;
    setCurrentIndex : (index : number) => void;
};

const mapStateToProps = (state : IState) : IMapStateToProps => ({
    playerState : state.music.playerState,
    currentIndex : state.music.currentIndex,
    musicList : state.music.musicList
});

const mapDispatchToProps = (dispatch : Dispatch) : IMapDispatchToProps => ({
    setPlayerState : (playerState : number) => dispatch(setPlayerState(playerState)),
    setCurrentPlay : (music : MusicType) => dispatch(setCurrentPlay(music)),
    setCurrentIndex : (index : number) => dispatch(setCurrentIndex(index))
});

export default connect(mapStateToProps, mapDispatchToProps)(MusicControl);