import React from "react";
import CardItem from "./CardItem";
import './Cards.css';
import '../pages/TextArea.css';


function CardsAbout() {
    return (
        <div className="cards">
            <div className='text-area-container'>
                <h1 className="h1-about">
                    Troszkę o naszym klubie..
                </h1>
                <ul className="ul-about">
                    KN LIDER to klub z wieloletnią tradycją. Jego datę założenia pamiętają tylko najstarsi górole. Klub stawia na jakość kształcenia, nie na ilość. 
                    Szkolimy w małych grupach niezależnie od sportu. Stawiamy przede wszystkim na frajdę jaką mają nasi podopieczni z tego co robią.
                </ul>
                <h2 className="h2-about">
                    Co robimy?
                </h2>
                <ul className="ul-about">
                    <li>
                        Szkolimy w małych grupach niezależnie od sportu. 
                    </li>
                    <li>
                        Prowadzimy kursy instruktorskie oraz patentowe.
                    </li>
                    <li>
                        Prowadzimy obozy sportowe.
                    </li>
                    <li>
                        Świadczymy usługi dla firm i zorganizowanych grup.
                    </li>
                </ul>
                <h2 className="h2-about">
                    Znają nas na całej Polsce!
                </h2>
            </div>

            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                            src='images/logo_lider.jpg'
                            text='Niedawna aktualizacja wysłużonego loga klubu.'
                            label='Logo'
                            path=''
                        />
                        <CardItem 
                            src='images/prezes2.jpg'
                            text='To na nim opiera się cały klub.'
                            label='Prezes'
                            path=''
                        />
                    </ul>
                </div>
            </div>

            <h1>
                Kim jesteśmy?
            </h1> 
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                            src='images/hubercik.png'
                            text='Miasteczkowa legenda (widział tam papieża). Snowboardzista i zapalony rowerzysta górski.'
                            label='norka02'
                            path='https://github.com/norka02'
                        />
                        <CardItem 
                            src='images/noghaj.jpg'
                            text='Nałogowy gracz LOL-a. Legendy głoszą, iż ma swoich sobowtórów na uczelni.'
                            label='dnogaj'
                            path='https://github.com/dnogaj'
                        />
                        <CardItem 
                            src='images/jdkowal.jpg'
                            text='Narciarz jakich mało. Zawsze chodzi z bananem na twarzy. Z zawodu Product Manager.'
                            label='jdkowal'
                            path='https://github.com/jd-kowal'
                        />
                    </ul>
                </div>
            </div>

            <h1>
                Jak nas znaleźć?
            </h1> 
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                            src='images/fb.png'
                            text='Tu najwięcej się dzieje..'
                            label='Facebook'
                            path='https://www.facebook.com/knlider'
                        />
                        <CardItem 
                            src='images/ig.png'
                            text='Zaczynamy swoją przygodę również na Instagramie'
                            label='Instagram'
                            path='https://www.instagram.com/knlider/'
                        />
                        <CardItem 
                            src='images/beer.png'
                            text='Tam gdzie zawsze :)'
                            label='MS AGH'
                            path='https://www.miasteczko.agh.edu.pl/'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}


export default CardsAbout