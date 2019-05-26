import MusicOption from './MusicOptionContainer';
import { connect } from 'react-redux';
import { MusicState } from '../../redux/modules/music/types';

interface IState {
    music : MusicState;
};

interface IMapStateToProps {
    currentPlayDuration : string;
};

const mapStateToProps = (state : IState) : IMapStateToProps => ({
    currentPlayDuration : state.music.currentPlayDuration
});

export default connect(mapStateToProps)(MusicOption);