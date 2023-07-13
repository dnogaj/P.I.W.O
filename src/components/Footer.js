import React, { useState } from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    //event.preventDefault();
    fetch('http://127.0.0.1:5000/newsletter', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
      })
    })
      .then(response => response.json())
      .then(data => {
        if (data.message === "Email added successfully!") {
          alert('Email dodany pomyślnie!');
          setEmail('');
        } else if (data.error === "Email already exists!") {
            alert("Email został już dodany do newslettera!");
            setEmail('');
        } else {
          alert('Email niepoprawny!');
          setEmail('');
        }
      })
      .catch((error) => {
        alert('Wystąpił błąd!');
        console.error('Error:', error);
      });
  };

  const handleInputChange = (event) => {
    setMessage(""); // Resetujemy wartość message przy zmianie zawartości pola input
    setEmail(event.target.value);
  };

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
          <form onSubmit={handleSubmit}>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Twój Email'
              value={email}
              onChange={handleInputChange}
            />
            <Button buttonStyle='btn--outline' onClick={handleSubmit}>Dołącz do nas</Button>
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
          <small class='website-rights'>P.I.W.O © 2023 Wszelkie prawa zastrzeżone</small>
        </div>
      </section>
    </div>
  );
}

export default Footer;
