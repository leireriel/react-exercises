import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date(),
    };
    this.updateClock = this.updateClock.bind(this);
  }

  componentDidMount() {
    this.setInt = setInterval(this.updateClock, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.setInt);
  }
  
  updateClock() {
    this.setState({
      time: new Date(),
    });
  }

  render() {
    return (
      <React.Fragment>
        <span className="hours">
          {this.state.time.getHours()}
          <small>hours</small>
        </span>
        <span> : </span>
        <span className="minutes">
        {this.state.time.getMinutes()}
        <small>mins</small>
        </span>
        <span> : </span>
        <span className="seconds">
        {this.state.time.getSeconds()}
        <small>secs</small>        
        </span>
      </React.Fragment>
    );
  }
}

export default Clock;