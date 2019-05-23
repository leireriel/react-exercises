import React from 'react';
import './Card.scss';

class Card extends React.Component {

  
  render() {
    const { title, theme, language } = this.props.state;
    return (
      (title || theme || language !== null) &&
        <div className="card-films">
          <h3 className="title__movie-films">{title}</h3>
          <p className="theme__movie-films">{theme}</p>
          <p className="language__movie-films">{language}</p>
        </div>
    );
  }
}

export default Card;