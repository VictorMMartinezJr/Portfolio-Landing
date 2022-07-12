import { Carousel } from "react-responsive-carousel";
import "./ProjectImagesCarousel.css";

const ProjectImagesCarousel = ({
  imageOne,
  imageTwo,
  imageThree,
  imageOneAlt,
  imageTwoAlt,
  imageThreeAlt,
}) => {
  return (
    <div className="react-carousel">
      <Carousel
        showThumbs={false}
        autoPlay
        infiniteLoop
        interval={2000}
        showStatus={false}
        showIndicators={false}
      >
        <div className="carousel-img">
          <img src={imageOne} alt={imageOneAlt} />
        </div>
        <div className="carousel-img">
          <img src={imageTwo} alt={imageTwoAlt} />
        </div>
        <div className="carousel-img">
          <img src={imageThree} alt={imageThreeAlt} />
        </div>
      </Carousel>
    </div>
  );
};

export default ProjectImagesCarousel;
