import './AboutMe.css';
import Stars from '../../Stars/Stars';
import Skills from '../../Skills/Skills';
import ContactMe from '../../ContactMe/ContactMe';

const AboutMe = () => {
    return (
        <section className='aboutme' id='aboutme'>
            <Stars />
            <div className="aboutme-content">
                <div data-aos='fade-up' className='aboutme-titles'>
                    <h1 className='aboutme-title'>About Me</h1>
                    <h1 className='aboutme-title-back'>About</h1>
                </div>
                <div data-aos='fade-in' data-aos-delay='200' className="aboutme-info">
                    <p data-aos='fade-in' data-aos-delay='400' className='aboutme-paragraph'>My name is <span className='name-span'>Victor Martinez Jr. </span>I'm a front end web developer with a hunger for improving. My never quit attitude has allowed me to further develop my passion and skillsets in web development. I love the process of creating a webpage and also the challenge of tackling any hiccups that may occur in the process.</p>
                    <p data-aos='fade-in' data-aos-delay='500'>I learned many traits while teaching myself how to code, such as patience, discipline, problem solving, perseverance and many more. I faced too many challenging obstacles to count but I never quit. I never want to stop growing and improving because I believe I haven't seen the best version of myself.</p>
                </div>
            </div>
            <Skills />
            <ContactMe />
        </section>
    )
}

export default AboutMe
