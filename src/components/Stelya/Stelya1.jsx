import React from 'react'
import { NavLink } from 'react-router-dom';
import mod from './Stelya.module.css';

function Stelya1() {
 return (
  <div>
   <NavLink to="/types" style={{ cursor: 'pointer' }}><button onClick={() => { }}>Назад</button></NavLink>
   <figure className={mod.card__item__pic_wrap}>
    <img className={mod.img} scr='https://static.tildacdn.com/tild3132-6439-4666-b936-383663636564/beluy-potopok.jpeg' />
   </figure>
  </div>
 )
}

export default Stelya1;
