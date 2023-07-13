import React, { useState } from 'react';

function RegisterForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handlePasswordConfirmChange = (event) => {
    setPasswordConfirm(event.target.value);
  };

  const handleSubmit = (event) => {
    // event.preventDefault();
    if (password === passwordConfirm) {
      // Tutaj wysyłamy dane rejestracji do serwera Flask
      fetch('http://127.0.0.1:5000/register', { 
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
      .then(data => console.log(data))
      .catch((error) => {
        console.error('Error:', error);
      });
    } else {
      alert("Hasła nie są takie same");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input type="email" value={email} onChange={handleEmailChange} />
      </label>
      <br />
      <label>
        Hasło:
        <input type="password" value={password} onChange={handlePasswordChange} />
      </label>
      <br />
      <label>
        Potwierdź hasło:
        <input type="password" value={passwordConfirm} onChange={handlePasswordConfirmChange} />
      </label>
      <br />
      <input type="submit" value="Zarejestruj się" />
    </form>
  );
}

export default RegisterForm;
