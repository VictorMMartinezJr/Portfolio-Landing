import "./SingleProject.css";
import { useRef } from "react";
import ProjectImagesCarousel from "./ProjectImagesCarousel";
import ContactMe from "../ContactMe/ContactMe";
import { italianPieData } from "../../ProjectsData";
import { Helmet } from "react-helmet-async";
import MainButton from "../MainButton";
import { FaArrowAltCircleDown, FaArrowAltCircleUp } from "react-icons/fa";

const TheCrown = () => {
  const featuresSection = useRef(null);
  const goToFeatures = () => {
    window.scrollTo({ top: featuresSection.current.offsetTop });
  };
  return (
    <section className="single-project">
      <Helmet>
        <title>Italian Pie Project</title>
        <meta name="description" content="Italian Pie Project" />
      </Helmet>
      <div className="project-headers">
        <h1 className="single-project-title">Italian Pie</h1>
        <MainButton
          link="https://italianpie.netlify.app/"
          text="LIVE SITE"
          type="main-btn secondary-btn"
        />
        <FaArrowAltCircleDown className="arrow-down" onClick={goToFeatures} />
      </div>
      <div className="single-project-overview">
        <h2>{italianPieData.Overview.title}</h2>
        <p className="single-project-p">{italianPieData.Overview.text}</p>
        <span className="title-technologies single-project-technologies">
          <p className="title-technology">HTML5</p>
          <p className="title-technology">CSS</p>
          <p className="title-technology">JavaScript</p>
          <p className="title-technology">GSAP</p>
          <p className="title-technology">Barba JS</p>
        </span>
      </div>
      <div ref={featuresSection} className="single-project-features">
        <h2 className="features-title">Features</h2>
        <div className="feature-no-photo">
          <h3 className="feature-h3">{italianPieData.LoadAnimation.title}</h3>
          <p className="single-project-p">
            {italianPieData.LoadAnimation.text}
          </p>
        </div>
        <div className="feature-no-photo">
          <h3 className="feature-h3">{italianPieData.PageTransitions.title}</h3>
          <p className="single-project-p">
            {italianPieData.PageTransitions.text}
          </p>
        </div>
        <div className="feature-no-photo">
          <h3 className="feature-h3">
            {italianPieData.ScrollAnimations.title}
          </h3>
          <p className="single-project-p">
            {italianPieData.ScrollAnimations.text}
          </p>
        </div>
        <div className="feature-no-photo">
          <h3 className="feature-h3">Fully Responsive</h3>
          <p className="single-project-p">
            Media queries are used to make this website fully responsive,
            allowing it to be accessible to everyone on any type of device.
          </p>
        </div>
        <div className="feature-no-photo">
          <h3 className="feature-h3">Accessibility</h3>
          <p className="single-project-p">
            This website is created with accessibility in mind and complies with
            the WCAG 2 1 guidlines.
          </p>
        </div>
      </div>

      <ProjectImagesCarousel
        imageOne={italianPieData.CarouselImages.imageOne}
        imageTwo={italianPieData.CarouselImages.imageTwo}
        imageThree={italianPieData.CarouselImages.imageThree}
        imageOneAlt={italianPieData.CarouselImages.imageOneAlt}
        imageTwoAlt={italianPieData.CarouselImages.imageTwoAlt}
        imageThreeAlt={italianPieData.CarouselImages.imageThreeAlt}
      />
      <div className="contact-div">
        <ContactMe />
        <FaArrowAltCircleUp
          className="arrow-up"
          onClick={() => window.scrollTo(0, 0)}
        />
      </div>
    </section>
  );
};

export default TheCrown;
