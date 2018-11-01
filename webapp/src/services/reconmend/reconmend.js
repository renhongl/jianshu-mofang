import React,  {Component}from "react"; 
import "./style.less";
import axios from "axios"; 

export default class Reconmend extends Component {
    constructor(props) {
        super(props); 

        this.state =  {
            name:[]
        }
    }

    componentDidMount() {
        axios.get('/mockData/reconmend.json').then(response =>  {
            this.setState( {
                name:response.data
            })
        }).catch(e =>  {
            console.log(e); 
        })
    }

    renderItem(item) {
        let list =[];
        for (let value in item) {
        list.push(< div > {item[value]} ></div > )
        }
        return list;
        
        }

    

    render() {
        return(

            <div className="reconmend-container">
           { this.renderItem (this.state.name)}
            </div>
        )
    }
}