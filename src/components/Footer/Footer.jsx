import React from 'react';
import mod from './Footer.module.css';

function Footer() {
 return (
  <div className={mod.footerContainer}>
   <h1 className={mod.h1Style}>Конаткти</h1>
   <p className={mod.pStyle}>Телефон:</p>
  </div>
 )
}

export default Footer;
