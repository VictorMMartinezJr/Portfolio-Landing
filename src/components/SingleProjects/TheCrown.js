import './SingleProject.css';
import { useRef } from 'react';
import ProjectImagesCarousel from './ProjectImagesCarousel';
import ContactMe from '../ContactMe/ContactMe';
import { theCrownData } from '../../ProjectsData';
import { Helmet } from 'react-helmet-async';
import MainButton from '../MainButton';


const TheCrown = () => {
    const featuresSection = useRef(null);
    const goToFeatures = () => {
        window.scrollTo({ top: featuresSection.current.offsetTop })
    }
    return (
        <section className='single-project'>
            <Helmet>
                <title>The Crown Project</title>
                <meta name='description' content="The Crown Project" />
            </Helmet>
            <div className='project-headers'>
                <h1 className='single-project-title'>The Crown</h1>
                <MainButton link='https://thecrown.netlify.app/' text='LIVE SITE' style={{fontSize: '1.3rem'}} />
                <i className="far fa-arrow-alt-circle-down arrow-down" onClick={goToFeatures}></i>
            </div>
            <div className='single-project-overview'>
                <h1>{theCrownData.Overview.title}</h1>
                <p className='single-project-p'>{theCrownData.Overview.text}</p>
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
                    <h1>{theCrownData.Scroll.title}</h1>
                    <p className='single-project-p'>{theCrownData.Scroll.text}</p>
                </div>
                <div className='feature-with-photo'>
                    <div className='feature-with-photo-info'>
                        <h1>{theCrownData.Cards.title}</h1>
                        <p className='single-project-p'>{theCrownData.Cards.textOne}</p>
                    </div>
                    <img src={theCrownData.Cards.image} alt="thecrown-menu" />
                </div>
                <div className='feature-no-photo'>
                    <h1>Fully Responsive</h1>
                    <p className='single-project-p'>The Crown to ensure the layout of the movie cards and the movie detail information is to best fit the page in different devices without being too overcrowded or too much white space. The website is responsive for mobile, tablet and desktop devices.</p>
                </div>
                <div className='feature-no-photo'>
                    <h1>SEO</h1>
                    <p className='single-project-p'>React Helmet is implemented to dynamically manage the document's head section. Each page's title, description, and meta tags are all dynamically changed to best represent the current page. This will help the app be read by search engines and social media crawlers.</p>
                </div>
            </div>

            <ProjectImagesCarousel imageOne={theCrownData.CarouselImages.imageOne} imageTwo={theCrownData.CarouselImages.imageTwo} imageThree={theCrownData.CarouselImages.imageThree} />
            <div className='contact-div'>
                <ContactMe />
                <i className="far fa-arrow-alt-circle-up arrow-up" onClick={() => window.scrollTo(0, 0)}></i>
            </div>

        </section>
    )
}

export default TheCrown;
