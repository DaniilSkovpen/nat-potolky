import React from 'react'
import { NavLink } from 'react-router-dom';
import mod from './Stelya.module.css';

function Stelya3() {
 return (
  <div>
   <NavLink to="/types" style={{ cursor: 'pointer' }}><button onClick={() => { }}>Назад</button></NavLink>
   <figure className={mod.card__item__pic_wrap}>
    <img className={mod.img} scr='https://remtion.com.ua/wp-content/uploads/2021/08/natiazhnye-potolky-2.jpg' />
   </figure>
  </div>
 )
}

export default Stelya3;
