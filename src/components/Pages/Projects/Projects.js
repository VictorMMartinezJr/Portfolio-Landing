import './Projects.css';
import Stars from '../../Stars/Stars';
import { NavLink } from 'react-router-dom';
import ContactMe from '../../ContactMe/ContactMe';

const Projects = () => {
    return (
        <section className='projects' id='projects'>
            <Stars />
            <div className='projects-content'>
                <div data-aos='fade-up' className='project-titles'>
                    <h1 className='project-title'>Projects</h1>
                    <h1 className='project-title-back'>Projects</h1>
                </div>
                <h1 className='projects-h1'>Some of my recent projects, I'm always working on something new so stay turned for more</h1>
                <div className='projects-info'>
                    {/*anime shoppe project */}
                    <div data-aos='fade-left' className='project-container'>
                        <div className='project-container-content'>
                            <img src='./assets/assets-animeshoppe/animeshoppe.png' alt="anime-shoppe" />
                            <div className='project-header'>
                                <p className='project-head'>Anime Shoppe</p>
                                <span className='title-technologies'>
                                    <p className='title-technology'>React</p>
                                    <p className='title-technology'>HTML5</p>
                                    <p className='title-technology'>CSS</p>
                                </span>
                                <p className='project-description'>A dynamic web app built for an anime shop.</p>
                                <span className='title-links'>
                                    <a href='https://anime-shoppe.netlify.app/' target="_blank" rel='noreferrer'><p className='title-link'>Live Site</p></a>
                                    <a href='https://github.com/VictorMtzCode/Anime-Shoppe' target="_blank" rel='noreferrer'><p className='title-link'>GitHub</p></a>
                                    <NavLink to='/animeshoppe' onClick={() => window.scrollTo(0, 0)}>
                                        <p className='title-link'>Learn More</p>
                                    </NavLink>
                                </span>
                            </div>
                        </div>
                    </div>
                    {/* streamvic movie project */}
                    <div data-aos='fade-right' className='project-container'>
                        <div className='project-container-content'>
                            <div className='project-header'>
                                <p className='project-head'>StreamVic</p>
                                <span className='title-technologies'>
                                    <p className='title-technology'>React</p>
                                    <p className='title-technology'>HTML5</p>
                                    <p className='title-technology'>CSS</p>
                                    <p className='title-technology'>Rest API</p>
                                </span>
                                <p className='project-description'>A dynamic web app built for an anime shop.</p>
                                <span className='title-links'>
                                    <a href='https://streamvic.netlify.app/' target="_blank" rel='noreferrer'><p className='title-link'>Live Site</p></a>
                                    <a href='https://github.com/VictorMtzCode/streamvic' target="_blank" rel='noreferrer'><p className='title-link'>GitHub</p></a>
                                    <NavLink to='/streamvic' onClick={() => window.scrollTo(0, 0)}>
                                        <p className='title-link'>Learn More</p>
                                    </NavLink>
                                </span>
                            </div>
                            <img src='./assets/assets-streamvic/streamvic-carousel.png' alt="anime-shoppe" />
                        </div>
                    </div>
                    {/* visit iceland project */}
                    <div data-aos='fade-left' className='project-container'>
                        <div className='project-container-content'>
                            <img src='./assets/assets-visiticeland/visit-iceland.png' alt="anime-shoppe" />
                            <div className='project-header'>
                                <p className='project-head'>Visit Iceland</p>
                                <span className='title-technologies'>
                                    <p className='title-technology'>React</p>
                                    <p className='title-technology'>HTML5</p>
                                    <p className='title-technology'>CSS</p>
                                    <p className='title-technology'>FRAMER-MOTION</p>
                                </span>
                                <p className='project-description'>A dynamic web app for users to get information on the country of Iceland.</p>
                                <span className='title-links'>
                                    <a href='https://traveltoiceland.netlify.app/' target="_blank" rel='noreferrer'><p className='title-link'>Live Site</p></a>
                                    <a href='https://github.com/VictorMtzCode/visit-iceland' target="_blank" rel='noreferrer'><p className='title-link'>GitHub</p></a>
                                    <NavLink to='/visiticeland' onClick={() => window.scrollTo(0, 0)}>
                                        <p className='title-link'>Learn More</p>
                                    </NavLink>
                                </span>
                            </div>
                        </div>
                    </div>
                    {/*the crown restaurant project */}
                    <div data-aos='fade-right' className='project-container'>
                        <div className='project-container-content'>
                            <div className='project-header'>
                                <p className='project-head'>The Crown</p>
                                <span className='title-technologies'>
                                    <p className='title-technology'>React</p>
                                    <p className='title-technology'>HTML5</p>
                                    <p className='title-technology'>CSS</p>
                                </span>
                                <p className='project-description'>A dynamic web application UI for a high end restaurant.</p>
                                <span className='title-links'>
                                    <a href='https://thecrown.netlify.app/' target="_blank" rel='noreferrer'><p className='title-link'>Live Site</p></a>
                                    <a href='https://github.com/VictorMtzCode/TheCrown' target="_blank" rel='noreferrer'><p className='title-link'>GitHub</p></a>
                                    <NavLink to='/thecrown' onClick={() => window.scrollTo(0, 0)}>
                                        <p className='title-link'>Learn More</p>
                                    </NavLink>
                                </span>
                            </div>
                            <img src='./assets/assets-thecrown/thecrown.png' alt="anime-shoppe" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='contact-div'>
                <ContactMe />
                <i className="far fa-arrow-alt-circle-up arrow-up" onClick={() => window.scrollTo(0, 0)}></i>
            </div>
        </section>
    )
}

export default Projects
