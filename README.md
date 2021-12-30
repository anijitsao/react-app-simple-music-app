# react-app-simple-music-app

A Simple Music Application using [React JS](https://reactjs.org/docs/getting-started.html), a JavaScript library to make awesome UI by Facebook, [Node JS](https://nodejs.org/en/docs/), [Express JS](https://expressjs.com/en/api.html) and [MongoDB](https://docs.mongodb.com/).

This application uses [React JS](https://reactjs.org/docs/getting-started.html) component oriented UI creation paradigm. All components are written in [JSX](https://reactjs.org/docs/jsx-in-depth.html) and ES6 style and are
combined to get a single build for production purpose using [Webpack 5](https://webpack.js.org/concepts/).

ES6 `module` creation along with `import /export` is used. [Babel](https://babeljs.io/docs/en/babel-preset-react) is used to _transpile_ all [JSX](https://reactjs.org/docs/jsx-in-depth.html) code to vanilla JavaScript code. To install all the dependecies `npm` is used.

For UI creation [HTML5](https://www.w3schools.com/html/html5_intro.asp) and [CSS3](https://www.w3schools.com/css/) are used. [Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout), the new feature of [CSS3](https://www.w3schools.com/css/) is used for layout creation purpose.

Back end is implemented using [Node JS](https://nodejs.org/en/docs/), [Express JS](https://expressjs.com/en/api.html) and [MongoDB](https://docs.mongodb.com/). [Atlas](https://www.mongodb.com/cloud/atlas), the _Cloud_ version of [MongoDB](https://docs.mongodb.com/)
is used.

This is a _responsive web application_ for viewing in both Mobile and Desktop.

## Features

-   Code is rewritten with [React JS 17](https://reactjs.org/docs/getting-started.html) and [Node JS 17](https://nodejs.org/en/docs/)
-   Latest features of JavaScript i.e. ES6, ES7, ES8 is used
-   [React JS Hooks](https://reactjs.org/docs/hooks-intro.html) are used with Functional components
-   ES8 `async/await` is used
-   Routing is rewritten using [React Router v6](https://reactrouter.com/docs/en/v6)

<br/>

<ul>
 <li> This is Simple Music Application </li>
 <li> It is a Full Stack Application </li>
</ul>

-   All the song details are stored in the [MongoDB Atlas](https://www.mongodb.com/cloud/atlas). This is a _free/ shared_ account on [Atlas](https://www.mongodb.com/cloud/atlas). **So Please use it wisely**

<ul>
 <li> Application is loaded with the songs </li>
 <li> Listening of the songs is supported </li>
 <li> Searching from the list of songs is possible </li>
</ul>

-   Information about the song (Movie, Album, Artist) is available on click of the `i` icon
-   Changing the rating is supported
-   All the ratings are saved in the database i.e. _persistant_
-   Listing of Top 5 songs _based on their rating_ is available

## Installation

Clone the repository:

```
git clone https://github.com/anijitsahu/react-app-simple-music-app.git
```

Navigate inside the directory:

```
cd react-app-simple-music-app
```

Install all the necessary dependecies:

```
npm install
```

Run the server:

```
npm run server
```

Open the web browser and type`http://localhost:3000` in the address bar to load the application

_tested with <img src="screenshots/chrome.png" width="20px" title="Google Chrome">[Google Chrome 89](https://www.google.com/chrome/) and <img src="screenshots/firefox.png" width="25px" title="Firefox Developer edition">[Mozilla Firefox 86](https://www.mozilla.org/en-US/firefox/new/)_

## Screenshots

Some screens of the application is given below for better understanding.

Desktop as well as Mobile version of the screenshots are given side by side.

<p> Initial screen <br/> 
 <img src="screenshots/desktop 1.png" width="590px" title="initial screen"/>
 <img src="screenshots/mobile 1.png" width="190px" title="initial screen"/> 
</p>
 
 <p> After loading the songs <br/> 
 <img src="screenshots/desktop 2.png" width="590px" title="After loading the songs screen"/>
 <img src="screenshots/mobile 2.png" width="190px" title="After loading the songs screen"/> 
</p>

<p> Top 5 Songs <br/> 
 <img src="screenshots/desktop 3.png" width="590px" title="Top 5 Songs screen"/>
 <img src="screenshots/mobile 3.png" width="190px" title="Top 5 Songs screen"/> 
</p>

<p> Showing information of a song <br/> 
 <img src="screenshots/desktop 4.png" width="590px" title="Showing information of a song screen"/>
 <img src="screenshots/mobile 4.png" width="190px" title="Showing information of a song screen"/> 
</p>

<p> Searching and showing searched songs <br/> 
 <img src="screenshots/desktop 5.png" width="590px" title="Searching and showing searched songs screen"/>
 <img src="screenshots/mobile 5.png" width="190px" title="Searching and showing searched songs screen"/> 
</p>
