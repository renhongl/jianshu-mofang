

import React, { Component } from 'react';
import { message } from 'antd';
import '../styles/style.less';



export default class SignIn extends Component {

	state = {
		userName: '',
		password: ''
    }
    
    componentWillReceiveProps(nextProps) {
        
    }

    componentWillUpdate(nextProps) {
        const { signIn } = nextProps;
        const { status, msg } = signIn;
        if (status === 0) {
            message.success(msg);
            setTimeout(() => {
                this.props.history.push('/');
            }, 2000);
        } else {
            message.info(msg);
        }
    }

    onSignin = () => {
        this.props.onSignIn({userName: this.state.userName, password: this.state.password});
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
            <section className="signIn">
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


