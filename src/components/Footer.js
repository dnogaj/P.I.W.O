import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Dołącz do newslettera!
        </p>
        <p className='footer-subscription-text'>
          Możesz się wypisać w dowolnym momencie.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Twój Email'
            />
            <Button buttonStyle='btn--outline'>Dołącz do nas</Button>
          </form>
        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>O nas</h2>
            <Link to='/sign-up'>Dołącz do nas!</Link>
            <Link to='/'>Home</Link>
            <Link to='/sections'>Sekcje</Link>
            <Link to='/alerts'>Komunikaty</Link>
            <Link to='/calendar'>Kalendarz</Link>
            <Link to='/about'>O nas</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Skontaktuj się z nami</h2>
            <Link to='/'>Kontakt</Link>
            <Link to='/'>Pomoc</Link>
            <Link to='/'>Sponsoring</Link>
            <Link to='/'>Regulamin</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='https://www.instagram.com/' target='_blank'>Instagram</Link>
            <Link to='https://www.facebook.com/' target='_blank'>Facebook</Link>
            <Link to='https://www.youtube.com/' target='_blank'>Youtube</Link>
            <Link to='https://www.twitter.com/' target='_blank'>Twitter</Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <small class='website-rights'>P.I.W.O © 2020 Wszelkie prawa zastrzeżone</small>
        </div>
      </section>
    </div>
  );
}

export default Footer;
