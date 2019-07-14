import MusicOption from './MusicOptionContainer';
import { connect } from 'react-redux';
import { MusicState } from '../../redux/modules/music/types';
import { Dispatch } from 'redux';
import { setRepeatState } from '../../redux/modules/music/music';
import { REPEAT_STATE_TYPE } from '../../types/commonTypes';

interface IState {
    music : MusicState;
};

interface IMapStateToProps {
    currentPlayDuration : string;
    repeatState : string;
};

interface IMapDispatchToProps {
    setRepeatState : (repeatState : string) => void;
};

const mapStateToProps = (state : IState) : IMapStateToProps => ({
    currentPlayDuration : state.music.currentPlayDuration,
    repeatState : state.music.repeatState
});

const mapDispatchToProps = (dispach : Dispatch) : IMapDispatchToProps => ({
    setRepeatState : (repeatState : REPEAT_STATE_TYPE) => dispach(setRepeatState(repeatState))
});

export default connect(mapStateToProps, mapDispatchToProps)(MusicOption);