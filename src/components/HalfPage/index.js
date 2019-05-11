import React from 'react';
import './HalfPage.scss';

class HalfPage extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="half-page half-page-left">
          {this.props.children}
          {this.props.children}
        </div>
        <div className="half-page half-page-right">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default HalfPage;