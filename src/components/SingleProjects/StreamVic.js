import './SingleProject.css';
import { useRef } from 'react';
import ProjectImagesCarousel from './ProjectImagesCarousel';
import ContactMe from '../ContactMe/ContactMe';
import { streamVicData } from '../../ProjectsData';

const StreamVic = () => {
    const featuresSection = useRef(null);
    const goToFeatures = () => {
        window.scrollTo({ top: featuresSection.current.offsetTop })
    }
    return (
        <section className='single-project'>
            <img className='single-project-img' src={streamVicData.headImage} alt="" />
            <div data-aos='fade-up' className='project-titles'>
                <h1 className='project-title'>StreamVic</h1>
                <h1 className='project-title-back'>StreamVic</h1>
                <i className="far fa-arrow-alt-circle-down arrow-down" onClick={goToFeatures}></i>
            </div>
            <div className='single-project-overview'>
                <h1>{streamVicData.Overview.title}</h1>
                <p className='single-project-p'>{streamVicData.Overview.text}</p>
                <span className='title-technologies'>
                    <p className='title-technology'>React</p>
                    <p className='title-technology'>HTML5</p>
                    <p className='title-technology'>CSS</p>
                    <p className='title-technology'>Rest API</p>
                </span>
            </div>
            <div ref={featuresSection} className='single-project-features'>
                <h1 className='features-title'>Features</h1>
                <div className='feature-no-photo'>
                    <h1>{streamVicData.Filter.title}</h1>
                    <p className='single-project-p'>{streamVicData.Filter.text}</p>
                </div>
                <div className='feature-with-photo'>
                    <div className='feature-with-photo-info'>
                        <h1>{streamVicData.Pagination.title}</h1>
                        <p className='single-project-p'>{streamVicData.Pagination.textOne}</p>
                        <p className='single-project-p'>{streamVicData.Pagination.textTwo}</p>
                    </div>
                    <img src={streamVicData.Pagination.image} alt="streamvic-pagination" />
                </div>
                <div className='feature-no-photo'>
                    <h1>{streamVicData.Favorites.title}</h1>
                    <p className='single-project-p'>{streamVicData.Favorites.text}</p>
                </div>
                <div className='feature-with-photo'>
                    <div className='feature-with-photo-info'>
                        <h1>{streamVicData.Search.title}</h1>
                        <p className='single-project-p'>{streamVicData.Search.textOne}</p>
                        <p className='single-project-p'>{streamVicData.Search.textTwo}</p>
                    </div>
                    <img src={streamVicData.Search.image} alt="streamvic-search" />
                </div>
                <div className='feature-with-photo'>
                    <div className='feature-with-photo-info'>
                        <h1>{streamVicData.Details.title}</h1>
                        <p className='single-project-p'>{streamVicData.Details.textOne}</p>
                        <p className='single-project-p'>{streamVicData.Details.textTwo}</p>
                    </div>
                    <img src={streamVicData.Details.image} alt="streamvic-details" />
                </div>
                <div className='feature-no-photo'>
                    <h1>Fully Responsive</h1>
                    <p className='single-project-p'>StreamVic is fully responsive to ensure the layout of the movie/show cards and the information on different pages are in the best position across all device widths. The website is responsive for mobile, tablet and desktop devices.</p>
                </div>
                <div className='feature-no-photo'>
                    <h1>SEO</h1>
                    <p className='single-project-p'>React Helmet is implemented to dynamically manage the document's head section. Each page's title, description, and meta tags are all dynamically changed to best represent the current page. This will help the app be read by search engines and social media crawlers.</p>
                </div>S
            </div>

            <ProjectImagesCarousel imageOne={streamVicData.CarouselImages.imageOne} imageTwo={streamVicData.CarouselImages.imageTwo} imageThree={streamVicData.CarouselImages.imageThree} />
            <div className='contact-div'>
                <ContactMe />
                <i className="far fa-arrow-alt-circle-up arrow-up" onClick={() => window.scrollTo(0, 0)}></i>
            </div>

        </section>
    )
}

export default StreamVic;
