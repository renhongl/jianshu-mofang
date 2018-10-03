

import React, { Component } from 'react';
import { Icon, message } from 'antd';
import '../styles/style.less';



export default class Auth extends Component {

	state = {
	
	}

    constructor(props) {
        super(props);
    }

    onWrite = () => {
        this.props.history.push('/writing');
    }


    render() {
        return (
            <section className="auth">
                <span>Aa</span>
                <span className="write" onClick={this.onWrite}><Icon type="edit" />写文章</span>
           </section>
        )
    }
}


