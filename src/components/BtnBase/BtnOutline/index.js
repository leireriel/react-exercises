import React from 'react';
import style from './BtnOutline.module.scss';

class BtnPrimary extends React.Component {
  render() {
    return (
      <button className={style.btnOutline}>OUTLINE BUTTON</button>
    );
  }
}

export default BtnPrimary;