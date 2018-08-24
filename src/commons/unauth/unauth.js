
import React from 'react';
import { Icon } from 'antd';
import './style.less';

export default ({onSignIn, onSignUp, onWrite}) => (
    <div className="unauth">
        <Icon type="setting" />
        <span className="signin" onClick={onSignIn}>登录</span>
        <span className="register" onClick={onSignUp}>注册</span>
        <span className="write" onClick={onWrite}><Icon type="edit" />写文章</span>
    </div>
)