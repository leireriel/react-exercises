import React from 'react';
import './OnionHater.scss';
import Onion from './images/onionKawaii.jpg';

class OnionHater extends React.Component {
  constructor(props) {
    super(props);
    this.hateAlert = this.hateAlert.bind(this);
    this.isHating = false;
  }

  hateAlert(event) {
    const trigger = event.currentTarget.value;
    const triggerLowerCase =  trigger.toLowerCase();
    if (triggerLowerCase.includes('cebolla')) {
      this.isHating = true;
    } else {
      this.isHating = false;
    }
    this.forceUpdate();
  }

  render() {
    return (
      <React.Fragment>
        <div className={`background ${this.isHating === true ? 'background-red':''}`}>
          <h3 className="title">¡No escribas <em>cebolla</em>!</h3>
          <img className="img" src={Onion} alt="Onion" />
          <textarea className="textarea" placeholder="Hola, me llamo..." onKeyUp={this.hateAlert}></textarea>
        </div>
      </React.Fragment>
    );
  }
}

export default OnionHater;
