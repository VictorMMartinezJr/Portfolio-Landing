import "./Projects.css";
import Stars from "../../Stars/Stars";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <Helmet>
        <title>VictorMtzCodes Projects</title>
        <meta name="description" content="VictorMtzCodes's Projects" />
      </Helmet>
      <Stars />
      <div className="projects-content">
        <h2 data-aos="fade-up" className="project-title">
          PROJECTS
        </h2>
        <p className="projects-subtitle">
          Some of my recent projects, I'm always working on something new so
          stay turned for more
        </p>
        <div className="projects-info">
          {/*anime shoppe project */}
          <div data-aos="fade-left" className="project-container">
            <div className="project-container-content left-image">
              <LazyLoadImage
                src="./assets/assets-animeshoppe/anime-attire-project.png"
                alt="anime-shoppe"
              />
              <div className="project-header">
                <h4 className="project-head">Anime Shoppe</h4>
                <span className="title-technologies">
                  <p className="title-technology">React</p>
                  <p className="title-technology">HTML5</p>
                  <p className="title-technology">CSS</p>
                </span>
                <p className="project-description">
                  A dynamic web app built for an anime shop.
                </p>
                <span className="title-links">
                  <a
                    href="https://anime-attire.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <p className="title-link">Live Site</p>
                  </a>
                  <a
                    href="https://github.com/VictorMtzCode/Anime-Shoppe"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <p className="title-link">GitHub</p>
                  </a>
                  <NavLink
                    to="/animeshoppe"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    <p className="title-link">Learn More</p>
                  </NavLink>
                </span>
              </div>
            </div>
          </div>
          {/* MERN Chat project */}
          <div data-aos="fade-right" className="project-container">
            <div className="project-container-content">
              <div className="project-header">
                <h4 className="project-head">Chit Chat</h4>
                <span className="title-technologies">
                  <p className="title-technology">Mongo DB</p>
                  <p className="title-technology">Express</p>
                  <p className="title-technology">React</p>
                  <p className="title-technology">NodeJS</p>
                </span>
                <p className="project-description">
                  A web app built using the MERN stack that allows users to
                  create/edit groupchats & single chats, send messages, search
                  for users, and uses JWT tokens for real authentication for
                  logging in and signing up.
                </p>
                <span className="title-links">
                  <a
                    href="https://chit-chat-victormtzcodes.herokuapp.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <p className="title-link">Live Site</p>
                  </a>
                  <a
                    href="https://github.com/VictorMtzCode/MERN-Chat-App"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <p className="title-link">GitHub</p>
                  </a>
                  <NavLink to="/chitchat" onClick={() => window.scrollTo(0, 0)}>
                    <p className="title-link">Learn More</p>
                  </NavLink>
                </span>
              </div>
              <LazyLoadImage
                src="./assets/assets-chit-chat/chat-project.png"
                alt="streamvic"
              />
            </div>
          </div>
          {/* streamvic movie project */}
          <div data-aos="fade-left" className="project-container">
            <div className="project-container-content left-image">
              <LazyLoadImage
                src="./assets/assets-streamvic/streamvic-project.png"
                alt="streamvic"
              />
              <div className="project-header">
                <h4 className="project-head">StreamVic</h4>
                <span className="title-technologies">
                  <p className="title-technology">React</p>
                  <p className="title-technology">HTML5</p>
                  <p className="title-technology">CSS</p>
                  <p className="title-technology">Rest API</p>
                </span>
                <p className="project-description">
                  A dynamic web app for users to browse, search, & favorite
                  movies/tvshows.
                </p>
                <span className="title-links">
                  <a
                    href="https://streamvic.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <p className="title-link">Live Site</p>
                  </a>
                  <a
                    href="https://github.com/VictorMtzCode/streamvic"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <p className="title-link">GitHub</p>
                  </a>
                  <NavLink
                    to="/streamvic"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    <p className="title-link">Learn More</p>
                  </NavLink>
                </span>
              </div>
            </div>
          </div>
          {/*Italian Pie pizza restaurant project */}
          <div data-aos="fade-right" className="project-container">
            <div className="project-container-content">
              <div className="project-header">
                <h4 className="project-head">Italian Pie</h4>
                <span className="title-technologies">
                  <p className="title-technology">HTML5</p>
                  <p className="title-technology">CSS</p>
                  <p className="title-technology">JavaScript</p>
                  <p className="title-technology">GSAP</p>
                </span>
                <p className="project-description">
                  A dynamic web application UI for a pizza shop.
                </p>
                <span className="title-links">
                  <a
                    href="https://italianpie.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <p className="title-link">Live Site</p>
                  </a>
                  <a
                    href="https://github.com/VictorMtzCode/PizzaRestaurant"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <p className="title-link">GitHub</p>
                  </a>
                  <NavLink
                    to="/italianpie"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    <p className="title-link">Learn More</p>
                  </NavLink>
                </span>
              </div>
              <LazyLoadImage
                src="./assets/assets-italianpie/pizza-ui.png"
                alt="italian-pie"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
