import React, {Component} from "react";

import "./toggle-button.css"
export default class ToggleButton extends Component{
    constructor(props) {
        super(props);

        this.state = {
            isToggleOn: true,
            count: 0
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleClick2 = this.handleClick2.bind(this);
        this.handleClick3 = this.handleClick3.bind(this);
    }
    handleClick(){
        this.setState(prevState =>({
           isToggleOn: !prevState.isToggleOn
        }));
    }
    handleClick2 ()  {
        this.setState({
            count: this.state.count - 1
        });
    }
    handleClick3 ()  {
        this.setState({
            count: this.state.count + 1
        });
    }
    render() {
        return (
            <div>
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ?  "On" : "Off"}
            </button>
                <br />
                <div className="d-flex toggle-btn-style">
            <button
                className="btn btn-info "
                onClick={this.handleClick2}>-</button>
                <p className="toggle-btn-style">{this.state.count}</p>
             <button
                 className="btn btn-info "
                 onClick={this.handleClick3}>+</button>
                </div>
            </div>
        );
    };
};