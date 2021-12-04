export const streamVicData = {
    headImage: 'assets/assets-streamvic/streamvic-headphoto.png',
    Overview: {
        title: 'Overview',

        text: 'StreamVic is a web app built with ReactJs that allows users to browse movie/tv show information and save their favorites. This application uses the TMDB API to fetch movie/tv show data and outputs content dynamically to the webpage. Users can use the API to also search for a particular movie/tv show.'
    },

    Filter: {
        title: 'Filter',

        text: 'The filter component allows the user to display movies/tv shows according to popularity or top rated. This feature required me to manipulate the TMDB API with the useState hook.'
    },

    Pagination: {
        title: 'Pagination',

        textOne: 'The pagination component allows the user to display different pages of movies/tv shows from the filter they choose. With 4 pages total, the end result is 80 total movies/tv shows with 20 results per page. The component can be used by clicking the prev/next buttons or the dots which glow red if that current page is active.',

        textTwo: 'The previous arrow gets disabled if the page is one & the next arrow also gets disabled if the page is 4. Props are used in this component to get the data needed such as page, maxPages, handlePrevPage/handleNextPage functions etc.',

        image: 'assets/assets-streamvic/streamvic-pagination.png'
    },

    Favorites: {
        title: 'Favorites',

        text: 'The favorites component was made with a global state. Favorites was placed in a context file and saved in a createContext() for all other components to use. The original state of the favorites is in the localStorage or an empty array if the localStorage is empty.'
    },

    Search: {
        title: 'Search',

        textOne: 'The search page was created to allow users to search for any movie or tv show in the TMDB database according to which tab they choose. The movie tab will search for movies & the tv shows tab will search for shows of the search term.',

        textTwo: "The input field value is placed in the TMDB API search url dynamically after the form is submitted. If the form is submitted without an input value, an error message will appear to let the user know the value is empty. There is also an error message for a search value that doesn't have any results in the database.",

        image: 'assets/assets-streamvic/streamvic-search.png'
    },

    Details: {
        title: 'Details Page',

        textOne: 'The details page is a page that shows relevant information about the movie or tv show you clicked on. I used useParams from react-router-dom to dynamically add the ID of the movie or show the user clicks on to the end of the webpage url and also to insert the ID in the details URL of the TMDB API.',

        textTwo: "Details such as an overview, rating, genres, trailer, and cast info is displayed on the page. The option to favorite the movie/show is also avaliable on the details page.",

        image: 'assets/assets-streamvic/streamvic-details.png'
    },

    CarouselImages: {
        imageOne: 'assets/assets-streamvic/streamvic-movies-slider.png',
        imageTwo: 'assets/assets-streamvic/streamvic-headphoto.png',
        imageThree: 'assets/assets-streamvic/streamvic-details-slider.png'
    }

}