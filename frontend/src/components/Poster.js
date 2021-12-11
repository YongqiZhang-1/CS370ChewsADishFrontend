import React from 'react';
import '../App.css';
import { Button } from './Button';
import './Poster.css';

function Poster() {
  return (
    <div className='poster-container'>
      <video src='/videos/Poster.mp4' autoPlay loop muted />
      <p></p>
      <div className='poster-btns'>
      </div>
    </div>
  );
}

export default Poster;