
import React, { Component } from 'react';
import '../styles/style.less';
import { Icon } from 'antd';
import PropTypes from 'prop-types';

export default class Header extends Component {
	static propTypes = {
	}

	static defaultTypes = {
	}

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
        const { hotSearch } = this.props;
        const hotList = hotSearch.items.map((item, key) => {
            return (
                <a href="#" key={key}>{item}</a>
            )
        })
        return (
            <div className="search-container">
                <input className={searching ? 'search-input searching' : 'search-input'} placeholder="搜索" onFocus={this.onFocus} onBlur={this.onBlur}/>
                <a href="#" className={searching ? 'search-icon focus' : 'search-icon'}><Icon type="search" /></a>
                <div className={searching ? 'hot show' : 'hot'}>
                    <p>热门搜索</p>
                    <div>{hotList}</div>
                </div>
            </div>
        )
    }
}
