
import React, { Component } from 'react';
import '../styles/style.less';
import { Icon } from 'antd';
import { view as HotSearch } from '../../hotSearch';
import { view as Unauth } from '../../unauth';
import { view as Auth } from '../../auth';
import { message } from 'antd';
import PropTypes from 'prop-types';

export default class Header extends Component {
	static propTypes = {
		signIn: PropTypes.object
	}

	static defaultTypes = {
		signIn: {}
	}

    constructor(props) {
        super(props);
        this.state = {
            searching: false
        }
    }

    render() {
        const { signIn } = this.props;
        return (
            <header className="jianshu-header">
                <div className="left">
                    <a href="#"><img className="logo" src="/images/logo/logo.png"/></a>
                </div>
                <div className="center">
                    <a className="home" href="#"><Icon type="compass" />首页</a>
                    <a className="download" href="#"><Icon type="cloud-download" />下载</a>
                    <div className="search"><HotSearch /></div>
                </div>
                {
                    signIn.status === 0 ? 
                    <Auth /> :
                    <Unauth />
                }
            </header>
        )
    }
}
