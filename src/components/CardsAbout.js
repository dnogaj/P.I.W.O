import React from "react";
import CardItem from "./CardItem";
import './Cards.css';


function CardsAbout() {
    return (
        <div className="cards">
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
                            path=''
                        />

                    </ul>
                </div>
            </div>
        </div>
    );
}


export default CardsAbout