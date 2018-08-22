

import React, { Component } from 'react';
import { message } from 'antd';
import './style.less';

export default class Auth extends Component {
    constructor(props) {
        super(props);
    }

    componentDidUpdate() {
        // message.info(this.props.auth.msg);
    }

    componentDidMount() {
        
    }

    shouldComponentUpdate(nextProps) {
        return this.props.auth.msg !== nextProps.auth.msg;
    }

    componentWillUpdate(nextProps) {
        if (nextProps.auth.valid) {
            message.success(nextProps.auth.msg);
            setTimeout(() => {
                this.props.history.push('/');
            }, 2000);
        } else {
            // message.info(this.props.auth.msg);
        }
    }

    onSignin = () => {
        this.props.signIn({userName: 'renhongl', password: '112233'});
    }

    render() {
        return (
            <section className="auth">
                <p>登录</p>
                <div>
                    <input />
                    <input />
                    <button onClick={this.onSignin}>登录</button>
                </div>
            </section>
        )
    }
}