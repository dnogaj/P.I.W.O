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
                            src='images/img-1.png'
                            text='testowy kafelek 1'
                            label='test1'
                            path=''
                        />
                        <CardItem 
                            src='images/img-1.png'
                            text='testowy kafelek 2'
                            label='test2'
                            path=''
                        />
                        <CardItem 
                            src='images/img-1.png'
                            text='testowy kafelek 3'
                            label='test3'
                            path=''
                        />

                    </ul>
                    <ul className="cards__items">

                        <CardItem 
                            src='images/img-1.png'
                            text='testowy kafelek 2 wiersz'
                            label='test4'
                            path=''
                        />
                        <CardItem 
                            src='images/img-1.png'
                            text='testowy kafelek2 2 wiersz'
                            label='test5'
                            path=''
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


export default Cards