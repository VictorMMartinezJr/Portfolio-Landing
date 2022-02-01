import './Navbar.css';
import { useState, useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import {gsap} from 'gsap';

const Navbar = () => {
    const [navActive, setNavActive] = useState(false);
    const firstVRef = useRef(null);
    const secondVRef = useRef(null);
    const thirdVRef = useRef(null);
    const slashRef = useRef(null);
    const firstVStart = 'M95.583 258.914L203.967 306.033V275.528L128.362 245.546L203.967 216.641V185.911L95.583 232.82V258.914Z'
    const firstVEnd = 'M163.095 300.072L209.456 191.362L178.952 191.575L149.498 267.387L120.067 191.986L89.3373 192.2L137.001 300.254L163.095 300.072Z';
    const secondVStart = 'M286 216.311L361.71 245.74L286 275.513V306.033L394.488 258.794V232.91L286 186V216.311Z'
    const secondVEnd = 'M311.396 300.721L339.63 224.557L370.591 299.79L401.107 299.309L352.166 191.578L326.286 191.985L281.089 301.198L311.396 300.721Z'
    const thirdVStart = 'M286 216.311L361.71 245.74L286 275.513V306.033L394.488 258.794V232.91L286 186V216.311Z'
    const thirdVEnd = 'M222.879 300.957L251.911 225.093L282.08 300.646L312.6 300.486L264.793 192.247L238.909 192.383L192.569 301.115L222.879 300.957Z'


    useEffect(() => {
        gsap.fromTo(firstVRef.current, {attr: {d: firstVStart}}, {attr: {d: firstVEnd}, delay: 1});
        gsap.fromTo(secondVRef.current, {attr: {d: secondVStart}}, {attr: {d: secondVEnd}, delay: 1});
        gsap.fromTo(thirdVRef.current, {attr: {d: thirdVStart}}, {attr: {d: thirdVEnd}, delay: 1});
        gsap.fromTo(slashRef.current, {opacity: 1}, {opacity: 0, delay: 1});
    }, [])

    return (
        <nav>
            <div className='nav'>
                <div className='nav-logo'>
                    <svg width="60" height="60" viewBox="0 0 490 490" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="Group">
                        <path id="Vector" d="M245 0C109.69 0 0 109.69 0 245C0 380.31 109.69 490 245 490C380.31 490 490 380.31 490 245C490 109.69 380.31 0 245 0ZM245 459.375C126.794 459.375 30.625 363.207 30.625 245C30.625 126.794 126.794 30.625 245 30.625C363.206 30.625 459.375 126.794 459.375 245C459.375 363.207 363.206 459.375 245 459.375Z" fill="#742FC2"/>
                        <path id="first-V" d="M95.583 258.914L203.967 306.033V275.528L128.362 245.546L203.967 216.641V185.911L95.583 232.82V258.914Z" fill="#742FC2" ref={firstVRef}/>
                        <path id="slash" d="M213.986 326.744H236.312L275.894 163.256H253.135L213.986 326.744Z" fill="#742FC2" ref={slashRef}/>
                        <path id="third-v" d="M286 216.311L361.71 245.74L286 275.513V306.033L394.488 258.794V232.91L286 186V216.311Z" fill="#742FC2" ref={thirdVRef}/>
                        <path id="second-v" d="M286 216.311L361.71 245.74L286 275.513V306.033L394.488 258.794V232.91L286 186V216.311Z" fill="#742FC2" ref={secondVRef}/>
                        </g>
                    </svg>
                </div>
                <ul className={navActive ? "nav-links active" : 'nav-links'}>
                    <li className="nav-link" onClick={() => setNavActive(false)}>
                        <NavLink exact to='/' activeClassName={'nav-link is-active'}>HOME</NavLink>
                    </li>
                    <li className="nav-link" onClick={() => setNavActive(false)}>
                        <NavLink to='/aboutme' activeClassName={'nav-link is-active'}>ABOUT ME</NavLink>
                    </li>
                    <li className="nav-link" onClick={() => setNavActive(false)}>
                        <NavLink to='/projects' activeClassName={'nav-link is-active'}>PROJECTS</NavLink>
                    </li>
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
