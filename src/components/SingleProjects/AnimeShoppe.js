import "./SingleProject.css";
import { useRef } from "react";
import ProjectImagesCarousel from "./ProjectImagesCarousel";
import ContactMe from "../ContactMe/ContactMe";
import { animeShoppeData } from "../../ProjectsData";
import { Helmet } from "react-helmet-async";
import MainButton from "../MainButton";
import { FaArrowAltCircleDown, FaArrowAltCircleUp } from "react-icons/fa";

const AnimeShoppe = () => {
  const featuresSection = useRef(null);
  const goToFeatures = () => {
    window.scrollTo({ top: featuresSection.current.offsetTop });
  };
  return (
    <section className="single-project">
      <Helmet>
        <title>Anime Shoppe Project</title>
        <meta name="description" content="Anime Shoppe Project" />
      </Helmet>
      <div className="project-headers">
        <h1 className="single-project-title">Anime Shoppe</h1>
        <MainButton
          link="https://anime-attire.netlify.app/"
          text="LIVE SITE"
          type="main-btn secondary-btn"
        />
        <FaArrowAltCircleDown className="arrow-down" onClick={goToFeatures} />
      </div>
      <div className="single-project-overview">
        <h2>{animeShoppeData.Overview.title}</h2>
        <p className="single-project-p">{animeShoppeData.Overview.text}</p>
        <span className="title-technologies single-project-technologies">
          <p className="title-technology">React</p>
          <p className="title-technology">HTML5</p>
          <p className="title-technology">CSS</p>
        </span>
      </div>
      <div ref={featuresSection} className="single-project-features">
        <h2 className="features-title">Features</h2>
        <div className="feature-no-photo">
          <h3 className="feature-h3">{animeShoppeData.Filter.title}</h3>
          <p className="single-project-p">{animeShoppeData.Filter.text}</p>
        </div>

        <div className="feature-with-photo">
          <div className="feature-with-photo-info">
            <h3 className="feature-h3">{animeShoppeData.LoadMore.title}</h3>
            <p className="single-project-p">
              {animeShoppeData.LoadMore.textOne}
            </p>
          </div>
          <img
            className="feature-img"
            src={animeShoppeData.LoadMore.image}
            alt="animeshoppe-loadmore"
          />
        </div>
        <div className="feature-no-photo">
          <h3 className="feature-h3">{animeShoppeData.Search.title}</h3>
          <p className="single-project-p">{animeShoppeData.Search.text}</p>
        </div>
        <div className="feature-with-photo">
          <div className="feature-with-photo-info">
            <h3 className="feature-h3">{animeShoppeData.Products.title}</h3>
            <p className="single-project-p">
              {animeShoppeData.Products.textOne}
            </p>
            <p className="single-project-p">
              {animeShoppeData.Products.textTwo}
            </p>
          </div>
          <img
            className="feature-img"
            src={animeShoppeData.Products.image}
            alt="animeshoppe-products"
          />
        </div>
        <div className="feature-with-photo">
          <div className="feature-with-photo-info">
            <h3 className="feature-h3">{animeShoppeData.Cart.title}</h3>
            <p className="single-project-p">{animeShoppeData.Cart.textOne}</p>
            <p className="single-project-p">{animeShoppeData.Cart.textTwo}</p>
          </div>
          <img
            className="feature-img"
            src={animeShoppeData.Cart.image}
            alt="animeshoppe-cart"
          />
        </div>
        <div className="feature-no-photo">
          <h3 className="feature-h3">Fully Responsive</h3>
          <p className="single-project-p">
            Anime Shoppe is fully responsive to ensure the layout of the product
            cards on the screen are in the best position across all device
            widths. The website is responsive for mobile, tablet and desktop
            devices.
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
        imageOne={animeShoppeData.CarouselImages.imageOne}
        imageTwo={animeShoppeData.CarouselImages.imageTwo}
        imageThree={animeShoppeData.CarouselImages.imageThree}
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

export default AnimeShoppe;
