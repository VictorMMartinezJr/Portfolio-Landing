import './Projects.css';
import Stars from '../../Stars/Stars';
import { NavLink } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';


const Projects = () => {
    return (
        <section className='projects' id='projects'>
            <Helmet>
                <title>VictorMtzCodes Projects</title>
                <meta name='description' content="VictorMtzCodes's Projects" />
            </Helmet>
            <Stars />
            <div className='projects-content'>
                <h1 data-aos='fade-up' className='project-title'>PROJECTS</h1>
                <h1 className='projects-h1'>Some of my recent projects, I'm always working on something new so stay turned for more</h1>
                <div className='projects-info'>
                    {/*anime shoppe project */}
                    <div data-aos='fade-left' className='project-container'>
                        <div className='project-container-content left-image'>
                            <LazyLoadImage src='./assets/assets-animeshoppe/anime-attire-project.png' alt="anime-shoppe" />
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
                                <p className='project-description'>A dynamic web app for users to browse, search, & favorite movies/tvshows.</p>
                                <span className='title-links'>
                                    <a href='https://streamvic.netlify.app/' target="_blank" rel='noreferrer'><p className='title-link'>Live Site</p></a>
                                    <a href='https://github.com/VictorMtzCode/streamvic' target="_blank" rel='noreferrer'><p className='title-link'>GitHub</p></a>
                                    <NavLink to='/streamvic' onClick={() => window.scrollTo(0, 0)}>
                                        <p className='title-link'>Learn More</p>
                                    </NavLink>
                                </span>
                            </div>
                            <LazyLoadImage src='./assets/assets-streamvic/streamvic-project.png' alt="streamvic" />
                        </div>
                    </div>
                    {/* visit iceland project */}
                    <div data-aos='fade-left' className='project-container'>
                        <div className='project-container-content left-image'>
                            <LazyLoadImage src='./assets/assets-visiticeland/visit-iceland.png' alt="visit-iceland" />
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
                    {/*Italian Pie pizza restaurant project */}
                    <div data-aos='fade-right' className='project-container'>
                        <div className='project-container-content'>
                            <div className='project-header'>
                                <p className='project-head'>Italian Pie</p>
                                <span className='title-technologies'>
                                    <p className='title-technology'>React</p>
                                    <p className='title-technology'>HTML5</p>
                                    <p className='title-technology'>CSS</p>
                                </span>
                                <p className='project-description'>A dynamic web application UI for a pizza shop.</p>
                                <span className='title-links'>
                                    <a href='https://italianpie.netlify.app/' target="_blank" rel='noreferrer'><p className='title-link'>Live Site</p></a>
                                    <a href='https://github.com/VictorMtzCode/PizzaRestaurant' target="_blank" rel='noreferrer'><p className='title-link'>GitHub</p></a>
                                    <NavLink to='/italianpie' onClick={() => window.scrollTo(0, 0)}>
                                        <p className='title-link'>Learn More</p>
                                    </NavLink>
                                </span>
                            </div>
                            <LazyLoadImage src='./assets/assets-italianpie/pizza-ui.png' alt="italian-pie" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects
