import './ContactMe.css';
import Stars from '../Stars/Stars';

const ContactMe = () => {
    return (
        <section className='contact' id='contact'>
            <Stars />
            <div className="contact-content">
                <div data-aos='fade-up' className='aboutme-titles'>
                    <h1 className='aboutme-title'>Contact Me</h1>
                    <h1 className='aboutme-title-back'>Contact</h1>
                </div>
                <div className="contact-info">
                    <div className="contact-title">
                        <img className='html-logo email-logo' src='Portfolio-Landing/images/email.png' alt="email-envelope" />
                        <p className='contact-info-title'>Email Me At</p>
                    </div>
                    <p className='email'>victormtzcodes@gmail.com</p>
                    <div className="skills-images">
                        <a href='https://github.com/VictorMtzCode' target="_blank" rel='noreferrer'>
                            <img className='html-logo skills-logo social-logo' src='Portfolio-Landing/images/github.png' alt="github" />
                        </a>
                        <a href='https://www.linkedin.com/in/victor-martinez-aa5483225/' target="_blank" rel='noreferrer'>
                            <img className='html-logo skills-logo social-logo' src='Portfolio-Landing/images/linkedin.png' alt="linkedin" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactMe
