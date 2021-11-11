import './Projects.css';
import Stars from '../Stars/Stars';

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
                    <div className='project-container'>
                        <div className='project-header'>
                            <p className='project-title'>Anime Shoppe</p>
                            <p className='project-info'>A clothing store using Context API + useReducer to create a global state used to add a working cart feature.</p>
                        </div>
                        <div className='project-features'>
                            <p className='features-header'>Notable Features:</p>
                            <p>Search, Add/Remove Item to Cart, Sort Items, Image Change on Hover</p>
                        </div>
                        <a href='https://anime-shoppe.netlify.app/' target="_blank" rel='noreferrer'><img src='./images/animeshoppe.png' alt="anime-shoppe" /></a>
                    </div>
                    <div className='project-container'>
                        <div className='project-header'>
                            <p className='project-title'>Visit Iceland</p>
                            <p className='project-info'>A travel website with animations created with framer motion.</p>
                        </div>
                        <div className='project-features'>
                            <p className='features-header'>Notable Features:</p>
                            <p>Route Change Animations, Sections Animations, Contact Form with Thank You Modal.</p>
                        </div>
                        <a href='https://traveltoiceland.netlify.app/' target="_blank" rel='noreferrer'><img src='./images/visiticeland.png' alt="visit-iceland" /></a>
                    </div>
                </div>
                <div className='projects-info'>
                    <div className='project-container'>
                        <div className='project-header'>
                            <p className='project-title'>StreamVic</p>
                            <p className='project-info'>A movie app fetching 3rd party data to display movie and TV show info.</p>
                        </div>
                        <div className='project-features'>
                            <p className='features-header'>Notable Features:</p>
                            <p>Search, Movie/Show Details Page</p>
                        </div>
                        <a href='https://streamvic.netlify.app/' target="_blank" rel='noreferrer'><img src='./images/streamvic.png' alt="streamvic" /></a>
                    </div>
                    <div className='project-container'>
                        <div className='project-header'>
                            <p className='project-title'>The Crown Restaurant</p>
                            <p className='project-info'>A UI Created for a Luxurious Restaurant</p>
                        </div>
                        <div className='project-features'>
                            <p className='features-header'>Notable Features:</p>
                            <p>Review Cards, PNG Images</p>
                        </div>
                        <a href='https://thecrown.netlify.app' target="_blank" rel='noreferrer'><img src='./images/crown.png' alt="crown" /></a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects
