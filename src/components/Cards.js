import React from "react";
import CardItem from "./CardItem";
import './Cards.css';


function Cards() {
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
                            text='testowy kafelek 1'
                            label='Narciarstwo'
                            path=''
                        />
                        <CardItem 
                            src='images/gs.jpg'
                            text='testowy kafelek 2'
                            label='Snowboard'
                            path=''
                        />
                        {/* <CardItem 
                            src='images/sail.jpg'
                            text='testowy kafelek 2'
                            label='Żeglarstwo'
                            path=''
                        /> */}
                    </ul>
                    <ul>
                        <CardItem 
                            src='images/sail.jpg'
                            text='testowy kafelek 2'
                            label='Żeglarstwo'
                            path=''
                        />
                    </ul>
                    <ul className="cards__items">

                        <CardItem 
                            src='images/rolki.jpg'
                            text='testowy kafelek 2 wiersz'
                            label='Rolkarstwo'
                            path=''
                        />
                        <CardItem 
                            src='images/plywanie.jpg'
                            text='testowy kafelek2 2 wiersz'
                            label='Pływanie'
                            path=''
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}


export default Cards