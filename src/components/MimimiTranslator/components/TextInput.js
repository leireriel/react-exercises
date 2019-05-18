import React from 'react';

class TextInput extends React.Component {
  render() {
    const {action} = this.props;
    return (
      <textarea 
      name="text" 
      id="0" 
      cols="30" 
      rows="3"
      placeholder="¿Cómo te llamas?"
      onChange={action}>
      </textarea>
    );
  }
}

export default TextInput;