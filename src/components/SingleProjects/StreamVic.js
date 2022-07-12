import "./SingleProject.css";
import { useRef } from "react";
import ProjectImagesCarousel from "./ProjectImagesCarousel";
import ContactMe from "../ContactMe/ContactMe";
import { streamVicData } from "../../ProjectsData";
import { Helmet } from "react-helmet-async";
import MainButton from "../MainButton";
import { FaArrowAltCircleDown, FaArrowAltCircleUp } from "react-icons/fa";

const StreamVic = () => {
  const featuresSection = useRef(null);
  const goToFeatures = () => {
    window.scrollTo({ top: featuresSection.current.offsetTop });
  };
  return (
    <section className="single-project">
      <Helmet>
        <title>StreamVic Project</title>
        <meta name="description" content="StreamVic Project" />
      </Helmet>
      <div className="project-headers">
        <h1 className="single-project-title">StreamVic</h1>
        <MainButton
          link="https://streamvic.netlify.app/"
          text="LIVE SITE"
          type="main-btn secondary-btn"
        />
        <FaArrowAltCircleDown className="arrow-down" onClick={goToFeatures} />
      </div>
      <div className="single-project-overview">
        <h2>{streamVicData.Overview.title}</h2>
        <p className="single-project-p">{streamVicData.Overview.text}</p>
        <span className="title-technologies single-project-technologies">
          <p className="title-technology">React</p>
          <p className="title-technology">HTML5</p>
          <p className="title-technology">CSS</p>
          <p className="title-technology">Rest API</p>
        </span>
      </div>
      <div ref={featuresSection} className="single-project-features">
        <h2 className="features-title">Features</h2>
        <div className="feature-no-photo">
          <h3 className="feature-h3">{streamVicData.Filter.title}</h3>
          <p className="single-project-p">{streamVicData.Filter.text}</p>
        </div>
        <div className="feature-with-photo">
          <div className="feature-with-photo-info">
            <h3 className="feature-h3">{streamVicData.Pagination.title}</h3>
            <p className="single-project-p">
              {streamVicData.Pagination.textOne}
            </p>
            <p className="single-project-p">
              {streamVicData.Pagination.textTwo}
            </p>
          </div>
          <img
            className="feature-img"
            src={streamVicData.Pagination.image}
            alt="Computer and mobile phone next to each other both on the Streamvic application at the bottom of the movie page"
          />
        </div>
        <div className="feature-no-photo">
          <h3 className="feature-h3">{streamVicData.Favorites.title}</h3>
          <p className="single-project-p">{streamVicData.Favorites.text}</p>
        </div>
        <div className="feature-with-photo">
          <div className="feature-with-photo-info">
            <h3 className="feature-h3">{streamVicData.Search.title}</h3>
            <p className="single-project-p">{streamVicData.Search.textOne}</p>
            <p className="single-project-p">{streamVicData.Search.textTwo}</p>
          </div>
          <img
            className="feature-img"
            src={streamVicData.Search.image}
            alt={streamVicData.CarouselImages.imageOneAlt}
          />
        </div>
        <div className="feature-with-photo">
          <div className="feature-with-photo-info">
            <h3 className="feature-h3">{streamVicData.Details.title}</h3>
            <p className="single-project-p">{streamVicData.Details.textOne}</p>
            <p className="single-project-p">{streamVicData.Details.textTwo}</p>
          </div>
          <img
            className="feature-img"
            src={streamVicData.Details.image}
            alt={streamVicData.CarouselImages.imageThreeAlt}
          />
        </div>
        <div className="feature-no-photo">
          <h3 className="feature-h3">Fully Responsive</h3>
          <p className="single-project-p">
            StreamVic is fully responsive to ensure the layout of the movie/show
            cards and the information on different pages are in the best
            position across all device widths. The website is responsive for
            mobile, tablet and desktop devices.
          </p>
        </div>
        <div className="feature-no-photo">
          <h3 className="feature-h3">SEO</h3>
          <p className="single-project-p">
            React Helmet is implemented to dynamically manage the document's
            head section. Each page's title, description, and meta tags are all
            dynamically changed to best represent the current page. This will
            help the app be read by search engines and social media crawlers.
          </p>
        </div>
      </div>

      <ProjectImagesCarousel
        imageOne={streamVicData.CarouselImages.imageOne}
        imageTwo={streamVicData.CarouselImages.imageTwo}
        imageThree={streamVicData.CarouselImages.imageThree}
        imageOneAlt={streamVicData.CarouselImages.imageOneAlt}
        imageTwoAlt={streamVicData.CarouselImages.imageTwoAlt}
        imageThreeAlt={streamVicData.CarouselImages.imageThreeAlt}
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

export default StreamVic;
