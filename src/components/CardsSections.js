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
                            src='images/ski.jpg'
                            text='Nrciarstwo'
                            label='Narciarstwo'
                            path='/sections/skiing'
                        />
                        <CardItem 
                            src='images/gs.jpg'
                            text='testowy kafelek 2'
                            label='snowboarding'
                            path='/sections/snowboarding'
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem 
                            src='images/sail.jpg'
                            text='testowy kafelek 3'
                            label='żeglowanie'
                            path='/sections/sailing'
                        />
                    </ul>
                    <ul className="cards__items">

                        <CardItem 
                            src='images/plywanie.jpg'
                            text='testowy kafelek 2 wiersz'
                            label='pływanie'
                            path='/sections/swimming'
                        />
                        <CardItem 
                            src='images/rolki.jpg'
                            text='testowy kafelek2 2 wiersz'
                            label='rolki'
                            path='/sections/skating'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}


export default CardsSections