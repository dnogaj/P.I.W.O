import React from "react";
import CardItem from "../components/CardItem";
import '../components/Cards.css';


function Kontakt() {
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
                    </ul>
                    <ul className="cards__items">
                        <CardItem 
                            src='images/telefon.jpg'
                            text='Pod numerem: 601 550 300 &#128241;'
                            label='Telefon'
                            path=''
                        />
                        <CardItem 
                            src='images/gmail.png'
                            text='Tu najlepiej: klub@lider.krakow.pl &#128234;'
                            label='Mail'
                            path=''
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}


export default Kontakt