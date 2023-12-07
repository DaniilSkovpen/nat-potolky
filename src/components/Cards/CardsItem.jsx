import React from "react";
import { NavLink } from "react-router-dom";
import mod from './Cards.module.css'

function CardsItem(props) {
 return (
  <>
   <li className={mod.cards__item}>
    <NavLink className={mod.cards__item__link} to={props.path}>
     <figure className={mod.card__item__pic_wrap}>
      <img src={props.src} alt="Ceiling Image" className={mod.cards__item__img} />
     </figure>
     <div className={mod.cards__item__info}>
      <h5 className={mod.cards__item__text}>
       {props.text}
      </h5>
     </div>
    </NavLink>
   </li>
  </>
 )
}

export default CardsItem;
