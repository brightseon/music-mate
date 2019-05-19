import MusicPlayer from './MusicPlayerContainer';
import { connect } from 'react-redux';
import { MusicState, MusicType } from '../../redux/modules/music/types';

interface IState {
    music : MusicState;
};

interface IMapStateToProps {
    currentPlay : MusicType;
};

const mapStateToProps = (state : IState) : IMapStateToProps => ({
    currentPlay : state.music.currentPlay
});

export default connect(mapStateToProps)(MusicPlayer);