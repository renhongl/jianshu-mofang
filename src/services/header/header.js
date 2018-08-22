
import React, { Component } from 'react';
import './style.less';
import { Icon } from 'antd';
import { view as Search } from '../../commons/search';

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

    render() {
        const { searching } = this.state;
        const { header } = this.props;
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
                <div className="unauth">
                    <Icon type="setting" />
                    <span className="signin">登录</span>
                    <span className="register">注册</span>
                    <span className="write"><Icon type="edit" />写文章</span>
                </div>
            </header>
        )
    }
}