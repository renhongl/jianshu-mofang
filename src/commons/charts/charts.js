import React from 'react';
import ReactEcharts from 'echarts-for-react';

export default class Charts extends React.Component{

    render(){
        return(
            <ReactEcharts
            option={this.props.option}
            />
        )
    }
}

 