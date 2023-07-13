import React from 'react';
import  Navbar  from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Alerts from './pages/Alerts';
import Calendar from './pages/Calendar';
import Sections from './pages/Sections';
import NoPage from './pages/NoPage';

import Footer from './components/Footer';
import SailingSection from './pages/sections/SailingSection';
import SkatingSection from './pages/sections/SkatingSection';
import SkiingSection from './pages/sections/SkiingSection';
import SnowboardingSection from './pages/sections/SnowboardingSection';
import SwimmingSection from './pages/sections/SwimmingSection';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginForm from './pages/LoginForm';
import RegisterForm from './pages/RegisterForm';
import Form from './pages/Form';
import Kontakt from './pages/Kontakt';
import Help from './pages/Help';
import Sponsor from './pages/Sponsoring';
import Regulamin from './pages/Regulamin';

function AppRouter() {
  return (
    <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' exact  Component={Home}/>
          <Route path='/sections' Component={Sections}/>
          <Route path='/alerts' Component={Alerts}/>
          <Route path='/calendar' Component={Calendar}/>
          <Route path='/about' Component={About}/>

          <Route path='/sections/sailing' Component={SailingSection}/>
          <Route path='/sections/skating' Component={SkatingSection}/>
          <Route path='/sections/skiing' Component={SkiingSection}/>
          <Route path='/sections/snowboarding' Component={SnowboardingSection}/>
          <Route path='/sections/swimming' Component={SwimmingSection}/>

          <Route path='/form' Component={Form}/>

          <Route path='/kontakt' Component={Kontakt}/>
          <Route path='/help' Component={Help}/>
          <Route path='/sponsoring' Component={Sponsor}/>
          <Route path='/regulamin' Component={Regulamin}/>


          <Route path='/sing-up' Component={RegisterForm}/>
          <Route path='/log-in' Component={LoginForm} />
          <Route path='*' Component={NoPage}/>
        </Routes>
        <Footer />
      </BrowserRouter>
  )
}

export default AppRouter