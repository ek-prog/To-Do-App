import React from "react";
import "./clock.css";

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};

    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    };

    componentWillUnmount() {
        clearInterval(this.timerID);
    };

    tick() {
        this.setState({
            date: new Date()
        });
    };

    render() {
        return (
            <div>
                <h3 className="clock-location"> {this.state.date.toLocaleTimeString()}</h3>
            </div>
        );
    }
}

export default Clock;