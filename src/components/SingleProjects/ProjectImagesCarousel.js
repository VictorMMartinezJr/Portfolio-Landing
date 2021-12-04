import { Carousel } from 'react-responsive-carousel';
import './ProjectImagesCarousel.css'

const ProjectImagesCarousel = () => {
    return (
        <div className='react-carousel'>
            <Carousel showThumbs={false} autoPlay infiniteLoop interval={3000} showStatus={false} showIndicators={false}>
                <div className='carousel-img'>
                    <img src="images/streamvic-movies.png" alt='streamvic' />
                </div>
                <div className='carousel-img'>
                    <img src="images/streamvic-project.png" alt='streamvic' />
                </div>
                <div className='carousel-img'>
                    <img src="images/streamvic-details-slider.png" alt='streamvic' />
                </div>
            </Carousel>
        </div>
    )
}

export default ProjectImagesCarousel
