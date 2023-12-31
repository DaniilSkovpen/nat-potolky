import React from 'react'
import mod from './HeroSection.module.css'

function HeroSection() {
 return (
  <div className={mod.heroContainer}>
   <h1 className={mod.h1}>Про компанію</h1>
   <p className={mod.p}>Головний принцип компанії - це задоволення потреб клієнтів. Компанія пропонує широкий вибір кольорів, текстур і дизайнів натяжних стель, що дозволяє кожному клієнту знайти оптимальне рішення для свого простору.

    Основні переваги компанії включають:

    <ol type='1' className={mod.ol}>
     <li className={mod.li}>Якість матеріалів: Компанія використовує тільки високоякісні екологічно чисті матеріали, що забезпечують тривалу службу і безпеку для здоров'я.</li>

     <li className={mod.li}>Професійність монтажу: Компанія співпрацює тільки з досвідченими майстрами, які гарантують якісний монтаж натяжних стель та дотримання усіх технічних вимог.</li>

     <li className={mod.li}>Індивідуальний підхід: Компанія враховує унікальні потреби кожного клієнта, пропонуючи індивідуальний дизайн та рішення для кожного інтер'єру.</li>

     <li className={mod.li}>Гнучкі ціни та система знижок: Компанія пропонує конкурентні ціни на свої послуги, а також систему знижок для постійних клієнтів.</li>
    </ol>
   </p>
  </div>
 )
}

export default HeroSection;
