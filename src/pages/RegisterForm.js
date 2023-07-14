import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../components/AuthContext';
import ReCAPTCHA from "react-google-recaptcha";
import './LoginForm.css';

function RegisterForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [recaptchaValue, setRecaptchaValue] = useState(null);
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handlePasswordConfirmChange = (event) => {
    setPasswordConfirm(event.target.value);
  };

  const handleRecaptchaChange = (value) => {
    setRecaptchaValue(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password === passwordConfirm) {
      // Tutaj wysyłamy dane rejestracji do serwera Flask
      fetch('http://127.0.0.1:5000/register', { 
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: email, 
          password: password,
          'g-recaptcha-response': recaptchaValue 
        })
      })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        if (data.message === 'User registered successfully') { // Zmodyfikuj to zgodnie z rzeczywistą odpowiedzią z serwera
          login();
          localStorage.setItem('isLoggedIn', 'true');
          alert("Rejestracja przebiegła pomyślnie!");
          navigate("/");
        } else {
          alert(data.error);
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    } else {
      alert("Hasła nie są takie same");
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <label>
          Email:
          <input type="text" value={email} onChange={handleEmailChange} className="input-field"/>
        </label>
        <br />
        <label>
          Hasło:
          <input type="password" value={password} onChange={handlePasswordChange} className="input-field"/>
        </label>
        <br />
        <label>
          Potwierdź hasło:
          <input type="password" value={passwordConfirm} onChange={handlePasswordConfirmChange} className="input-field"/>
        </label>
        <br />
        <ReCAPTCHA
          sitekey="6Lem2SInAAAAAFr2kVbbMxuzWnfWjIy-_GpWYRwR"
          onChange={handleRecaptchaChange}
        />
        <br />
        <input type="submit" value="Zarejestruj się" className="submit-button"/>
      </form>
    </div>
  );
}

export default RegisterForm;
