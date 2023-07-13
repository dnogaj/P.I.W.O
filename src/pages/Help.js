import React from "react";
import CardItem from "../components/CardItem";
import '../components/Cards.css';


function Help() {
    return (
        <div className="cards">
            <h1>
                Potrzebujesz pomocy?
                
            </h1> 
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                            src='images/help.png'
                            text='W razie jakichkolwiek wątpliwości, czy pytań proszę pisać maila.'
                            label='Pomoc'
                            path='/kontakt'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}


export default Help