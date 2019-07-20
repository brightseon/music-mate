import Repeat from './RepeatContainer';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { MusicState } from '../../redux/modules/music/types';
import { REPEAT_STATE_TYPE } from '../../types/commonTypes';
import { setRepeatState } from '../../redux/modules/music/music';

interface IState {
    music : MusicState;
};

interface IMapStateToProps {
    repeatState : REPEAT_STATE_TYPE;
};

interface IMapDispatchToProps {
    setRepeatState : (repeatState : REPEAT_STATE_TYPE) => void;
};

const mapStateToProps = (state : IState) : IMapStateToProps => ({
    repeatState : state.music.repeatState
});

const mapDispatchToProps = (dispatch : Dispatch) : IMapDispatchToProps => ({
    setRepeatState : (repeatState : REPEAT_STATE_TYPE) => dispatch(setRepeatState(repeatState))
});

export default connect(mapStateToProps, mapDispatchToProps)(Repeat);