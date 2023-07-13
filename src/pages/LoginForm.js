import React, { useState } from 'react';

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
    <form onSubmit={handleSubmit}>
      <label>
        Nazwa użytkownika:
        <input type="text" value={username} onChange={handleUsernameChange} />
      </label>
      <br />
      <label>
        Hasło:
        <input type="password" value={password} onChange={handlePasswordChange} />
      </label>
      <br />
      <input type="submit" value="Zaloguj" />
    </form>
  );
}

export default LoginForm;
