import React from 'react';
import './SheepCounter.scss';
import Sheep from './components/Sheep';

class SheepCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      all: {
        counter: 0,
        img: []
      }
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState, props) => {
      const newAll = { ...prevState.all };
      newAll.counter++;
      newAll.img.push(<Sheep key={newAll.counter - 1} />);
      console.log(newAll.counter - 1);
      return { all: newAll };
    });
  }

  render() {
    const { counter, img } = this.state.all;
    return (
      <React.Fragment >
        <h3 className="title">Push button counter</h3>
        <div className="wrapper">
          <h4 className="counter">{counter}</h4>
          <button
            className="button"
            onClick={this.handleClick}>
            {`Count :)`}
          </button>
        </div>
        <ul className="image__list">
          {img.map((item, index) => {
            return <li key={index}>{item}</li>
          })}
        </ul>
      </React.Fragment >
    );
  }
}

export default SheepCounter;

//How to get and array of a number(counter)
// Array.from(new Array(counter), (val, index) => index + 1)
// .map(i => (
//     <Sheep key={i} />
//   )
// )