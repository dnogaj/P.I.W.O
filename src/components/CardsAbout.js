import React from "react";
import CardItem from "./CardItem";
import './Cards.css';


function CardsAbout() {
    return (
        <div className="cards">
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
                            text='Narciarz jakich mało. Zawsze chodzi z bananem na twarzy.'
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