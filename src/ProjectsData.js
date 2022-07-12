export const streamVicData = {
  Overview: {
    title: "Overview",

    text: "StreamVic is a web app built with ReactJs that allows users to browse movie/tv show information and save their favorites. I used the TMDB API to fetch movie/tvshow data and output content dynamically to the webpage. Users can use the API to also search for a particular movie/tv show.",
  },

  Filter: {
    title: "Filter",

    text: "The filter component allows the user to display movies/tv shows according to popularity or top rated. This feature required me to manipulate the TMDB API with the useState hook.",
  },

  Pagination: {
    title: "Pagination",

    textOne:
      "The pagination component allows the user to display different pages of movies/tv shows from the filter they choose. With 4 pages total, the end result is 80 total movies/tv shows with 20 results per page. The component can be used by clicking the prev/next buttons or the dots which glow red if that current page is active.",

    textTwo:
      "The previous arrow gets disabled if the page is one & the next arrow also gets disabled if the page is 4. Props are used in this component to get the data needed such as page, maxPages, handlePrevPage/handleNextPage functions etc.",

    image: "assets/assets-streamvic/pagination.png",
  },

  Favorites: {
    title: "Favorites",

    text: "The favorites component was made with a global state. Favorites was placed in a context file and saved in a createContext() for all other components to use. The original state of the favorites is in the localStorage or an empty array if the localStorage is empty.",
  },

  Search: {
    title: "Search",

    textOne:
      "The search page was created to allow users to search for any movie or tv show in the TMDB database according to which tab they choose. The movie tab will search for movies & the tv shows tab will search for shows of the search term.",

    textTwo:
      "The input field value is placed in the TMDB API search url dynamically after the form is submitted. If the form is submitted without an input value, an error message will appear to let the user know the value is empty. There is also an error message for a search value that doesn't have any results in the database.",

    image: "assets/assets-streamvic/search-page.png",
  },

  Details: {
    title: "Details Page",

    textOne:
      "The details page is a page that shows relevant information about the movie or tv show you clicked on. I used useParams from react-router-dom to dynamically add the ID of the movie or show the user clicks on to the end of the webpage url and also to insert the ID in the details URL of the TMDB API.",

    textTwo:
      "Details such as an overview, rating, genres, trailer, and cast info is displayed on the page. The option to favorite the movie/show is also avaliable on the details page.",

    image: "assets/assets-streamvic/details-page.png",
  },

  CarouselImages: {
    imageOne: "assets/assets-streamvic/search-page.png",
    imageTwo: "assets/assets-streamvic/streamvic-project.png",
    imageThree: "assets/assets-streamvic/details-page.png",
    imageOneAlt:
      "Computer and mobile phone next to each other both on the Streamvic application on the search page searching Avengers",
    imageTwoAlt:
      "Computer and mobile phone next to each other both on the Streamvic application home page",
    imageThreeAlt:
      "Computer and mobile phone next to each other both on the Streamvic application on a PeaceMaker details page",
  },
};

export const animeShoppeData = {
  Overview: {
    title: "Overview",

    text: "Anime Attire is a web app built with ReactJs for an anime store. It allows users to view, search, sort, and add/remove items from their cart. I used  custom data for the products of the application and used the Context API + useReducer hook to create a global state for the cart. This allows users to add/remove items from the cart and keep items in the cart when they visit the checkout page. The checkout page has a working total amount that updates when an item is removed or added to the cart.",
  },

  Filter: {
    title: "Filter",

    text: "The filter component allows the user to display the data by price low to high or high to low. I use a product dispatch action depending on what the user chooses and give the appropriate payload to the dispatch to change the data order.",
  },

  LoadMore: {
    title: "Load More",

    textOne:
      "The load more component uses props to load more data on click. With every click 8 more products get rendered and the button disappears if the there isn't enough products left to render",

    image: "assets/assets-animeattire/loadmore.png",
  },
  Search: {
    title: "Search",

    text: "The search page was created to allow users to search for a specific product. A product will be searched for in accordance to the tab the user is on. A dispatch is called when the search form is submitted and the search term is then passed as the dispatch payload.",
  },

  Products: {
    title: "Cart Products",

    textOne:
      'The add to cart feature was implemented using the global state and a dispatch. The item that you choose to add to the cart is passed as a payload to the dispatch which adds the product to the global cart array. If the product does not exist in the global cart array, an "Add to Cart button is rendered"',

    textTwo:
      "The remove from cart feature was implemented using the global state and a dispatch as well. The item that you choose to remove from the cart is passed as a payload to the dispatch which filters the cart array and checks for any id that matches the product id, then removes it. If the product exists in the global cart array, a 'Remove from Cart' button is rendered",

    image: "assets/assets-animeattire/products-in-cart.png",
  },

  Cart: {
    title: "Cart Page",

    textOne:
      "The cart page displays the current items that are in ther global cart array. Information such as the total price of all the items in the cart and the number of items in cart can be found on the cart page.",

    textTwo:
      "Each item is given a remove button that removes the item from the cart and the cart pagee. The total price of all the items will then update in real time to the correct amount of all the items still in the cart.",

    image: "assets/assets-animeattire/cart-page.png",
  },

  CarouselImages: {
    imageOne: "assets/assets-animeattire/loadmore.png",
    imageTwo: "assets/assets-animeattire/products-in-cart.png",
    imageThree: "assets/assets-animeattire/cart-page.png",
    imageOneAlt:
      "Computer and mobile phone next to each other both on the Animme Attire website showing a load more button",
    imageTwoAlt:
      "Computer and mobile phone next to each other both on the Animme Attire website showing items in their cart",
    imageThreeAlt:
      "Computer and mobile phone next to each other both on the Animme Attire website cart page",
  },
};

