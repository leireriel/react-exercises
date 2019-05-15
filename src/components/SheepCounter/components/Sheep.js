import React from 'react';
import SheepImg from '../images/sheep.png';

class Sheep extends React.Component {
  render() {
    const {key} = this.props;
    return (
      <img
        className="sheep__img"
        src={SheepImg}
        alt="A sheep"
        key={key}
      />
    )
  }
}
export default Sheep;