import React from "react";
import '../App.css';
import { Button } from './Button';
import './MainHome.css';


function MainHome() {
    return (
        <div className='hero-container'>
            <video src="/videos/video-ski.mp4"
            autoPlay loop muted />
            <h1>POSTAKADEMICKA INICJATYWA WIETNAMSKICH OŚLIZGÓW</h1>
            <p>Czekasz na oklaski?</p>
            <div className="hero-btns">
                <Button
                    className='btns'
                    buttonStyle="btn--outline"
                    buttonSize="btn--large"
                >
                    Dawaj z nami!
                </Button>

            </div>
        </div>
    );
}


export default MainHome