export const italianPieData = {
  Overview: {
    title: "Overview",

    text: "Italian Pie is a landing page built with HTML, CSS, JavaScript, GSAP, Barba JS.",
  },
  LoadAnimation: {
    title: "Load Animations",

    text: "GSAP is used to fade in elements when the page loads initially",
  },
  PageTransitions: {
    title: "Page Transition Animations",

    text: "GSAP & Barba JS are used together to create page change animations such as images and text sliding in/out",
  },
  ScrollAnimations: {
    title: "Scroll Animations",

    text: "Intersection Observer is used to get the moment an element is on the screen then GSAP is used to fade in the element",
  },

  CarouselImages: {
    imageOne: "assets/assets-italianpie/main.png",
    imageTwo: "assets/assets-italianpie/menu-section.png",
    imageThree: "assets/assets-italianpie/reviews-section.png",
    imageOneAlt:
      "Computer and mobile phone next to each other both on the Italian Pie website",
    imageTwoAlt:
      "Computer and mobile phone next to each other both on the Italian Pie website in the menu section",
    imageThreeAlt:
      "Computer and mobile phone next to each other both on the Italian Pie website in the reviews section",
  },
};

export const chitChatData = {
  Overview: {
    title: "Overview",

    text: "Chit Chat is a web app built using MongoDb, Express, React, & NodeJS. It allows users to create groupchats & single chats, send messages, search for users, and uses JWT tokens for real authentication for logging in and signing up.",
  },
  Authentication: {
    title: "Authentication",

    text: "I use JWT to provide real authentication to users logging in and signing up. The token allows the users to move to the chatpage and see relavent data.",
  },
  FormErrors: {
    title: "Form Error Handling",

    textOne:
      "Login and signup forms both have error handling built into them. The login form displays errors if the email is not registered, the email is not valid, or if the password is incorrect.",

    textTwo:
      "The signup form displays errors if an invalid email is typed, password doesn't meet length needed, passwords don't match, or if no avatar is selected.",

    image: "assets/assets-chit-chat/form.png",
  },
  Search: {
    title: "Search",

    text: "Users can search for other users and create chats with them.",
  },
  NewGC: {
    title: "New Group Chat",

    textOne:
      "Users can create new group chats by clicking on the new group button, picking a title and searching for users to add.",

    textTwo:
      "The modal comes with error handling as well if the name is longer than 15 characters, the searched user is already in the group, or can't be found in the database.",

    image: "assets/assets-chit-chat/new-gc-modal.png",
  },
  EditGC: {
    title: "Edit Group Chat",

    textOne:
      "Admins can edit group chats by clicking on the edit icon above the chatbox",

    textTwo:
      "The modal comes with error handling as well if the name is too long, the searched user is already in the group, can't be found in the database, or if a non admin is trying to add/remove users. ",

    image: "assets/assets-chit-chat/edit-gc-modal.png",
  },
  NodeMongo: {
    title: "Node JS & Mongo DB",

    text: "I used NodeJS to create the server, all the routes, modals, controllers, & middleware. I approached this using the MVC pattern. MongoDB is used as the database that stores all the users, chats, & messages created.",
  },
  CarouselImages: {
    imageOne: "assets/assets-chit-chat/form.png",
    imageTwo: "assets/assets-chit-chat/new-gc-modal.png",
    imageThree: "assets/assets-chit-chat/edit-gc-modal.png",
    imageOneAlt:
      "Computer and mobile phone next to each other both on the Chit Chat application showing the login form",
    imageTwoAlt:
      "Computer and mobile phone next to each other both on the Chit Chat application with the create a new group modal open",
    imageThreeAlt:
      "Computer and mobile phone next to each other both on the Chit Chat application with the edit a group modal open",
  },
};
