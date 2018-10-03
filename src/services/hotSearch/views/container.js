

import { connect } from 'react-redux';
import HotSearch from './hotSearch';
import * as actions from '../actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, own) => {
    return {
        hotSearch: state.hotSearch,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getHotSearch: () => dispatch(actions.getHotSearch())
    }
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(HotSearch));