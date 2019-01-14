

import { connect } from 'react-redux';
import SignUp from './signup';
import * as actions from '../actions';
import { withRouter } from 'react-router-dom';


const mapStateToProps = (state, own) => {
    return {
        signUp: state.signUp
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSignUp: (user) => dispatch(actions.signUp(user))
    }
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(SignUp));