import React from 'react';
import TextInput from './components/TextInput';
import Translator from './components/Translator';

class MimimiTranslator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const trigger = event.currentTarget.value;
    this.setState({
      text: trigger,
    });
  }

  render() {
    return (
      <React.Fragment>
        <TextInput action={this.handleInputChange} />
        <Translator text={this.state.text} />
      </React.Fragment>
    );
  }
}

export default MimimiTranslator;