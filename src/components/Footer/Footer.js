import './Footer.css'

const Footer = () => {
    return (
        <section className='footer'>
            <ul className="footer-socials">
                <a href='https://github.com/VictorMtzCode' target="_blank" rel='noreferrer' className="footer-social"><i className="fab fa-github"></i></a>
                <a href='https://www.linkedin.com/in/victor-martinez-aa5483225/' target="_blank" rel='noreferrer' className="footer-social"><i className="fab fa-linkedin-in"></i></a>
                <a href='mailto: victormtzcodes@gmail.com' className="footer-social"><i className="far fa-envelope"></i></a>
            </ul>
            <span className='footer-copyright'>
            <i className="far fa-copyright copyright-i"></i>
            <p> Copyright 2022 <a href='https://victormtzcodes.com/' target="_blank" rel="noopener noreferrer">VictorMtzCodes</a></p>
            </span>
        </section>
    )
}

export default Footer;