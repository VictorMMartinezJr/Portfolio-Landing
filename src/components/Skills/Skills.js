import "./Skills.css";
import Stars from "../Stars/Stars";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <Stars />
      <div data-aos="zoom-in" className="skills-content">
        <h2 className="skills-title">My Skills</h2>
        <div className="skills-images-container">
          <div className="skills-top-images">
            <div className="skills-logo-container">
              <LazyLoadImage
                className="skills-logo"
                src="./assets/images/html.svg"
                alt="html-logo"
              />
              <p className="skills-logo-name">HTML</p>
            </div>
            <div className="skills-logo-container">
              <LazyLoadImage
                className="skills-logo"
                src="./assets/images/css.svg"
                alt="css-logo"
              />
              <p className="skills-logo-name">CSS</p>
            </div>
            <div className="skills-logo-container">
              <LazyLoadImage
                className="skills-logo"
                src="./assets/images/javaScript.svg"
                alt="js-logo"
              />
              <p className="skills-logo-name">JavaScript</p>
            </div>
            <div className="skills-logo-container">
              <LazyLoadImage
                className="skills-logo"
                src="./assets/images/react.svg"
                alt="react-logo"
              />
              <p className="skills-logo-name">React</p>
            </div>
          </div>
          <div className="skills-bottom-images">
            <div className="skills-logo-container">
              <LazyLoadImage
                className="skills-logo"
                src="./assets/images/git.svg"
                alt="git-logo"
              />
              <p className="skills-logo-name">Git</p>
            </div>
            <div className="skills-logo-container">
              <LazyLoadImage
                className="skills-logo"
                src="./assets/images/github.svg"
                alt="github-logo"
              />
              <p className="skills-logo-name">GitHub</p>
            </div>
            <div className="skills-logo-container">
              <LazyLoadImage
                className="skills-logo"
                src="./assets/images/tailwindcss.svg"
                alt="tailwindcss-logo"
              />
              <p className="skills-logo-name">Tailwind</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
