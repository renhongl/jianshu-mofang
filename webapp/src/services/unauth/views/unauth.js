
import React from 'react';
import { Icon, message } from 'antd';
import '../styles/style.less';

export default class Unauth extends React.Component {
    constructor(props) {
        super(props);
    }

    onWrite = () => {
        message.info('未登录，即将前往登录。');
        setTimeout(() => {
            this.props.history.push('/signIn');
        }, 2000);
    }

    onSignIn = () => {
        this.props.history.push('/signIn');
    }

    onSignUp = () => {
        this.props.history.push('/signUp');
    }

    render() {
        return (
            <div className="unauth">
                <span>Aa</span>
                <span className="signin" onClick={this.onSignIn}>登录</span>
                <span className="register" onClick={this.onSignUp}>注册</span>
                <span className="write" onClick={this.onWrite}><Icon type="edit" />写文章</span>
            </div>
        )
    }
}

