import React from 'react';
import { Carousel } from 'antd';
import './style.less';

class hello extends React.Component{
    render(){
        return(
            <Carousel autoplay className = "helloworld">
            <div><img src="./images/carousel/1.jpg"/></div>
            <div><img src="./images/carousel/2.jpg"/></div>
            <div><img src="./images/carousel/3.jpg"/></div>
            <div><img src="./images/carousel/4.png"/></div>
          </Carousel>
        )
    }
}

export  default hello;
