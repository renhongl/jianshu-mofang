

import React, { Component } from 'react';
import { message } from 'antd';
import '../styles/style.less';



export default class Auth extends Component {

	state = {
		userName: '',
		password: ''
	}

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
        this.props.signIn({userName: this.state.userName, password: this.state.password});
    }

	onUserNameChange = e => {
		this.setState({
			userName: e.target.value
		})
	}

	onPasswordChange = e => {
		this.setState({
			password: e.target.value
		})
	}

    render() {
        return (
            <section className="auth">
                <p><span>登陆</span> * <span>注册</span></p>
                <div>
                    <input onChange={this.onUserNameChange}/>
                    <input onChange={this.onPasswordChange}/>
                    <button onClick={this.onSignin}>登录</button>
                </div>
           </section>
        )
    }
}


