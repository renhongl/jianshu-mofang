

import React, { Component } from 'react';
import { message } from 'antd';

export default class Auth extends Component {
    constructor(props) {
        super(props);
    }

    componentDidUpdate() {
        message.info(this.props.auth.msg);
    }

    componentDidMount() {
        this.props.signIn({userName: 'renhongl', password: '112233'});
    }

    shouldComponentUpdate(nextProps) {
        return this.props.auth.msg !== nextProps.auth.msg;
    }

    render() {
        return (
            <div></div>
        )
    }
}