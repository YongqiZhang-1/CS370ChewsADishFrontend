import React from 'react';
import './RandomBackground.css';

function RandomBackground() {
    const random = Math.ceil(Math.random()*6)
    const src = `/images/recipeBG${random}.jpg`
    
  return (
    <div className='signup-bg'>
      <img src={src} />
    </div>
  );
}

export default RandomBackground;