import ProgressBar from './ProgressBarContainer';
import { connect } from 'react-redux';
import { MusicState } from '../../redux/modules/music/types';

interface IState {
    music : MusicState;
};

interface IMapStateToProps {
    progress : number;
};

const mapStateToProps = (state : IState) : IMapStateToProps => ({
    progress : state.music.progress
});

export default connect(mapStateToProps)(ProgressBar);