


import React, { Component } from 'react';
import { view as List } from '../../commons/list';
import axios from 'axios';

export default class Article extends Component{
    constructor(props) {
        super(props);
        this.state = {
            list: []
        }
    }

    componentDidMount() {
        axios.get('/mockData/article.json').then(response => {
            this.setState({
                list: response.data
            });
        }).catch(e => {
            console.log(e);
        });
    }

    render() {
        return (
            <List list={this.state.list}/>
        )
    }
}