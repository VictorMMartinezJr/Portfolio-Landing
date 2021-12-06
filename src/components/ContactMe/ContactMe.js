import './ContactMe.css';
import Stars from '../Stars/Stars';

const ContactMe = () => {
    return (
        <section className='contact' id='contact'>
            <Stars />
            <div className="contact-content">
                <div data-aos='fade-up' className='contact-titles'>
                    <h1 className='contact-title'>Contact</h1>
                    <h1 className='contact-title-back'>Contact</h1>
                </div>
                <div className="contact-info">
                    <p className='contact-info-p'>I'm ready for challenges and opportunities. Please send me an email if you want to chat with me.</p>
                    <p className='email'>victormtzcodes@gmail.com</p>
                    <div className="contact-images">
                        <a href='https://github.com/VictorMtzCode' target="_blank" rel='noreferrer'>
                            <img className='html-logo skills-logo social-logo' src='./images/github.png' alt="github" />
                        </a>
                        <a href='https://www.linkedin.com/in/victor-martinez-aa5483225/' target="_blank" rel='noreferrer'>
                            <img className='html-logo skills-logo social-logo' src='./images/linkedin.png' alt="linkedin" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactMe
