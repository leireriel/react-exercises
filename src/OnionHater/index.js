import React from 'react';

class OnionHater extends React.Component {
  hateAlert(event) {
    const trigger = event.target.value;
    if (trigger.includes('cebolla')) {
      alert('ODIO LA CEBOLLA');
    }
  }
  render() {
    return (
      <textarea className="textarea" onKeyUp={this.hateAlert}></textarea>
    );
  }
}

export default OnionHater;
