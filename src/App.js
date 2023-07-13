import './App.css';
import  Navbar  from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Alerts from './pages/Alerts';
import Calendar from './pages/Calendar';
import Sections from './pages/Sections';
import NoPage from './pages/NoPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' exact  Component={Home}/>
          <Route path='/sections' Component={Sections}/>
          <Route path='/alerts' Component={Alerts}/>
          <Route path='/calendar' Component={Calendar}/>
          <Route path='/about' Component={About}/>
          <Route path='*' Component={NoPage}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
