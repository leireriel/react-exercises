import React from 'react';
import Onion from './onionKawaii.jpg';

class OnionHater extends React.Component {
  constructor(props) {
    super(props);
    this.hateAlert = this.hateAlert.bind(this);
    this.backgroundClass = 'background-default';
  }

  hateAlert(event) {
    const trigger = event.target.value;
    const triggerLowerCase =  trigger.toLowerCase();
    if (triggerLowerCase.includes('cebolla')) {
      this.backgroundClass = 'background-red';
    } else {
      this.backgroundClass = 'background-default';
    }
    this.forceUpdate();
  }

  render() {
    return (
      <React.Fragment>
        <div className={`background ${this.backgroundClass}`}>
          <h1 className="title">¡No escribas <em>cebolla</em>!</h1>
          <img className="img" src={Onion} alt="Onion" />
          <textarea className="textarea" onKeyUp={this.hateAlert}></textarea>
        </div>
      </React.Fragment>
    );
  }
}

export default OnionHater;
