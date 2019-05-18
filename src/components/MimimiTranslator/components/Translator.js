import React from 'react';

class Translator extends React.Component {
  replaceVowels({ text }) {
    return text.replace(/[aeiouáéíóú]/gi, 'i');
  }

  render() {
    const { text } = this.props;
    return (
      <p className="translator__parragraph">{this.replaceVowels({ text })}</p>
    );
  }
}

export default Translator;