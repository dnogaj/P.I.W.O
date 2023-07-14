import React from 'react';
import "../TextArea.css";
import '../../App.css';
import CardItem from "../../components/CardItem";
import '../../components/Cards.css';
import './SwimmingSection.css';

function SwimmingSection() {
  return (
    <div>
      <div className='swim-container'>
        {/* <image src="/image/ski.jpg"
        autoPlay loop muted /> */}
        <h1>Swimming</h1>
        <p className='p-about'>"I can only control my own performance." ~ Michael Phelps &#128373;</p>
      </div> 
        <div className='text-area-container'>
          <div className="cards">
            <div className="cards__container">
                <div className="cards__wrapper">                    
                    <ul className="cards__items">
                        <CardItem 
                            src='/images/basen.jpg'
                            text='Zajęcia odbywają się dwa razy w tygodniu na basenie w Mistrzejowicach.'
                            label='Regularne Zajęcia Pływackie'
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

export default SwimmingSection