

import React, { Component } from 'react';
import { message } from 'antd';

export default class Auth extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.signIn({userName: 'renhongl', password: '112233'});
    }

    render() {
        return (
            <div>{this.props.auth.valid && JSON.stringify(this.props.auth)}</div>
        )
    }
}