import React from 'react';
import Counter from './components/Counter';
import SheepList from './components/SheepList';
import './SheepCounter.scss';

class SheepCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      all: {
        counter: 0,
        img: []
      }
    };
    this.img = require('./images/sheep.png');
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState, props) => {
      const newAll = { ...prevState.all };
      newAll.counter++;
      newAll.img.push(this.img);
      return { all: newAll };
    });
  }

  render() {
    const { counter, img } = this.state.all;
    return (
      <React.Fragment >
        <Counter counter={counter} action={this.handleClick}/>
        <SheepList img={img}/>
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