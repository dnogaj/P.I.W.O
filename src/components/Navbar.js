import React, { useState, useContext } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faPersonSkiing, faXmark } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './Navbar.css'
import { Button } from "./Button";
import { AuthContext } from "./AuthContext";

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const { isLoggedIn, logout } = useContext(AuthContext);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const handleLogout = () => {
        logout();
        localStorage.setItem('isLoggedIn', 'false');
      }

    const showButton = () => window.innerWidth <= 960 ? setButton(false) : setButton(true)
    
    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>   
                    <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                        <FontAwesomeIcon icon={faPersonSkiing} /> <span className='navbar-logo-caption'>P.I.W.O</span>
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <FontAwesomeIcon icon={click ? faXmark : faBars } style={click ? {color: "#ffffff",} : {}}/>
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/sections' className="nav-links" onClick={closeMobileMenu}>
                                Sekcje
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/alerts' className="nav-links" onClick={closeMobileMenu}>
                                Komunikaty
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/calendar' className="nav-links" onClick={closeMobileMenu}>
                                Kalendarz
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/about' className="nav-links" onClick={closeMobileMenu}>
                                O nas
                            </Link>
                        </li>
                        {/* Jeśli użytkownik jest zalogowany, wyświetlamy przycisk Wyloguj */}
                        {isLoggedIn && (
                            <>
                                <li className="nav-item">
                                    <Link to='/logout' className="nav-links-mobile" onClick={handleLogout}>
                                        Wyloguj się
                                    </Link>
                                </li>
                            </>
                        )}
                        {/* Jeśli użytkownik nie jest zalogowany, wyświetlamy przyciski Rejestracja i Logowanie */}
                        {!isLoggedIn && (
                            <>
                                <li className="nav-item">
                                    <Link to='/sing-up' className="nav-links-mobile" onClick={closeMobileMenu}>
                                        Dołącz do nas!
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/log-in' className="nav-links-mobile" onClick={closeMobileMenu}>
                                        Zaloguj się
                                    </Link>
                                </li>
                            </>
                        )}
                    </ul>
                    {button && !isLoggedIn && <Button scrollToTop={true} linkTo="/sing-up" buttonStyle='btn--outline'>Dołącz do nas!</Button>}
                    {button && !isLoggedIn && <Button linkTo="/log-in" buttonStyle='btn--outline'>Zaloguj się</Button>}
                    {button && isLoggedIn && <Button buttonStyle='btn--outline' onClick={handleLogout}>Wyloguj się </Button>}
                </div> 
            </nav>
        </>
    );
}

export default Navbar;
