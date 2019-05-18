import React from 'react';
import './Card.scss';

class Card extends React.Component {
  render() {
    const { title, theme, language } = this.props.state;
    return (
      title && theme && language === '' ? null :
        <div className="card">
          <h3>{title}</h3>
          <p>{theme}</p>
          <p>{language}</p>
        </div>
    );
  }
}

export default Card;