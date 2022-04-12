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
        <h1>{italianPieData.Overview.title}</h1>
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
        <h1 className="features-title">Features</h1>
        <div className="feature-no-photo">
          <h1 className="feature-h1">{italianPieData.Svg.title}</h1>
          <p className="single-project-p">{italianPieData.Svg.text}</p>
        </div>
        <div className="feature-no-photo">
          <h1 className="feature-h1">{italianPieData.PageTransitions.title}</h1>
          <p className="single-project-p">
            {italianPieData.PageTransitions.text}
          </p>
        </div>
        <div className="feature-with-photo">
          <div className="feature-with-photo-info">
            <h1 className="feature-h1">
              {italianPieData.ScrollAnimations.title}
            </h1>
            <p className="single-project-p">
              {italianPieData.ScrollAnimations.textOne}
            </p>
          </div>
          <img
            className="feature-img"
            src={italianPieData.ScrollAnimations.image}
            alt="streamvic-pagination"
          />
        </div>
        <div className="feature-no-photo">
          <h1 className="feature-h1">Fully Responsive</h1>
          <p className="single-project-p">
            The Crown to ensure the layout of the movie cards and the movie
            detail information is to best fit the page in different devices
            without being too overcrowded or too much white space. The website
            is responsive for mobile, tablet and desktop devices.
          </p>
        </div>
        <div className="feature-no-photo">
          <h1 className="feature-h1">SEO</h1>
          <p className="single-project-p">
            React Helmet is implemented to dynamically manage the document's
            head section. Each page's title, description, and meta tags are all
            dynamically changed to best represent the current page. This will
            help the app be read by search engines and social media crawlers.
          </p>
        </div>
      </div>

      <ProjectImagesCarousel
        imageOne={italianPieData.CarouselImages.imageOne}
        imageTwo={italianPieData.CarouselImages.imageTwo}
        imageThree={italianPieData.CarouselImages.imageThree}
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
