import React from 'react';
import ReactEcharts from 'echarts-for-react';
import {view as BarChart} from "../../commons/charts";

export default class Charts extends React.Component{
    constructor(props){
         super(props);
         this.state={
             option:{
            }
         };
    }

    componentWillReceiveProps(newPorps){
        this.setState({
            option:{
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: newPorps.xAxis
                },
                yAxis: {
                    type: 'value'
                },
                series: [{
                    data: newPorps.data,
                    type: 'bar',
                    areaStyle: {}
                }]
            }  
        })
    }
   

    render(){
        return(
            <BarChart
            option={this.state.option}
            />
        )
    }
}

 