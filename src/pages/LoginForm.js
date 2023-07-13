import React, { useState } from 'react';
import './LoginForm.css';

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Tutaj możesz przetworzyć dane logowania, na przykład wysłać je do serwera
    console.log(`Username: ${username}, Password: ${password}`);
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <label>
          Nazwa użytkownika:
          <input type="text" value={username} onChange={handleUsernameChange} className="input-field"/>
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
