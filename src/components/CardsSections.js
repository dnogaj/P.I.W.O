import React from "react";
import CardItem from "./CardItem";
import './Cards.css';


function CardsSections() {
    return (
        <div className="cards">
            <h1>
                Nasze sekcje
            </h1> 
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                            src='images/img-1.png'
                            text='Nrciarstwo'
                            label='Narciarstwo'
                            path='/sections/sailing'
                        />
                        <CardItem 
                            src='images/img-1.png'
                            text='testowy kafelek 2'
                            label='snowboarding'
                            path='/sections/snowboarding'
                        />
                        <CardItem 
                            src='images/img-1.png'
                            text='testowy kafelek 3'
                            label='żeglowanie'
                            path='/sections/sailing'
                        />

                    </ul>
                    <ul className="cards__items">

                        <CardItem 
                            src='images/img-1.png'
                            text='testowy kafelek 2 wiersz'
                            label='pływanie'
                            path='/sections/swimming'
                        />
                        <CardItem 
                            src='images/img-1.png'
                            text='testowy kafelek2 2 wiersz'
                            label='rolki'
                            path='/sections/skating'
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem 
                            src='images/img-1.png'
                            text='testowy kafelek 3 wiersz'
                            label='test6'
                            path=''
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}


export default CardsSections