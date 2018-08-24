
import React, { Component } from 'react';
import './style.less';
import { Icon } from 'antd';
import { view as Search } from '../../commons/search';
import { view as Unauth } from '../../commons/unauth';
import { message } from 'antd';

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searching: false
        }
    }

    onFocus = () => {
        this.setState({
            searching: true
        });
        this.props.getHotSearch();
    }

    onBlur = () => {
        this.setState({
            searching: false
        });
    }

    onSignIn = () => {
        this.props.history.push('/signIn');
    }

    onSignUp = () => {
        this.props.history.push('/signUp');
    }

    onWrite = () => {
        if (this.props.auth.valid) {

        } else {
            message.info('未登录，即将前往登录。');
            setTimeout(() => {
                this.props.history.push('/signIn');
            }, 2000);
        }
    }

    render() {
        const { searching } = this.state;
        const { header, auth } = this.props;
        const hotList = header.hotSearch.map((item, key) => {
            return (
                <a href="#" key={key}>{item}</a>
            )
        })
        return (
            <header className="jianshu-header">
                <div className="left">
                    <a href="#"><img className="logo" src="/images/logo/logo.png"/></a>
                </div>
                <div className="center">
                    <a className="home" href="#"><Icon type="compass" />首页</a>
                    <a className="download" href="#"><Icon type="cloud-download" />下载App</a>
                    <div className="search"><Search searching={searching} hotList={hotList} title="热门搜索"  onFocus={this.onFocus} onBlur={this.onBlur}/></div>
                </div>
                {
                    auth.valid ? (<div>登录之后</div>) :
                    (<Unauth onSignIn={this.onSignIn} onSignUp={this.onSignUp} onWrite={this.onWrite}/>)
                }
            </header>
        )
    }
}