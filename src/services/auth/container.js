

import { connect } from 'react-redux';
import Auth from './auth';
import * as actions from './actions';
import { withRouter } from 'react-router-dom';


const mapStateToProps = (state, own) => {
    return {
        auth: state.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (user) => dispatch(actions.authSignIn(user))
    }
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Auth));