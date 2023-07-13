import React from 'react';
import "../TextArea.css";
import '../../App.css';
import CardItem from "../../components/CardItem";
import '../../components/Cards.css';
import './SailingSection.css';

function SailingSection() {
  return (
    <div>
      <div className='sail-container'>
        {/* <image src="/image/ski.jpg"
        autoPlay loop muted /> */}
        <h1>Sailing</h1>
        <p>"Ludzie są jak morze, czasem łagodni i przyjaźni, czasem burzliwi i zdradliwi. Przede wszystkim to jednak tylko woda." ~ Albert Einstein</p>
      </div> 
        <div className='text-area-container'>
          <div className="cards">
            <div className="cards__container">
                <div className="cards__wrapper">                    
                    <ul className="cards__items">
                        <CardItem 
                            src='/images/bagryWielkie.jpg'
                            text='W sezonie letnim odbywają się treningi grup klasy optymist oraz laser na Bagrach Wielkich w Krakowie. Zawodnicy mają możliwość uczestnictwa w zawodach na terenie całej Polski.'
                            label='Regularne Zajęcia i Zawody'
                            path=''
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem 
                            src='/images/zywiec.jpg'
                            text='Obóz żeglarsko tenisowy, odbywający się nad jeziorem Żywieckim. Trwa on przeważnie w okolicach tygodnia na przełomie lipca i sierpnia.'
                            label='Obóz Żywiec'
                            path=''
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem 
                            src='/images/garda.jpg'
                            text='Obóz nad jeziorem Garda we Włoszech.'
                            label='Jezioro Garda'
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

export default SailingSection