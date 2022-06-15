import React from 'react';
import '../App.css';
import { Button } from './Button';
import Cards from './Cards';
import './HeroSection.css';
import LeftSide from './LeftSide';
import RightSide from './RightSide';
function HeroSection() {
  return (
    <div className='hero-container'>
        <div className='rowC'>
        <LeftSide/>
        <RightSide/>
      </div>
        <Cards />
    </div>
  );
}

export default HeroSection;
