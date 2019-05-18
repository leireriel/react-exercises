import React from 'react';

class SheepList extends React.Component {
  render() {
    const {img} = this.props;
    return (
      <ul className="image__list">
        {img.map((item, index) => {
          return <li key={index}>
            <img
              className="sheep__img"
              src={item}
              alt="A sheep"
            />
          </li>
        })}
      </ul>
    );
  }
}

export default SheepList;