

import { connect } from 'react-redux';
import Header from './header';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, own) => {
    return {
        signIn: state.signIn,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        
    }
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Header));