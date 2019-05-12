import React from 'react';
import './SheepCounter.scss';

class SheepCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      counter: this.state.counter + 1,
    });
  }

  render() {
    return (
      <React.Fragment>
        <h3 className="title">Push button counter</h3>
        <div className="wrapper">
          <h4 className="counter">{this.state.counter}</h4>
          <button
            className="button"
            onClick={this.handleClick}>
            {`Count :)`}
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default SheepCounter;