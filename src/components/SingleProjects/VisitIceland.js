import './SingleProject.css';
import { useRef } from 'react';
import ProjectImagesCarousel from './ProjectImagesCarousel';
import ContactMe from '../ContactMe/ContactMe';
import { visitIcelandData } from '../../ProjectsData';
import { Helmet } from 'react-helmet-async';
import MainButton from '../MainButton';

const VisitIceland = () => {
    const featuresSection = useRef(null);
    const goToFeatures = () => {
        window.scrollTo({ top: featuresSection.current.offsetTop })
    }

    return (
        <section className='single-project'>
            <Helmet>
                <title>Visit Iceland Project</title>
                <meta name='description' content="Visit Iceland Project" />
            </Helmet>
            <div className='project-headers'>
                <h1 className='single-project-title'>Visit Iceland</h1>
                <MainButton link='https://traveltoiceland.netlify.app/' text='LIVE SITE' style={{fontSize: '1.3rem'}} />
                <i className="far fa-arrow-alt-circle-down arrow-down" onClick={goToFeatures}></i>
            </div>
            <div className='single-project-overview'>
                <h1>{visitIcelandData.Overview.title}</h1>
                <p className='single-project-p'>{visitIcelandData.Overview.text}</p>
                <span className='title-technologies'>
                    <p className='title-technology'>React</p>
                    <p className='title-technology'>HTML5</p>
                    <p className='title-technology'>CSS</p>
                </span>
            </div>
            <div ref={featuresSection} className='single-project-features'>
                <h1 className='features-title'>Features</h1>
                <div className='feature-no-photo'>
                    <h1>{visitIcelandData.RoutesAnimation.title}</h1>
                    <p className='single-project-p'>{visitIcelandData.RoutesAnimation.text}</p>
                </div>

                <div className='feature-with-photo'>
                    <div className='feature-with-photo-info'>
                        <h1>{visitIcelandData.SightsCarousel.title}</h1>
                        <p className='single-project-p'>{visitIcelandData.SightsCarousel.text}</p>
                    </div>
                    <img src={visitIcelandData.SightsCarousel.image} alt="visiticeland-sightscarousel" />
                </div>
                <div className='feature-no-photo'>
                    <div className='feature-with-photo-info'>
                        <h1>{visitIcelandData.ExploreCarousels.title}</h1>
                        <p className='single-project-p'>{visitIcelandData.ExploreCarousels.textOne}</p>
                    </div>
                </div>
                <div className='feature-with-photo'>
                    <div className='feature-with-photo-info'>
                        <h1>{visitIcelandData.Contact.title}</h1>
                        <p className='single-project-p'>{visitIcelandData.Contact.textOne}</p>
                        <p className='single-project-p'>{visitIcelandData.Contact.textTwo}</p>
                    </div>
                    <img src={visitIcelandData.Contact.image} alt="visiticeland-contact" />
                </div>
                <div className='feature-no-photo'>
                    <h1>Fully Responsive</h1>
                    <p className='single-project-p'>Visit Iceland is fully responsive to ensure the layout of the carousels and the information on the screen are in the best position across all device widths. The website is responsive for mobile, tablet and desktop devices.</p>
                </div>
                <div className='feature-no-photo'>
                    <h1>SEO</h1>
                    <p className='single-project-p'>React Helmet is implemented to dynamically manage the document's head section. Each page's title, description, and meta tags are all dynamically changed to best represent the current page. This will help the app be read by search engines and social media crawlers.</p>
                </div>
            </div>

            <ProjectImagesCarousel imageOne={visitIcelandData.CarouselImages.imageOne} imageTwo={visitIcelandData.CarouselImages.imageTwo} imageThree={visitIcelandData.CarouselImages.imageThree} />
            <div className='contact-div'>
                <ContactMe />
                <i className="far fa-arrow-alt-circle-up arrow-up" onClick={() => window.scrollTo(0, 0)}></i>
            </div>

        </section>
    )
}

export default VisitIceland;
