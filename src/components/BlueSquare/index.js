import React from 'react';
import './BlueSquare.scss';

class BlueSquare extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      background: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(
      (prevState, props) => {
        if (prevState.background === false) {
          return {
            background: true
          }
        } else {
          return {
            background: false
          }
        }
      }
    );
  }

  render() {
    return (
      <div 
      className={`wrapper-square ${this.state.background === true ? 'background-red' : 'background-blue'}`} 
      onClick={this.handleClick}
      ></div>
    );

  }
}

export default BlueSquare;