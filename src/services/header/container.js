

import { connect } from 'react-redux';
import Header from './header';
import * as actions from './actions';

const mapStateToProps = (state, own) => {
    return {
        header: state.header
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getHotSearch: () => dispatch(actions.getHotSearch())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);