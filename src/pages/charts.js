import React,{Component} from "react";
import {view as LineChart} from "../services/lineChart";

export default class Echarts extends Component{
    constructor(props){
        super(props);
        this.state = {
            xAxis: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            data: [],
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState(
                {
                    xAxis: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                    data: [820, 932, 901, 934, 1290, 1330, 1320],
                }
            )
        }, 2000);
    }

    render(){
        return(
            <section>
                <LineChart xAxis={this.state.xAxis} data={this.state.data}/>
            </section>
        )
    }


}