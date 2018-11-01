


import ArticleDetail from './articleDetail';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actions from '../actions';

const mapStateToProps = (state, ownProp) => {
    return {
        articleDetail: state.articleDetail
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getArticleDetial: (id) => dispatch(actions.getArticleDetail(id))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ArticleDetail));