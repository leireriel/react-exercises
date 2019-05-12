import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date(),
    };
    this.updateClock = this.updateClock.bind(this);
    setInterval(this.updateClock, 1000);
  }

  updateClock() {
    this.setState({
      time: new Date(),
    });
    console.log(this.state.time);
  }

  render() {
    return (
      // <p>{this.state.time}</p>
      <div>w</div>
    );
  }
}

export default Clock;