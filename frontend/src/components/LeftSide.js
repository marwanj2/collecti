import React from 'react'
import './Leftside.css'
import { Button } from './Button'
import '../App.css'
const LeftSide = () => {
  return (
    <div className='hero-container'>
        <h1>Sauvez votre environnement et gagnez de l'argent</h1>
      <h3>qu'attendez-vous?</h3>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          COMMENCER
        </Button>
        </div>
    </div>
  )
}

export default LeftSide