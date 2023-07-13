import React, { useState, useContext } from 'react';
import { AuthContext } from '../components/AuthContext';
import { useNavigate } from 'react-router-dom';
import './LoginForm.css';

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isLoggedIn, login } = useContext(AuthContext);
  const navigate = useNavigate();

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
        login();
        localStorage.setItem('isLoggedIn', 'true');
        navigate("/");
        alert("Logowanie przebiegło pomyślnie!");
      } else {
        alert(data.error);
      }
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  };
  return (
    !isLoggedIn &&
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
        <input type="submit" value="Zaloguj" className="submit-button"/>
      </form>
    </div>
  );
}

export default LoginForm;

