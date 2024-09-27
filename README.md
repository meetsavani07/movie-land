# Movie Land

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

# In This code
  1. Hooks --> useState, useEffect\
    ● React Hooks provide functional components with the ability to use states and manage side effects. They were first introduced in React 16.8, and allow           developers to hook into the state and other React features without having to write a class. They provide a cleaner and more concise way to handle state         and side effects in React applications.\

  2. API Key --> "http://www.omdbapi.com?apikey=Your-API-Key"\
    ● Hey, You Can check this Website http://www.omdbapi.com] (http://www.omdbapi.com) and login, see in menu bar API Key click their choice free option and          fill your information, wait few second, and check your mail account.\
    ● You Complete this process and replace this api key with Your api key.\

  3. MovieCard.jsx
    ● This File can work Display Multiple time of moviecard at one time but you need this code
      ```
      import React from "react";
      const MovieCrad = ({MOVIE}) => {
        return(
            <div className="movie">
                <div>
                    <p>
                        {MOVIE.Year}
                    </p>
                </div>
                <div>
                    <img src={MOVIE.Poster !== 'N/A' ? MOVIE.Poster : 'https://via.placeholder.com/400'} alt={MOVIE.Title}/>
                </div>
                <div>
                    <span>{MOVIE.Type}</span>
                    <h3>{MOVIE.Title}</h3>
                </div>
            </div>
        )
      }
      export default MovieCrad;
      ```
  4. Search.svg
    ● This file can work Display only Search Bar.
    ● There is a problem in this search bar, you search for any movie you do, keyboard Enter Key not work perfectly, but you can use given search icon in             search bar.
    ● This is Svg Code
      ```
      <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M29.8594 29.8594L39.4219 39.4219" stroke="#D88769" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M17.9062 33.0469C26.2682 33.0469 33.0469 26.2682 33.0469 17.9062C33.0469 9.54431 26.2682 2.76562 17.9062 2.76562C9.54431 2.76562 2.76562                  9.54431 2.76562 17.9062C2.76562 26.2682 9.54431 33.0469 17.9062 33.0469Z" stroke="#D88769" stroke-width="4.5" stroke-linecap="round" stroke-                    linejoin="round"/>
      </svg>
      ```


  # Final Results
    For Desktop
