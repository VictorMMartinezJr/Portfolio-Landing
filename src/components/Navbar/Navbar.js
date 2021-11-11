import './Navbar.css';
import { useState } from 'react';

const Navbar = () => {
    const [navBackground, setNavBackground] = useState(false);
    const [navActive, setNavActive] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 100) {
            setNavBackground(true);
        } else {
            setNavBackground(false);
        }
    }

    window.addEventListener('scroll', changeBackground)

    return (
        <nav>
            <div className={navBackground ? 'nav background' : 'nav'}>
                <img className='nav-logo' src='./images/programming.png' alt="programming" />
                <ul className={navActive ? "nav-links active" : 'nav-links'}>
                    <li className="nav-link" onClick={() => setNavActive(false)}><a href='#home'>HOME</a></li>
                    <li className="nav-link" onClick={() => setNavActive(false)}><a href='#aboutme'>ABOUT ME</a></li>
                    <li className="nav-link" onClick={() => setNavActive(false)}><a href='#skills'>SKILLS</a></li>
                    <li className="nav-link" onClick={() => setNavActive(false)}><a href='#projects'>PROJECTS</a></li>
                    <li className="nav-link" onClick={() => setNavActive(false)}><a href='#contact'>CONTACT</a></li>
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
