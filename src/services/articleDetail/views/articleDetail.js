
import * as React from "react";
import Markdown from 'react-remarkable';
import { view as Loading } from '../../../commons/loading';
import renderHTML from 'react-render-html';



export default class ArticleDetail extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getArticleDetial(this.props.match.params.id);
    }

    render() {
        if (Object.keys(this.props.articleDetail).length === 0 || this.props.articleDetail.loading) {
            return <Loading />
        }
        return (
            <div className="article-detail">
                <div className="preview">
                    {renderHTML(this.props.articleDetail.data.content)}
                </div>
            </div>
        );
    }
}