import List from './List';
import { connect } from 'react-redux';
import { MusicType, MusicState } from '../../redux/modules/music/types';

interface IState {
    music : MusicState;
};

interface IMapStateToProps {
    musicList : [MusicType];
};

const mapStateToProps = (state : IState) : IMapStateToProps => ({
    musicList : state.music.musicList
});

export default connect(mapStateToProps)(List);