import React from 'react';

class Translator extends React.Component {
  replaceVowels({ text }) {
    return text.replace(/[aeiou]/gi, 'i');
  }

  render() {
    const { text } = this.props;
    return (
      <p>{this.replaceVowels({ text })}</p>
    );
  }
}

export default Translator;