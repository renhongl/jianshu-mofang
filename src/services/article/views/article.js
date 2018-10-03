


import React, { Component } from 'react';
import List from './list';
import { view as Loading } from '../../../commons/loading';

export default class Article extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getArticleList();
    }

    render() {
        const { article } = this.props;
        if (article.status !== 0 && article.loading) {
            return <Loading />
        }
        return (
            <List list={article.data} />
        )
    }
}