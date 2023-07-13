import React, { useState } from 'react';
import AppRouter from './AppRouter';
import { AuthContext } from './components/AuthContext';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => {
    setIsLoggedIn(true);
  };

  const logout = () => {
    setIsLoggedIn(false);
    localStorage.setItem('isLoggedIn', 'false');
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      <div className="App">
        <AppRouter />
      </div>
    </AuthContext.Provider>
  );
}

export default App;
