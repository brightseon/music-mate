import MusicControl from './MusicControlContainer';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { MusicState } from '../../redux/modules/music/types';
import { setPlayerState } from '../../redux/modules/music/music';

interface IState {
    music : MusicState;
};

interface IMapStateToProps {
    playerState : number;
    currentIndex : number;
};

interface IMapDispatchToProps {
    setPlayerState : (playerState : number) => void;
};

const mapStateToProps = (state : IState) : IMapStateToProps => ({
    playerState : state.music.playerState,
    currentIndex : state.music.currentIndex
});

const mapDispatchToProps = (dispatch : Dispatch) : IMapDispatchToProps => ({
    setPlayerState : (playerState : number) => dispatch(setPlayerState(playerState))
});

export default connect(mapStateToProps, mapDispatchToProps)(MusicControl);