import './SingleProject.css';
import { useRef } from 'react';
import ProjectImagesCarousel from './ProjectImagesCarousel';
import ContactMe from '../ContactMe/ContactMe';
import { animeShoppeData } from '../../ProjectsData';
import { Helmet } from 'react-helmet-async';
import MainButton from '../MainButton';

const AnimeShoppe = () => {
    const featuresSection = useRef(null);
    const goToFeatures = () => {
        window.scrollTo({ top: featuresSection.current.offsetTop })
    }
    return (
        <section className='single-project'>
            <Helmet>
                <title>Anime Shoppe Project</title>
                <meta name='description' content="Anime Shoppe Project" />
            </Helmet>
            <div className='project-headers'>
                <h1 className='single-project-title'>Anime Shoppe</h1>
                <MainButton link='https://anime-shoppe.netlify.app/' text='LIVE SITE' style={{fontSize: '1.3rem'}} />
                <i className="far fa-arrow-alt-circle-down arrow-down" onClick={goToFeatures}></i>
            </div>
            <div className='single-project-overview'>
                <h1>{animeShoppeData.Overview.title}</h1>
                <p className='single-project-p'>{animeShoppeData.Overview.text}</p>
                <span className='title-technologies'>
                    <p className='title-technology'>React</p>
                    <p className='title-technology'>HTML5</p>
                    <p className='title-technology'>CSS</p>
                </span>
            </div>
            <div ref={featuresSection} className='single-project-features'>
                <h1 className='features-title'>Features</h1>
                <div className='feature-no-photo'>
                    <h1>{animeShoppeData.Filter.title}</h1>
                    <p className='single-project-p'>{animeShoppeData.Filter.text}</p>
                </div>

                <div className='feature-with-photo'>
                    <div className='feature-with-photo-info'>
                        <h1>{animeShoppeData.LoadMore.title}</h1>
                        <p className='single-project-p'>{animeShoppeData.LoadMore.textOne}</p>
                    </div>
                    <img src={animeShoppeData.LoadMore.image} alt="animeshoppe-loadmore" />
                </div>
                <div className='feature-no-photo'>
                    <h1>{animeShoppeData.Search.title}</h1>
                    <p className='single-project-p'>{animeShoppeData.Search.text}</p>
                </div>
                <div className='feature-with-photo'>
                    <div className='feature-with-photo-info'>
                        <h1>{animeShoppeData.Products.title}</h1>
                        <p className='single-project-p'>{animeShoppeData.Products.textOne}</p>
                        <p className='single-project-p'>{animeShoppeData.Products.textTwo}</p>
                    </div>
                    <img src={animeShoppeData.Products.image} alt="animeshoppe-products" />
                </div>
                <div className='feature-with-photo'>
                    <div className='feature-with-photo-info'>
                        <h1>{animeShoppeData.Cart.title}</h1>
                        <p className='single-project-p'>{animeShoppeData.Cart.textOne}</p>
                        <p className='single-project-p'>{animeShoppeData.Cart.textTwo}</p>
                    </div>
                    <img src={animeShoppeData.Cart.image} alt="animeshoppe-cart" />
                </div>
                <div className='feature-no-photo'>
                    <h1>Fully Responsive</h1>
                    <p className='single-project-p'>Anime Shoppe is fully responsive to ensure the layout of the product cards on the screen are in the best position across all device widths. The website is responsive for mobile, tablet and desktop devices.</p>
                </div>
                <div className='feature-no-photo'>
                    <h1>SEO</h1>
                    <p className='single-project-p'>React Helmet is implemented to dynamically manage the document's head section. Each page's title, description, and meta tags are all dynamically changed to best represent the current page. This will help the app be read by search engines and social media crawlers.</p>
                </div>
            </div>

            <ProjectImagesCarousel imageOne={animeShoppeData.CarouselImages.imageOne} imageTwo={animeShoppeData.CarouselImages.imageTwo} imageThree={animeShoppeData.CarouselImages.imageThree} />
            <div className='contact-div'>
                <ContactMe />
                <i className="far fa-arrow-alt-circle-up arrow-up" onClick={() => window.scrollTo(0, 0)}></i>
            </div>

        </section>
    )
}

export default AnimeShoppe;
