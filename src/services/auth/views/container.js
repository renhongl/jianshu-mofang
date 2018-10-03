

import { connect } from 'react-redux';
import Auth from './auth';
import { withRouter } from 'react-router-dom';


const mapStateToProps = (state, own) => {
    return {
        
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        
    }
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Auth));