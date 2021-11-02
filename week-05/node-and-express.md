# Intro to Node and Express
- Reminder: in this bootcamp, we develop on a modified MERN stack
    - MySQL (usually MongoDB)
    - **Express**
    - React
    - **Node.js**

## [Node.js](https://nodejs.org/en/)
- A run time environment that allows for Javascript to be run outside of the browser.
- Released by Google on may 27th 2010 and based on V8 JavaScript engine.
    - Javascript engine - a program that executes Javascript code
    - The V8 engine is also the core Javascript engine that Chrome/Chromium uses.
    - Before this, JavaScript was exclusively for front-end developers
        - Back-end development was done using something else, like PHP, Python, Ruby, Java, etc.
    - Node.js is **the** innovation that has made JavaScript the dominant language of the web.
    - We can teach one less language now.
- Node.js is a run-time environment, not a language.
- For our purposes, Node.js is mostly invisible.
    - We don't write any code for it.
    - We only barely configure it.
    - Mostly, we have it because libraries we want to use, like Express, require it

## [Express](http://expressjs.com/)
- Since Javascript is an asynchronous single threaded language it is perfect for web servers.
    - **asynchronous** - allows us to put something on hold and do something else until it's finished
        - When we are making calls to other servers, this means we don't have to wait for our request to finish before rendering other parts of the page.
    - **single-threaded** - does one thing at a time
- Express is the most mature Web Application framework for Node.js
- Express is the most used Javascript Framework in the world
    - [@nestjs/core vs express vs koa vs next vs react | npm trends](https://www.npmtrends.com/express-vs-koa-vs-next-vs-@nestjs/core-vs-react)
- Express is minimalistic and unopinionated.
    - it only comes with what is necessary to run a web server
    - It can be used with any combination of libraries, packages or frameworks.
    - Express does not enforce best practices or required ways of doing things.
- Express is not a daemon that is always running on the host like PHP.
    - instead, it is spun-up on demand when a request is made.
- Every single one of you has used express without knowing it.
    - Your react spinup project used `create-react-app` which creates a webpack dev server so that you can run React.
    - That webpack server in turn uses Express

## Express In Action

- to start an express server:

```javascript
// Import our libraries and set up express.
const express = require("express");
const morgan = require("morgan");
const app = express();

// app.use allows for different middleware to be brought into Express
// Morgan: a logger for express so that we have a record for debugging.
app.use(morgan("dev"));
app.use(express.json());

// Create the page router for express that recognizes and directs our URLs.
const indexRoute = express.Router();

// Example express configuration for our /apis/ route.
indexRoute.route("/").get((request, response, next) =>{
  return response.json({status:200 });
})
app.use("/apis", indexRoute);

//app.listen declares what port the Express application is running on
app.listen(4200);
```

- Middleware - anything that runs between two distinct layers.
    - In our case, the Morgan logger is running between our database and our API
