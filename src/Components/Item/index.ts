import Item from './Item';
import { connect } from 'react-redux';
import { SearchState } from '../../redux/modules/search/types';

interface IState {
    search : SearchState;
};

interface IMapStateToProps {
    isSearching : boolean;
};

const mapStateToProps = (state : IState) : IMapStateToProps => ({
    isSearching : state.search.isSearching
});

export default connect(mapStateToProps)(Item);