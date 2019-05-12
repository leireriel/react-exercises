import React from 'react';

class Sheep extends React.Component {
  render() {
    return (
      <img
        className="img"
        src={this.props.link}
        alt="A sheep"
      />
    )
  }
}
export default Sheep;