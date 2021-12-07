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

export const animeShoppeData = {
    headImage: 'assets/assets-animeshoppe/animeshoppe-headphoto.png',
    Overview: {
        title: 'Overview',

        text: 'Anime Shoppe is a web app built with ReactJs for an anime store. It allows users to view, search, sort, and add/remove items from their cart. I used  custom data for the products of the application and used the Context API + useReducer hook to create a global state for the cart. This allows users to add/remove items from the cart and keep items in the cart when they visit the checkout page. The checkout page has a working total amount that updates when an item is removed or added to the cart.'
    },

    Filter: {
        title: 'Filter',

        text: 'The filter component allows the user to display the data by price low to high or high to low. I use a product dispatch action depending on what the user chooses and give the appropriate payload to the dispatch to change the data order.'
    },

    LoadMore: {
        title: 'Load More',

        textOne: "The load more component uses props to load more data on click. With every click 8 more products get rendered and the button disappears if the there isn't enough products left to render",

        image: 'assets/assets-animeshoppe/animeshoppe-loadmore.png'
    },
    Search: {
        title: 'Search',

        text: 'The search page was created to allow users to search for a specific product. A product will be searched for in accordance to the tab the user is on. A dispatch is called when the search form is submitted and the search term is then passed as the dispatch payload.',
    },

    Products: {
        title: 'Cart Products',

        textOne: 'The add to cart feature was implemented using the global state and a dispatch. The item that you choose to add to the cart is passed as a payload to the dispatch which adds the product to the global cart array. If the product does not exist in the global cart array, an "Add to Cart button is rendered"',

        textTwo: "The remove from cart feature was implemented using the global state and a dispatch as well. The item that you choose to remove from the cart is passed as a payload to the dispatch which filters the cart array and checks for any id that matches the product id, then removes it. If the product exists in the global cart array, a 'Remove from Cart' button is rendered",

        image: 'assets/assets-animeshoppe/animeshoppe-products.png'
    },

    Cart: {
        title: 'Cart Page',

        textOne: 'The cart page displays the current items that are in ther global cart array. Information such as the total price of all the items in the cart and the number of items in cart can be found on the cart page.',

        textTwo: "Each item is given a remove button that removes the item from the cart and the cart pagee. The total price of all the items will then update in real time to the correct amount of all the items still in the cart.",

        image: 'assets/assets-animeshoppe/animeshoppe-cart.png'
    },

    CarouselImages: {
        imageOne: 'assets/assets-animeshoppe/animeshoppe-headphoto.png',
        imageTwo: 'assets/assets-animeshoppe/animeshoppe-cart-slider.png',
        imageThree: 'assets/assets-animeshoppe/animeshoppe-search-slider.png'
    }
}

export const visitIcelandData = {
    headImage: 'assets/assets-visiticeland/visiticeland-headphoto.png',
    Overview: {
        title: 'Overview',

        text: 'Visit Iceland is a web app built with ReactJs that allows users who want to visit the country of Iceland to browse information on it. Users can browse activities, sights, and important info regarding the travel to iceland. This application was built using the Framer-Motion & AOS libraries to add animations to routes and sections. The application also has a contact form with a popup window and working form validation.'
    },

    RoutesAnimation: {
        title: 'Routes Animation',

        text: 'The framer-motion library was implemented to add route transition animations. A fade out/in animation is triggered when any page is changed.',
    },

    SightsCarousel: {
        title: 'Sights Carousel',

        text: 'The sights carousel is implemented using the react alice carousel library. The data is fetched from a different file and maps through the data fetching the id, image, and the name.',

        image: 'assets/assets-visiticeland/visiticeland-sightscarousel.png'
    },

    ExploreCarousels: {
        title: 'Explore Carousel',

        textOne: "The explore carousels are implemented using react bootstraps' carousel. The data is passed as a prop and is fetched from a different file which then maps through the data fetching the id and an image. The carousels appear through animations created by the AOS library.",

        image: 'assets/assets-visiticeland/visiticeland-explorecarousel.png'
    },

    Contact: {
        title: 'Contact Page',

        textOne: 'The contact page has empty input and email validation. If an input is empty, a error message appears under the empty input. If the email is not valid, an error appears under the email input letting the user know.',

        textTwo: 'The contact page also as a modal pop up that appears when all inputs are filled out correctly.',

        image: 'assets/assets-visiticeland/visiticeland-contact.png'
    },

    CarouselImages: {
        imageOne: 'assets/assets-visiticeland/visiticeland-headphoto.png',
        imageTwo: 'assets/assets-visiticeland/visiticeland-sights-slider.png',
        imageThree: 'assets/assets-visiticeland/visiticeland-contact-slider.png'
    }
}

export const theCrownData = {
    headImage: 'assets/assets-thecrown/thecrown-headphoto.png',
    Overview: {
        title: 'Overview',

        text: 'The Crown is a single page web app built with ReactJs for a high end restaurant in downtown Atlanta. It uses the AOS library to add animations on sections as the user scrolls down the website.'
    },

    Scroll: {
        title: 'Scroll to Section',

        text: 'The navbar links scroll on click to the top offset of the clicked section on the page.'
    },

    Cards: {
        title: 'Flexbox Cards',

        textOne: 'The crown app is full of resuable card components created with flexbox. Each card is evenly spaced and shows the power of flexbox.',

        image: 'assets/assets-thecrown/thecrown-menu.png'
    },

    CarouselImages: {
        imageOne: 'assets/assets-thecrown/thecrown-headphoto.png',
        imageTwo: 'assets/assets-thecrown/thecrown-menu-slider.png',
        imageThree: 'assets/assets-thecrown/thecrown-menu-slider.png'
    }
}