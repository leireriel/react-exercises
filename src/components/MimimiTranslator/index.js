import React from 'react';
import TextInput from './components/TextInput';
import Translator from './components/Translator';
import './MimimiTranslator.scss';

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
      <div className="wrapper__mimimi">
        <TextInput action={this.handleInputChange} />
        <Translator text={this.state.text} />
      </div>
    );
  }
}

export default MimimiTranslator;