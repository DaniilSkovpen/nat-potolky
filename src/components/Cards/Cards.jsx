import React from 'react'
import mod from './Cards.module.css'
import CardsItem from './CardsItem';

function Cards() {
 return (
  <div className={mod.cards}>
   <h1>Наявні стелі</h1>
   <div className={mod.cards__container}>
    <div className={mod.cards__wrapper}>
     <ul className={mod.cards__items}>
      <CardsItem src='images/img1.jpeg'
       text='123'
      />
     </ul>
     <ul className={mod.cards__items}>
      <CardsItem src='images/img3.jpg'
       text='123'
      />
     </ul>
     <ul className={mod.cards__items}>
      <CardsItem src='images/img4.jpeg'
       text='123'
      />
     </ul>
    </div>
   </div>
  </div>
 )
}

export default Cards;