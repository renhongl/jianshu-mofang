

import { connect } from 'react-redux';
import SignIn from './signIn';
import * as actions from '../actions';
import { withRouter } from 'react-router-dom';


const mapStateToProps = (state, own) => {
    return {
        signIn: state.signIn
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSignIn: (user) => dispatch(actions.signIn(user))
    }
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(SignIn));