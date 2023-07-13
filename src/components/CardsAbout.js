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
                            src='images/img-1.png'
                            text='testowy kafelek 1'
                            label='Facebook'
                            path='https://www.facebook.com/knlider'
                        />
                        <CardItem 
                            src='images/img-1.png'
                            text='Zaczynamy'
                            label='Instagram'
                            path='https://www.instagram.com/knlider/'
                        />
                        <CardItem 
                            src='images/img-1.png'
                            text='testowy kafelek 3'
                            label='test3'
                            path=''
                        />

                    </ul>
                </div>
            </div>
        </div>
    );
}


export default CardsAbout