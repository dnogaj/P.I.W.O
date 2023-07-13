import React, { useState } from 'react';
import './LoginForm.css';

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('http://127.0.0.1:5000/login', { 
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email, 
        password: password 
      })
    })
    .then(response => response.json())
    .then(data => {
      if (data.message === 'Logged in successfully') {
        setIsLoggedIn(true);
      } else {
        alert(data.error);
      }
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  };

  return (
    isLoggedIn 
    ? <div>Zalogowano pomyślnie</div> 
    : <div className="login-container">
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
        <input type="submit" value="Zaloguj" className="submit-button"/>
      </form>
    </div>
  );
}

export default LoginForm;

