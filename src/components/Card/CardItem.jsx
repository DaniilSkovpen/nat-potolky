import React from "react";
import { NavLink } from "react-router-dom";
import mod from './Card.module.css'

function CardItem(props) {
  return (
    <>
      <div className={mod.cards__item}>
        <NavLink className={mod.cards__item__link} to={props.path}>
          <figure className={mod.card__item__pic_wrap}>
            <img src={props.src} alt="Cellar Image" />
          </figure>
          <div className={mod.cards__item__info}>
            <h5 className={mod.cards__item__text}>
              {props.text}</h5>
          </div>
        </NavLink>
      </div>
    </>
  )
}

export default CardItem;
