import React from 'react';

class InputMirror extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
    this.HandleInput = this.HandleInput.bind(this);
  }

  HandleInput(event) {
    const trigger = event.currentTarget.value;
    this.setState({
      text: trigger
    });
  }

  render() {
    return(
      <div>
        <input type="text" onChange={this.HandleInput}/>
        <p>{this.state.text}</p>
      </div>
    );
  }
}

export default InputMirror;