import './SingleProject.css';
import { useRef } from 'react';
import ProjectImagesCarousel from './ProjectImagesCarousel';
import ContactMe from '../ContactMe/ContactMe';

const StreamVic = () => {
    const featuresSection = useRef(null);
    const goToFeatures = () => {
        window.scrollTo({ top: featuresSection.current.offsetTop })
    }
    return (
        <section className='single-project'>
            <img className='single-project-img' src="./images/streamvic-project.png" alt="" />
            <div data-aos='fade-up' className='project-titles'>
                <h1 className='project-title'>StreamVic</h1>
                <h1 className='project-title-back'>StreamVic</h1>
                <i className="far fa-arrow-alt-circle-down arrow-down" onClick={goToFeatures}></i>
            </div>
            <div className='single-project-overview'>
                <h1>Overview</h1>
                <p className='single-project-p'>StreamVic is a web app built with ReactJs that allows users to browse movie/tv show information and save their favorites. This application uses the TMDB API to fetch movie/tv show data and outputs content dynamically to the webpage. Users can use the API to also search for a particular movie/tv show.</p>
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
                    <h1>Filter</h1>
                    <p className='single-project-p'>The filter component allows the user to display movies/tv shows according to popularity or top rated. This feature required me to manipulate the TMDB API with the useState hook.</p>
                </div>
                <div className='feature-with-photo'>
                    <div className='feature-with-photo-info'>
                        <h1>Pagination</h1>
                        <p className='single-project-p'>The pagination component allows the user to display different pages of movies/tv shows from the filter they choose. With 4 pages total, the end result is 80 total movies/tv shows with 20 results per page. The component can be used by clicking the prev/next buttons or the dots which glow red if that current page is active.</p>
                        <p className='single-project-p'>The previous arrow gets disabled if the page is one & the next arrow also gets disabled if the page is 4. Props are used in this component to get the data needed such as page, maxPages, handlePrevPage/handleNextPage functions etc.</p>
                    </div>
                    <img src="images/streamvic-pagination.png" alt="streamvic-pagination" />
                </div>
                <div className='feature-no-photo'>
                    <h1>Favorites</h1>
                    <p className='single-project-p'>The favorites component was made with a global state. Favorites was placed in a context file and saved in a createContext() for all other components to use. The original state of the favorites is in the localStorage or an empty array if the localStorage is empty.</p>
                </div>
                <div className='feature-with-photo'>
                    <div className='feature-with-photo-info'>
                        <h1>Search</h1>
                        <p className='single-project-p'>The search page was created to allow users to search for any movie or tv show in the TMDB database according to which tab they choose. The movie tab will search for movies & the tv shows tab will search for shows of the search term.</p>
                        <p className='single-project-p'>The input field value is placed in the TMDB API search url dynamically after the form is submitted. If the form is submitted without an input value, an error message will appear to let the user know the value is empty. There is also an error message for a search value that doesn't have any results in the database.</p>
                    </div>
                    <img src="images/streamvic-search.png" alt="streamvic-search" />
                </div>
                <div className='feature-with-photo'>
                    <div className='feature-with-photo-info'>
                        <h1>Details Page</h1>
                        <p className='single-project-p'>The details page is a page that shows relevant information about the movie or tv show you clicked on. I used useParams from react-router-dom to dynamically add the ID of the movie or show the user clicks on to the end of the webpage url and also to insert the ID in the details URL of the TMDB API.</p>
                        <p className='single-project-p'>Details such as an overview, rating, genres, trailer, and cast info is displayed on the page. The option to favorite the movie/show is also avaliable on the details page.</p>
                    </div>
                    <img src="images/streamvic-details.png" alt="streamvic-details" />
                </div>
            </div>

            <ProjectImagesCarousel />
            <div className='contact-div'>
                <ContactMe />
                <i className="far fa-arrow-alt-circle-up arrow-up" onClick={() => window.scrollTo(0, 0)}></i>
            </div>

        </section>
    )
}

export default StreamVic;
