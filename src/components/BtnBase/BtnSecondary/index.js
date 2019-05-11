import React from 'react';
import style from './BtnSecondary.module.scss';

class BtnPrimary extends React.Component {
  render() {
    return (
      <button className={style.btnSecondary}>SECONDARY BUTTON</button>
    );
  }
}

export default BtnPrimary;