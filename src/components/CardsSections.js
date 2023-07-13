import React from "react";
import CardItem from "./CardItem";
import './Cards.css';


function CardsSections() {
    return (
        <div className="cards">
            <h1>
                Nasze sekcje
            </h1> 
            {/* <div className="cards__container"> */}
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                            src='images/ski.jpg'
                            text='Dowiedz się więcej o treningach, obozach, kursach oraz świadczonych przez klub usługach.'
                            label='Narciarstwo'
                            path='/sections/skiing'
                        />
                        <CardItem 
                            src='images/gs.jpg'
                            text='Dowiedz się więcej o sekcji Snowboardowej.'
                            label='snowboarding'
                            path='/sections/snowboarding'
                        />
                    {/* </ul>
                    <ul className="cards__items"> */}
                        <CardItem 
                            src='images/sail.jpg'
                            text='Dowiedz się więcej o naszych zajęciach, startach w zawodach, obozach oraz kursach.'
                            label='żeglowanie'
                            path='/sections/sailing'
                        />
                    </ul>
                    <ul className="cards__items">

                        <CardItem 
                            src='images/plywanie.jpg'
                            text='Dowiedz się więcej o treningach.'
                            label='pływanie'
                            path='/sections/swimming'
                        />
                        <CardItem 
                            src='images/rolki.jpg'
                            text='Dowiedz się więcej o Inline Skating Team.'
                            label='rolki'
                            path='/sections/skating'
                        />
                    </ul>
                </div>
            {/* </div> */}
        </div>
    );
}


export default CardsSections