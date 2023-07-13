import React from "react";
import CardItem from "./CardItem";
import './Cards.css';
// import './TextArea.css';


function CardsHome() {
    return (

        <div className='text-area-container'>
            {/* <h1>
                POSTAKADEMICKA INICJATYWA WIETNAMSKICH OSLIZGÓW
            </h1> */}
            

            <div className="cards">
                <h2>
                Zapraszamy wszystkich sportowych oślizgów do dołączenia. Oferujemy piwne czwartki wraz z jazdą na nartach każdej zimy. W sezonie letnim można nas spotkać na Bagrach WIELKICH oraz kruzujących na rolkach pod Tauron Areną w Krakowie.
                </h2> 
                <div className="cards__container">
                    <div className="cards__wrapper">
                        <ul className="cards__items">
                            <CardItem 
                                src='images/sitn_pzn_horizontal.jpg'
                                text='Kim jesteśmy?'
                                label='Licencjonowana Szkoła Narciarska'
                                path='http://www.sitn.pl/'
                            />
                            <CardItem 
                                src='images/ministerstwo.png'
                                text='Przed kim się uginamy...'
                                label='Współpraca'
                                path='https://www.gov.pl/web/sport'
                            />
                            <CardItem 
                                src='images/krakow_logo.png'
                                text='Komu jesteśmy wierni <3'
                                label='Współpraca'
                                path='https://www.krakow.pl/'
                            />
                            <CardItem 
                                src='images/popeye.jpg'
                                text='Co robimy w wolnych chwilach...'
                                label='Hobby'
                                path='https://www.youtube.com/watch?v=XtMy5IBmX7E'
                            />
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default CardsHome