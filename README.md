# Asynchronous Orders with JavaScript

This project focuses on integrating asynchronous API consumption into the front-end using fetch API. The main objective is to connect the provided front-end with a previously created back-end, where we implemented our own APIs. If you don't have a back-end, you can use the provided project created with Express as the back-end.

## Prerequisites
- Install the necessary dependencies for the back-end project by running `npm install`.
- Make sure the MySQL service is active on your computer.
- Set up the `movies_db` database.

## Micro Challenge - Step 1
1. In `home.html`, list all the movies retrieved from the movies' listing endpoint: `router.get('/', moviesAPIController.list);`.
2. In `formulario.html`, load the data of a particular movie to be able to modify or delete it using the following endpoints:
   - Movie details: `router.get('/:id', moviesAPIController.detail);`.
   - Update a movie: `router.put('/update/:id', moviesAPIController.update);`.
3. Utilize the same form to create a new movie using the endpoint: `router.post('/create', moviesAPIController.create);`.

## Micro Challenge - Step 2
In `home.html`, add a more complex challenge. Each movie will have a star icon that allows users to mark movies as favorites by clicking on it. Implement the following steps:
1. Capture the click event on each star icon (considering there can be multiple star icons).
2. When a star icon is clicked, store the ID of the selected movie in the browser's storage.
3. Since there can be multiple favorite movies, decide on the appropriate data structure to store the IDs in the browser's storage.
4. Create a new page called `favoritos.html` that lists the movies marked as favorites by the user. If there are no favorite movies, display a message indicating so.
5. Add a "My Favorite Movies" button to the header of `home.html`. This button should only appear if the user has selected favorite movies.

## Conclusion
Even though various technologies like Vue.js, Angular, React, or even plain JavaScript are commonly used for front-end development, it is crucial to understand how to consume a REST API using pure JavaScript. This knowledge forms the foundation for connecting to different REST APIs and can be applied to different technologies with minor implementation details specific to each technology.

Good luck! ✨🚀
