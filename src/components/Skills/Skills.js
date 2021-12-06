import './Skills.css';
import Stars from '../Stars/Stars';

const Skills = () => {
    return (
        <section className='skills' id='skills'>
            <Stars />
            <div className="skills-content">
                <div data-aos='fade-up' className='aboutme-titles'>
                    <h1 className='aboutme-title'>Skills</h1>
                    <h1 className='aboutme-title-back'>Skills</h1>
                </div>
                <div data-aos='fade-in' data-aos-delay='400' className="skills-images">
                    <div className='skills-logo-container'>
                        <img className='html-logo skills-logo' src='./assets/images/html.png' alt="html-logo" />
                        <p className='skills-logo-name'>HTML</p>
                    </div>
                    <div className='skills-logo-container'>
                        <img className='css-logo skills-logo' src='./assets/images/css.png' alt="css-logo" />
                        <p className='skills-logo-name'>CSS</p>
                    </div>
                    <div className='skills-logo-container'>
                        <img className='js-logo skills-logo' src='./assets/images/js.png' alt="js-logo" />
                        <p className='skills-logo-name'>JavaScript</p>
                    </div>
                    <div className='skills-logo-container'>
                        <img className='react-logo skills-logo' src='./assets/images/react.png' alt="react-logo" />
                        <p className='skills-logo-name'>React</p>
                    </div>
                </div>
                <div data-aos='fade-in' data-aos-delay='500' className='softskills-logos'>
                    <div className='skills-logo-container'>
                        <img className='react-logo skills-logo' src='./assets/images/git.png' alt="git-logo" />
                        <p className='skills-logo-name'>Git</p>
                    </div>
                    <div className='skills-logo-container'>
                        <img className='react-logo skills-logo' src='./assets/images/github.png' alt="github-logo" />
                        <p className='skills-logo-name'>GitHub</p>
                    </div>
                    <div className='skills-logo-container'>
                        <img className='react-logo skills-logo' src='./assets/images/npm.png' alt="npm-logo" />
                        <p className='skills-logo-name'>NPM</p>
                    </div>
                    <div className='skills-logo-container'>
                        <img className='react-logo skills-logo' src='./assets/images/bootstrap.png' alt="bootstrap-logo" />
                        <p className='skills-logo-name'>Bootstrap</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills
