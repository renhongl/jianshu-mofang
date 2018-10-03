
import * as React from "react";
import Markdown from 'react-remarkable';
import '../styles/style.less';


export default class Writing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
    }

    onChange = (e) => {
        this.setState({
            value: e.target.value
        });
    }

    render() {
        return (
            <div className="writing">
                <textarea className="textarea" onChange={this.onChange} />
                <div className="preview">
                    <Markdown source={this.state.value} />
                </div>
            </div>
        );
    }
}