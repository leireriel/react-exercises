import React from 'react';
import style from './BtnPrimary.module.scss';

class BtnPrimary extends React.Component {
  render() {
    return (
      <button className={style.btnPrimary}>PRIMARY BUTTON</button>
    );
  }
}

export default BtnPrimary;