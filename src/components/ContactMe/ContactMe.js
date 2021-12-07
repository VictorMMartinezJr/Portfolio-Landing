import './ContactMe.css';
import Stars from '../Stars/Stars';

const ContactMe = () => {
    return (
        <section className='contact' id='contact'>
            <Stars />
            <div className="contact-content">
                <h1 className='contact-title'>Get in Touch.</h1>
                <p className='contact-info-p'>I'm ready for challenges and opportunities. Please send me an email if you want to chat with me.</p>
                <a className='email-btn' href='mailto: victormtzcodes@gmail.com'>Email Me</a>
            </div>
        </section>
    )
}

export default ContactMe
