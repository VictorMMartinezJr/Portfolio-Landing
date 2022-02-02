import './Skills.css';
import Stars from '../Stars/Stars';

const Skills = () => {
    return (
        <section className='skills' id='skills'>
            <Stars />
            <div className="skills-content">
                <h1 data-aos='fade-up' className='skills-title'>My Skills</h1>
                <div data-aos='fade-in' className="skills-images">
                    <div className='skills-logo-container'>
                        <img className='skills-logo' src='./assets/images/html.svg' alt="html-logo" />
                        <p className='skills-logo-name'>HTML</p>
                    </div>
                    <div className='skills-logo-container'>
                        <img className='skills-logo' src='./assets/images/css.svg' alt="css-logo" />
                        <p className='skills-logo-name'>CSS</p>
                    </div>
                    <div className='skills-logo-container'>
                        <img className='skills-logo' src='./assets/images/javaScript.svg' alt="js-logo" />
                        <p className='skills-logo-name'>JavaScript</p>
                    </div>
                    <div className='skills-logo-container'>
                        <img className='skills-logo' src='./assets/images/react.svg' alt="react-logo" />
                        <p className='skills-logo-name'>React</p>
                    </div>
                </div>
                <div data-aos='fade-in' className='softskills-logos'>
                    <div className='skills-logo-container'>
                        <img className='skills-logo' src='./assets/images/git.svg' alt="git-logo" />
                        <p className='skills-logo-name'>Git</p>
                    </div>
                    <div className='skills-logo-container'>
                        <img className='skills-logo' src='./assets/images/github.svg' alt="github-logo" />
                        <p className='skills-logo-name'>GitHub</p>
                    </div>
                    <div className='skills-logo-container'>
                        <img className='skills-logo' src='./assets/images/figma.svg' alt="figma-logo" />
                        <p className='skills-logo-name'>Figma</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills
