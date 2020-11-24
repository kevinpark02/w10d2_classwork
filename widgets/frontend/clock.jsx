import React from 'react';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: new Date()
        };

        this.tick = this.tick.bind(this);
    }

    componentDidMount() {
        this.interval = setInterval(this.tick, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    tick() {
        this.setState({time: new Date()});
    }

    render(){
        let hour = this.state.time.getHours();
        let minute = this.state.time.getMinutes();
        let second = this.state.time.getSeconds();

        return(
            <div>
                <h1>Clock</h1>
                <p>Time: {hour}:{minute}:{second} PDT</p>
                <p>Date: {this.state.time.toDateString()}</p>
            </div>
        )
    }
}

export default Clock;