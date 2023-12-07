import React from 'react'
import { NavLink } from 'react-router-dom';

function Stelya2() {
 return (
  <div>
   <NavLink to="/types" style={{ cursor: 'pointer' }}><button onClick={() => { }}>Назад</button></NavLink>
   <img scr='https://nova-stelya.kyiv.ua/media/p/16/mnogourovnevie.jpg' />
  </div>
 )
}

export default Stelya2;
