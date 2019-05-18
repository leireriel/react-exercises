import React from 'react';

class Counter extends React.Component {
  render() {
    const {counter, action} = this.props;
    return (
      <React.Fragment>
        <h3 className="title">Push button counter</h3>
        <div className="wrapper">
          <h4 className="counter">{counter}</h4>
          <button
            className="button"
            onClick={action}>
            {`Count :)`}
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default Counter;