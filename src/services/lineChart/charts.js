import React from 'react';
import ReactEcharts from 'echarts-for-react';
import {view as LineChart} from "../../commons/charts";

export default class Charts extends React.Component{
    constructor(props){
         super(props);
         this.state={
             option:{}
         };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            option: {
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: nextProps.xAxis
                },
                yAxis: {
                    type: 'value'
                },
                series: [{
                    data: nextProps.data,
                    type: 'line',
                    areaStyle: {}
                }]
            }
        });
    }
    

    render(){
        return(
            <LineChart
            option={this.state.option}
            />
        )
    }
}

 