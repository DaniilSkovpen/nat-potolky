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
      <CardsItem src='https://static.tildacdn.com/tild3132-6439-4666-b936-383663636564/beluy-potopok.jpeg'
       text='Cтеля 1'
       path="/stelya1"
      />
     </ul>
     <ul className={mod.cards__items}>
      <CardsItem src='https://nova-stelya.kyiv.ua/media/p/16/mnogourovnevie.jpg'
       text='Стеля 2'
       path="/stelya2"
      />
     </ul>
     <ul className={mod.cards__items}>
      <CardsItem src='https://remtion.com.ua/wp-content/uploads/2021/08/natiazhnye-potolky-2.jpg'
       text='Стеля 3'
       path='/stelya3'
      />
     </ul>
    </div>
   </div>
  </div>
 )
}

export default Cards;
