import React from 'react';
import './Card.css';
import CardItem from './Carditem';
import { Link } from 'react-router-dom';

function PopularCards() {
  return (
    <div className='cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='/images/r.jpg'
              text='The dish itself is a combination of a fragrant sweetened vinegar sauce characteristic of Shandong’s Jinan style of cooking, with a crisp-skinned fried chicken, more common in Cantonese cooking.'
              label='Chinese'
              path='/Recipe/6199b0739443ef0d4123ac60'
            />
            <CardItem
              src='/images/ss.jpg'
              text='A Chinese appetizer that began as a traditional food served to celebrate the arrival of the Chinese New Year, which occurs during the spring season.'
              label='Chinese'
              path='/Recipe/6199b0739443ef0d4123ac62'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='/images/teaduck.png'
              text='Tea-smoked duck is a classic Chinese dish, and it normally involves an entire duck, lots of time, and at least three different cooking preparations, much like Peking duck.'
              label='Chinese'
              path='/Recipe/6199b0739443ef0d4123ac81'
            />
            <CardItem
              src='/images/ac.jpeg'
              text='Korean-style short ribs can be found at most Asian markets. The cut, also known as "flanken," refers to a strip of beef cut across the bone from the chuck end of the short ribs.'
              label='Korean'
              path='/Recipe/6199b0739443ef0d4123ac6b'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='https://imagesvc.meredithcorp.io/v3/mm/image?q=85&c=sc&poi=face&w=2212&h=1158&url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F3663861.jpg'
              text='Make this iconic and delicious Japanese Carrot Ginger Salad Dressing Recipe in less than 10 minutes! Inspired by Japanese-American steakhouses, the sweet and tangy flavors make the perfect pairing to ice cold iceberg lettuce!'
              label='Japanese'
              path='/Recipe/6199b0739443ef0d4123ac71'
            />
            <CardItem
              src='/images/i.png'
              text="'While slowly fermented cabbage and pungent garlic are the ingredients most people associate with kimchi, there are dozens and dozens of other versions of Korea's national dish, featuring all manner of vegetables, such as these quickly pickled cucumbers with just a trace of garlic."
              label='Korean'
              path='/Recipe/6199b0739443ef0d4123ac58'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default PopularCards;