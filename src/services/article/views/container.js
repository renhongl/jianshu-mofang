
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Article from './article';
import * as actions from '../actions';

const mapStateToProps = (state, ownProp) => {
    return {
        article: state.article
    }
}

const mapDispatchToProps = (dispacth) => {
    return {
        getArticleList: () => dispacth(actions.getArticleList())
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Article));