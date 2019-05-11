import React from 'react';
import BtnPrimary from './BtnPrimary';
import BtnSecondary from './BtnSecondary';
import BtnOutline from './BtnOutline';
import style from './BtnBase.module.scss';

class BtnBase extends React.Component {
  render() {
    return (
      <React.Fragment>
        <button className={style.btnBase}>COMMON BUTTON</button>
        <BtnPrimary />
        <BtnSecondary />
        <BtnOutline />
      </React.Fragment>
    );
  }
}

export default BtnBase;