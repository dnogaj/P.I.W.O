import React from 'react';
import "../TextArea.css";
import '../../App.css';
import CardItem from "../../components/CardItem";
import '../../components/Cards.css';
import './SnowboardSection.css';

function SnowboardingSection() {
  return (
    <div>
      <div className='snowboard-container'>
        <h1>Snowboarding</h1>
        <p className='p-about'>"It's incredible how many emotions you feel when crossing the finish line and seeing that you are No. 1." ~ Marcel Hirscher &#128588;</p>
      </div> 
        <div className='text-area-container'>
          <div className="cards">
            <div className="cards__container">
                <div className="cards__wrapper">                    
                    <ul className="cards__items">
                        <CardItem 
                            src='/images/kaniowka.jpg'
                            text='W sezonie zimowym co tydzień w sobotę oraz niedzielę odbywają się wyjazdy narciarskie. Szkolimy dzieci od malucha do pełnoletności. Dorośli również mają szansę załapać się na lekcje indywidualne.'
                            label='Wyjazdy Standardowe'
                            path=''
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem 
                            src='/images/sylwester.jpg'
                            text='Obóz zaczyna się po świętach Bożego narodzenia. Trwa on przeważnie do tygodnia czasu, w trakcie którego świętujemy nowy rok.'
                            label='Obóz Sylwestrowy'
                            path=''
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem 
                            src='/images/stozek.jpg'
                            text='Obóz wypadający w jeden z 2 tygodni. Odbywa się on w ośrodku Stożek w Wiśle.'
                            label='Stożek'
                            path=''
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem 
                            src='/images/dolomiti.jpg'
                            text='Klub organizuje przeważnie 3 wyjazdy do Włoch. Odbywają się one kolejno przed sezonem (listopad), podczas ferii Krakowskich, oraz na wiosnę (w okolicach kwietnia).'
                            label='Wyjazdy do Włoch'
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

export default SnowboardingSection