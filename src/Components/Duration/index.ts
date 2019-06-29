import Duration from './DurationContainer';
import { connect } from 'react-redux';
import { MusicState } from '../../redux/modules/music/types';

interface IState {
    music : MusicState;
};

interface IMapStateToProps {
    currentPlayDuration : string;
    playerState : number;
};

const mapStateToProps = (state : IState) : IMapStateToProps => ({
    currentPlayDuration : state.music.currentPlayDuration,
    playerState : state.music.playerState
});

export default connect(mapStateToProps)(Duration);