import './Navbar.css';
import { useState } from 'react';

const Navbar = () => {
    const [navActive, setNavActive] = useState(false);

    return (
        <nav>
            <div className='nav'>
                <div className='nav-logo'>
                    <img src='../assets/images/logo.svg' alt="nav-logo" />
                </div>
                <ul className={navActive ? "nav-links active" : 'nav-links'}>
                    <li className="nav-link" onClick={() => setNavActive(false)}>
                        <a href='#home'>HOME</a>
                    </li>
                    <li className="nav-link" onClick={() => setNavActive(false)}>
                        <a href='#aboutme'>ABOUT ME</a>
                    </li>
                    <li className="nav-link" onClick={() => setNavActive(false)}>
                        <a href='#projects'>PROJECTS</a>
                    </li>
                    <li className="nav-link" onClick={() => setNavActive(false)}>
                        <a href='#contact'>CONTACT</a>
                    </li>
                </ul>
                <div className='burger' onClick={() => setNavActive(!navActive)}>
                    <div className={navActive ? 'line-1 toggle' : 'line-1'}></div>
                    <div className={navActive ? 'line-2 toggle' : 'line-2'}></div>
                    <div className={navActive ? 'line-3 toggle' : 'line-3'}></div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
