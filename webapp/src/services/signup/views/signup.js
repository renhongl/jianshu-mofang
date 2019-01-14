

import React, { Component } from 'react';
import { message } from 'antd';


export default class Signup extends Component {

    state = {
        userName: '',
        password: '',
        email: '',
    }

    onSignUp = () => {
        this.props.onSignUp({ userName: this.state.userName, password: this.state.password, email: this.state.email});
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

    onEmailChange = e => {
        this.setState({
            email: e.target.value
        })
    }

    render() {
        return (
            <section className="signUp">
                <p><span>登陆</span> * <span>注册</span></p>
                <div>
                    <input onChange={this.onUserNameChange} />
                    <input onChange={this.onPasswordChange} />
                    <input onChange={this.onEmailChange} />
                    <button onClick={this.onSignUp}>登录</button>
                </div>
            </section>
        )
    }
}