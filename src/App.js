import React, { useState } from 'react';
import AppRouter from './AppRouter';
import { AuthContext } from './components/AuthContext';
import AuthProvider from './components/AuthContext';


function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // const login = () => {
  //   setIsLoggedIn(true);
  // };

  // const logout = () => {
  //   setIsLoggedIn(false);
  //   localStorage.setItem('isLoggedIn', 'false');
  // };

  return (
    <AuthProvider>
      <div className="App">
        <AppRouter />
      </div>
      </AuthProvider>
  );
}

export default App;
