import React from 'react';

class OnionHater extends React.Component {
  constructor(props) {
    super(props);
    this.backgroundclass = 'background-default';
    this.hateAlert = this.hateAlert.bind(this);
  }

  hateAlert(event) {
    const trigger = event.target.value;
    if (trigger.includes('cebolla')) {
      this.backgroundclass = 'background-red';
    } else {
      this.backgroundclass = 'background-default';
    }
    this.forceUpdate();
  }

  render() {
    return (
      <React.Fragment>
        <div className={`background ${this.backgroundclass}`}>
          <h1 className="title">¡No escribas <em>cebolla</em>!</h1>
          <img className="img" src="onionKawaii.jpg" alt="Onion" />
          <textarea className="textarea" onKeyUp={this.hateAlert}></textarea>
        </div>
      </React.Fragment>
    );
  }
}

export default OnionHater;
