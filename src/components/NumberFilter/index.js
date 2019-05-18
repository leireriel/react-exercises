import React from "react";

class NumberFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      number: 0,
      even: false
    }
    this.handleInput = this.handleInput.bind(this);
    this.handleEven = this.handleEven.bind(this);
  }

  handleInput(event) {
    const trigger = event.currentTarget.value;
    this.setState({ number: trigger })
  }

  handleEven(event) {
    const trigger = event.currentTarget.checked;
    this.setState({ even: trigger })
  }

  render() {
    return (
      <React.Fragment>
        <h3>Quiero los números mayores de...</h3>
        <input
          type="number"
          onChange={this.handleInput}
        />
        <label
          htmlFor="even">
          <input
            type="checkbox"
            onClick={this.handleEven}
          />
          Sólo los pares
          </label>
        <ul>
          {this.state.data
            .filter(item => this.state.number < item)
            .filter(item => this.state.even === true ? item % 2 === 0 : item)
            .map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
        </ul>
      </React.Fragment>
    );
  }
}
export default NumberFilter;