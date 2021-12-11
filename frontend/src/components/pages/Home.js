import React from 'react';
import '../../App.css';
import Poster from '../Poster';
import Card from '../Card';
import Search from '../Search';
import { useState } from 'react';
import { Link } from 'react-router-dom';


function Home() {


  return (
    <>
      <Poster />
      
    
            
      <Card />
        <a href='https://www.youtube.com/playlist?list=PLI5i7pWbEmk-metn38dNJ1e4zDUSYzllb'>
          <div className='center'>
            <button className='homebutton'>Tutorial Videos</button>
          </div>
        </a>
        <div className='center'>
          <br></br>
          <br></br>
        </div>
        <Link to='/Recipes'>
          <div className='center'>
            <button className='homebutton'>All Recipes</button>
          </div>
        </Link>
        <div className='center'>
          <br></br>
          <br></br>
        </div>
        <div className='center'>
        <Link to='/Search'>
          <button className='homebutton'>Look for a Recipe</button>
        </Link>
      </div>
      <div className='center'>
          <br></br>
          <br></br>
        </div>
      <div className='center'>
        <Link to='/ingredient'>
          <button className='homebutton'>Look for Ingredients and Substitution</button>
        </Link>
      </div>
      <div className='center'>
          <br></br>
          <br></br>
        </div>

    </>
  );
}

export default Home;