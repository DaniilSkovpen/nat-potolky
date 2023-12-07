import React from 'react'
import { NavLink } from 'react-router-dom';
import mod from './Stelya.module.css';

function Stelya2() {
 return (
  <div>
   <NavLink to="/types" style={{ cursor: 'pointer' }}><button onClick={() => { }}>Назад</button></NavLink>
   <figure className={mod.card__item__pic_wrap}>
    <img className={mod.img} scr='https://nova-stelya.kyiv.ua/media/p/16/mnogourovnevie.jpg' />
   </figure>
  </div>
 )
}

export default Stelya2;
