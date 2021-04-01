const MyProjects = [
  {
    id: 1,
    name: 'COFFEEHAUS',
    description:
      'A single-page application (SPA) made with React JS, Mapbox and Material UI, perfect for a small coffee shop or similar type business',
    imageURL: './11111.png',
    webLink: 'https://coffeehaus.netlify.app/',
    githubLink: 'https://github.com/Sakaluke/COFFEEHAUS',
    expandedDescription:
      'This Single-Page Application project was built with React JS and  Material UI, all the content here was improvised, logo was downloaded from free resources and modified, menu context was taken from a random coffeeshop and the pictures were downloaded from Pixabay which are displayed with the help of slick-carousel npm package. There`s no complicated logic or fetch requests here, purpose of this project was to get comfortable with Material UI, it was my first time using the library so building a simple SPA project was a perfect testing ground for it. I created the background video in Premier Pro, it`s just a bunch of video sequences related to coffee businesses that I found online put together, compressed and optimized so it doesnt affect the loading time of the website. I also Included the mapbox feature where I customized the colors of the map so it matches with the rest of the UI and added the logo inside the marker. The contact form is very straight forward using Material UI inputs, unfortunately its there just for display, its not hooked to a back-end service and it won`t send any messages that are typed in. Entire layout is organized in grids and it`s mobile compatible. I didn`t used many animations or transitions except logo spin and text reveal, decided to keep it as simple as possible. For smooth navigation I used react-scroll which I  also used it here on my portfolio website, this is my "go to" library when I`m not using React Router. For code look-up click the Github icon which will redirect you to CofeeHaus repository',
  },
  {
    id: 2,
    name: 'EDINFOOD',
    description:
      'SPA web application designed to query data, filter and display which businesses passed the health and safety check in Edinburgh area ',
    imageURL: './edinfood.png',
    webLink: 'https://edinfood.netlify.app/',
    githubLink: 'https://github.com/Sakaluke/EdinFood',
    expandedDescription:
      'This was my first ever React project, the idea behind this SPA was to be able to check the Food Hygiene Information Scheme Certificate (FHISC) before deciding where to get a bite. I worked as an agency chef before and in some rare cases the kitchen doesn`t quite match the cleanliness compared to the front of the house. So why not make it easier for the customers to do a quick check of the FHISC certification issued by health inspectors? I got the data from Edinburgh`s Council Open Data Catalog and implemented mapQuest that would display markers based on the search result. It will check the postcodes of those businesses that are found and do a fetch request to get the latitude and longitude and create markers with pop-ups on the map. It`s in need of more functionality, like error handling, pagination when search result is too long, but like I mentioned above it was my first solo project at the time and it was expected not to be perfect. It`s just a concept that can easily be expanded nationwide so it can pull data from all cities around UK. For code look-up click the Github icon which will redirect you to EdinFood repository. ',
  },
  {
    id: 3,
    name: 'VIOLETTESTORE',
    description:
      'An e-commerce web application for a jewelry shop made with Gatsby, Material UI,GRAPHQL queries and Strapi as back-end (which is a headless CMS)',
    imageURL: './violette.png',
    webLink: 'https://violettestore.netlify.app/',
    githubLink: 'https://github.com/Sakaluke/Violette-Store',
    expandedDescription:
      'This e-commerce project was built with Gatsby, Material UI, GRAPHQL for querying data and Strapi as back-end which was deployed on Heroku and Stripe as payment platform. Strapi is a headless content management system which I found very straight forward and easy to use, for image store I used Cloudinary. I chose Gatsby which is a static website generator (SSG) for its speed and security features, however if I`d have to do it all over again I`d probably go with Next JS. For a blog or a simple forum Gatsby it`s a great platform, however I experienced many issues like quering multiple images from Strapi with gatsby-image plugin, other plugins are pretty limited as well and many developers can relate to that. I`m sure they`ll fix it in the near future. For passing state to components I used Context, also the products cart array is stored in browser`s LocalStorage so users can have access to it even after they close it. For styling as always I used Material UI, all products data are mapped into cards and organized in a grid and it`s mobile compatible. Of course it needs more functionality like pagination, authentification, error handling, I will implement after I move everything to Next JS which I`m currently learning. For code look-up click the Github icon which will redirect you to VioletteStore repository ',
  },
  {
    id: 4,
    name: 'GOOSCHAT',
    description:
      'A chat application built with React and Firebase, with google authentification implemented, separate chat rooms and user`s offline/online presence',
    imageURL: './gooschat-img.png',
    webLink: 'https://chat-project-3eeb6.web.app/channel/general',
    githubLink: 'https://github.com/Sakaluke/goosechat',
    expandedDescription:
      'This is a tutorial project from React-Training Course by Ryan Florence that I religiously followed and gave it couple twists. It`s the only project that`s more of a "Educational Piece" rather something designed from scratch. I wanted to really dive deep and understand the correct approach when designing custom hooks and also working patterns with Firebase. At one point I definitely got stuck in what they call "tutorial hell", courses from Dan Abramov, Ryan Florence, Brad Traversy, YouTube Channels like Codevolution, Web Dev Simplified, Dev Ed and many other Udemy courses combined with many discord servers related to web development where I could ask questions when I needed help, really paved the way when starting my coding journey. For code look-up click the Github icon which will redirect you to goosechat repository',
  },
  {
    id: 5,
    name: 'TO DO APP',
    description:
      'Personal website in development, but at the moment it`s an experimental platform, currently hosting a TO DO APP built with React, Redux and Material UI.  ',
    imageURL: './goose.png',
    webLink: 'http://goosefx.com/',
    githubLink: 'https://github.com/Sakaluke/to-do-app',
    expandedDescription:
      'What kind of portfolio without a To DO APP? :) This web app was built with React, MaterialUI and Redux. I know Redux is a bit overkill for such a small project, but after learning about it from tutorials and docs, I simply wanted to put it in practice in all it`s glory. The todo array is saved in client`s Local Storage in case browser tab is closed or page is refreshed, this way the todos will remain saved and won`t reset. Implemented error handling in case entered fields are empty which will display a simple error message, added sound effects to buttons to make it more fun and gave it a clean look sampling colors from uiGradients.com. For styling I used Material UI components and it`s grid system so it`s mobile compatible. To Do app is hosted on my server that I`m renting from NameCheap, using one of my domain names. For code look-up click the Github icon which will redirect you to to-do-app repository ',
  },
  {
    id: 6,
    name: 'UNDER CONSTRUCTION',
    description:
      ' Current project is under construction or the spot is reserved for future projects, will be updated as soon as it`s ready for display   ',
    imageURL: './5555.png',
    webLink: '',
    githubLink: 'https://github.com',
    expandedDescription:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  },
];

export default MyProjects;
