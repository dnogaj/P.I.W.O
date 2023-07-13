import React from "react";
import CardItem from "../components/CardItem";
import '../components/Cards.css';


function Sponsoring() {
    return (
        <div className="cards">
            <h1>
                Chciałbyś wesprzeć nas klub w rozwoju?
            </h1> 
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                            src='images/sponsor.png'
                            text='Miło nam witać potencjalnego sponsora. Nakłaniamy do kontaktu mailowego.'
                            label='Sponsoring'
                            path='/kontakt'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}


export default Sponsoring