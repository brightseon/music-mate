import Random from './Random';
import { connect } from 'react-redux';
import { MusicState } from '../../redux/modules/music/types';
import { Dispatch } from 'redux';
import { toggleIsRandom } from '../../redux/modules/music/music';

interface IState {
    music : MusicState;
};

interface IMapStateToProps {
    isRandom : boolean;
};

interface IMapDispatchToProps {
    toggleIsRandom : () => void;
};

const mapStateToProps = (state : IState) : IMapStateToProps => ({
    isRandom : state.music.isRandom
});

const mapDispatchToProps = (dispatch : Dispatch) : IMapDispatchToProps => ({
    toggleIsRandom : () => dispatch(toggleIsRandom())
});

export default connect(mapStateToProps, mapDispatchToProps)(Random);