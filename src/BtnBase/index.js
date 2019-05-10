import React from 'react';
import BtnPrimary from './BtnPrimary';
import BtnSecondary from './BtnSecondary';
import BtnOutline from './BtnOutline';

class BtnBase extends React.Component {
  render() {
    return (
      <React.Fragment>
        <button className="btn__base">COMMON BUTTON</button>
        <BtnPrimary />
        <BtnSecondary />
        <BtnOutline />
      </React.Fragment>
    );
  }
}

export default BtnBase;