import './Projects.css';
import Stars from '../Stars/Stars';
import { Link } from 'react-router-dom';

const Projects = () => {
    return (
        <section className='projects' id='projects'>
            <Stars />
            <div className='projects-content'>
                <div data-aos='fade-up' className='aboutme-titles'>
                    <h1 className='aboutme-title'>Projects</h1>
                    <h1 className='aboutme-title-back'>Projects</h1>
                </div>
                <div className='projects-info'>
                    {/*anime shoppe project */}
                    <div data-aos='fade-left' className='project-container'>
                        <div className='project-container-content'>
                            <img src='Portfolio-Landing/images/animeshoppe.png' alt="anime-shoppe" />
                            <div className='project-header'>
                                <p className='project-title'>Anime Shoppe</p>
                                <span className='title-technologies'>
                                    <p className='title-technology'>React</p>
                                    <p className='title-technology'>HTML5</p>
                                    <p className='title-technology'>CSS</p>
                                </span>
                                <p className='project-description'>A dynamic web app built for an anime shop.</p>
                                <span className='title-links'>
                                    <a href='https://anime-shoppe.netlify.app/' target="_blank" rel='noreferrer'><p className='title-link'>Live Site</p></a>
                                    <a href='https://github.com/VictorMtzCode/Anime-Shoppe' target="_blank" rel='noreferrer'><p className='title-link'>GitHub</p></a>
                                    <Link to='/streamvic'>
                                        <p className='title-link'>Learn More</p>
                                    </Link>
                                </span>
                            </div>
                        </div>
                    </div>
                    {/* streamvic movie project */}
                    <div data-aos='fade-right' className='project-container'>
                        <div className='project-container-content'>
                            <div className='project-header'>
                                <p className='project-title'>StreamVic</p>
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
                                    <a href='https://anime-shoppe.netlify.app/' target="_blank" rel='noreferrer'><p className='title-link'>Learn More</p></a>
                                </span>
                            </div>
                            <img src='Portfolio-Landing/images/streamvic.png' alt="anime-shoppe" />
                        </div>
                    </div>
                    {/* visit iceland project */}
                    <div data-aos='fade-left' className='project-container'>
                        <div className='project-container-content'>
                            <img src='Portfolio-Landing/images/visit-iceland.png' alt="anime-shoppe" />
                            <div className='project-header'>
                                <p className='project-title'>Visit Iceland</p>
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
                                    <a href='https://anime-shoppe.netlify.app/' target="_blank" rel='noreferrer'><p className='title-link'>Learn More</p></a>
                                </span>
                            </div>
                        </div>
                    </div>
                    {/*the crown restaurant project */}
                    <div data-aos='fade-right' className='project-container'>
                        <div className='project-container-content'>
                            <div className='project-header'>
                                <p className='project-title'>The Crown</p>
                                <span className='title-technologies'>
                                    <p className='title-technology'>React</p>
                                    <p className='title-technology'>HTML5</p>
                                    <p className='title-technology'>CSS</p>
                                </span>
                                <p className='project-description'>A dynamic web application UI for a high end restaurant.</p>
                                <span className='title-links'>
                                    <a href='https://thecrown.netlify.app/' target="_blank" rel='noreferrer'><p className='title-link'>Live Site</p></a>
                                    <a href='https://github.com/VictorMtzCode/TheCrown' target="_blank" rel='noreferrer'><p className='title-link'>GitHub</p></a>
                                    <a href='https://anime-shoppe.netlify.app/' target="_blank" rel='noreferrer'><p className='title-link'>Learn More</p></a>
                                </span>
                            </div>
                            <img src='Portfolio-Landing/images/thecrown.png' alt="anime-shoppe" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects
