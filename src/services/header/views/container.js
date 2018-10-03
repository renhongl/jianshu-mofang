

import { connect } from 'react-redux';
import Header from './header';
import * as actions from '../actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, own) => {
    return {
        header: state.header,
        auth: state.auth
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
)(Header));