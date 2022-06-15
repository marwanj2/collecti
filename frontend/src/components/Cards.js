import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import img from './left-arrow.png'
import img2 from './right-arrow.png'

function Cards() {
  return (
    <div className='cards'>

      <div className='cards__container'>
        <div className='cards__wrapper'>

          <ul className='cards__items'>
            <li className='card1'>
            <CardItem
              text='Step 1'
              para='collecter les déchets ménagers'
              label='Mystery'
              path='/services'
            />

            </li>
            <CardItem
              src='images/img-4.jpg'
              text='Step 2'
              para='Amenez-la au centre'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Step 3'
              para='Vendez-le et convertissez-le en espèces'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
          <ul >

              <img src={img} alt='left-arrow' className='img1'/>
              <img src={img2} alt='right-arrow'/>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
