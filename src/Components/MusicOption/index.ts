import MusicOption from './MusicOptionContainer';
import { connect } from 'react-redux';
import { MusicState } from '../../redux/modules/music/types';
import { Dispatch } from 'redux';
import { toggleIsRepeatAll } from '../../redux/modules/music/music';

interface IState {
    music : MusicState;
};

interface IMapStateToProps {
    currentPlayDuration : string;
    isRepeatAll : boolean;
};

interface IMapDispatchToProps {
    toggleIsRepeatAll : () => void;
};

const mapStateToProps = (state : IState) : IMapStateToProps => ({
    currentPlayDuration : state.music.currentPlayDuration,
    isRepeatAll : state.music.isRepeatAll
});

const mapDispatchToProps = (dispach : Dispatch) : IMapDispatchToProps => ({
    toggleIsRepeatAll : () => dispach(toggleIsRepeatAll())
});

export default connect(mapStateToProps, mapDispatchToProps)(MusicOption);