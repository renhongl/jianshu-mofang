import React from 'react';
import { Carousel } from 'antd';
import './style.less';

class CarouselComp extends React.Component{
    render(){
        return(
            <Carousel autoplay>
            <div><img src="./images/carousel/1.jpg"/></div>
            <div><img src="./images/carousel/2.jpg"/></div>
            <div><img src="./images/carousel/3.jpg"/></div>
            <div><img src="./images/carousel/4.png"/></div>
          </Carousel>
        )
    }
}

export  default CarouselComp;
