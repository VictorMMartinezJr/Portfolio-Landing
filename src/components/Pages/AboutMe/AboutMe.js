import './AboutMe.css';
import Stars from '../../Stars/Stars';
import Skills from '../../Skills/Skills';
import { Helmet } from 'react-helmet-async';
import MainButton from '../../MainButton';

const AboutMe = () => {
    return (
        <section className='aboutme' id='aboutme'>
            <Helmet>
                <title>VictorMtzCodes About</title>
                <meta name='description' content='About VictorMtzCodes' />
            </Helmet>
            <Stars />
            <span data-aos='zoom-in'>
            <h1  className='aboutme-title'>ABOUT ME</h1>
            </span>
            <div className="aboutme-content">
                <div data-aos='zoom-in' className="aboutme-info">
                    <h1 data-aos='fade-up' className='aboutme-subtitle'>Who am I?</h1>
                    <p className='aboutme-paragraph'>My name is <span className='name-span'>Victor Martinez Jr. </span>I'm a front end web developer with a hunger for improving. My never quit attitude has allowed me to further develop my passion and skillsets in web development. I love the process of creating a webpage and also the challenge of tackling any hiccups that may occur in the process.</p>
                    <p className='aboutme-second-p'>I learned many traits while teaching myself how to code, such as patience, discipline, problem solving, perseverance and many more. I faced too many challenging obstacles to count but I never quit. I never want to stop growing and improving because I believe I haven't seen the best version of myself.</p>
                    <p className='aboutme-third-p'>I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me.</p>
                    <MainButton type='main-btn secondary-btn' link='#contact' text='CONTACT'/>
                </div>
            <div className='skills-section'>
                <Skills />
            </div>
            </div>
        </section>
    )
}

export default AboutMe
