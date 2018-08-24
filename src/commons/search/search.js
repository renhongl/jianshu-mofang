


import React from 'react';
import './style.less';
import { Icon } from 'antd';

export default ({searching, hotList, title, onFocus, onBlur}) => (
    <div className="search-container">
        <input className={searching ? 'search searching' : 'search'} placeholder="搜索" onFocus={onFocus} onBlur={onBlur}/>
        <a href="#" className={searching ? 'search-icon focus' : 'search-icon'}><Icon type="search" /></a>
        <div className={searching ? 'hot show' : 'hot'}>
            <p>{title}</p>
            <div>{hotList}</div>
        </div>
    </div>
)