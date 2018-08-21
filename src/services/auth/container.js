

import { connect } from 'react-redux';
import Auth from './auth';
import * as actions from './actions';

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (user) => dispatch(actions.authSignIn(user))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Auth);