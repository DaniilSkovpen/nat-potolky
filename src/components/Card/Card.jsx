import React from 'react'
import CardItem from './CardItem';
import mod from './Card.module.css'

function Card() {
 return (
  <div className={mod.cards}>
   <h1>Ознайомитись з наявними стелями</h1>
   <div className={mod.cards__container}>
    <div className={mod.cards__wrapper}>
     <div className={mod.cards__items}>
      <CardItem src='images/img5.jpg'
       text='Наявні стелі'
       path='/types'
      />
     </div>
    </div>
   </div>
  </div>
 )
}

export default Card;
