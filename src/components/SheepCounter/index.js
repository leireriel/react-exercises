import React from 'react';
import './SheepCounter.scss';
import Sheep from './components/Sheep';
import SheepImg from './images/sheep.png';

class SheepCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      //img
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      counter: this.state.counter + 1,
    });
    return (
      this.img =
      <Sheep
        link={SheepImg}
      />
    );
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
        {this.img}
      </React.Fragment>
    );
  }
}

export default SheepCounter;