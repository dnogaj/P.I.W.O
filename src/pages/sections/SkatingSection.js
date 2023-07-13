import React from 'react';
import "../TextArea.css";
import '../../App.css';
import '../../components/Cards.css';
import './SkatingSection.css';
import CardItem from '../../components/CardItem';
import Form from '../Form';

function SkatingSection() {
  return (
    <div>
      <div className='skate-container'>
        <image src="/image/ski.jpg"
        autoPlay loop muted />
        <h1>Rolki</h1>
        <p className='p-about'>Looks like skiing, but hurts more when making mistake &#129299;</p>
      </div> 
        <div className='text-area-container'>
          <div className="cards">
            <div className="cards__container">
                <div className="cards__wrapper">                    
                    <ul className="cards__items">
                        <CardItem 
                            src='/images/tauron.jpg'
                            text='W sezonie letnim odbywają się treningi grupy rolkarskiej w okolicach Tauron Areny w Krakowie.'
                            label='Zajęcia - Tauron Arena'
                            path=''
                        />
                    </ul>
                </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default SkatingSection