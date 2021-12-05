import { Carousel } from 'react-responsive-carousel';
import './ProjectImagesCarousel.css'

const ProjectImagesCarousel = ({ imageOne, imageTwo, imageThree }) => {
    return (
        <div className='react-carousel'>
            <Carousel showThumbs={false} autoPlay infiniteLoop interval={2000} showStatus={false} showIndicators={false}>
                <div className='carousel-img'>
                    <img src={imageOne} alt='streamvic' />
                </div>
                <div className='carousel-img'>
                    <img src={imageTwo} alt='streamvic' />
                </div>
                <div className='carousel-img'>
                    <img src={imageThree} alt='streamvic' />
                </div>
            </Carousel>
        </div>
    )
}

export default ProjectImagesCarousel
