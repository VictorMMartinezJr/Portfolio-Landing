import './AboutMe.css';
import Stars from '../Stars/Stars';

const AboutMe = () => {
    return (
        <section className='aboutme' id='aboutme'>
            <Stars />
            <div className="aboutme-content">
                <div data-aos='fade-up' className='aboutme-titles'>
                    <h1 className='aboutme-title'>About Me</h1>
                    <h1 className='aboutme-title-back'>About</h1>
                </div>
                <div data-aos='zoom-in' className="aboutme-info">
                    <p className='aboutme-name'>My name is <span className='name-span'>Victor Martinez</span></p>
                    <p className='aboutme-paragraph'>I'm a front end web developer with a hunger for improving. I fell in love with web development and have been striving to be better ever since. I love the process of creating a webpage and also the challenge of tackling any challenges that may occur.</p>
                    <span className='info-span'>Whether it's a small personal project or a large scale project, I take pride in knowing I put in 110% in anything I do.</span>
                </div>
            </div>
        </section>
    )
}

export default AboutMe
