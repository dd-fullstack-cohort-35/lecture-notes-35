# Intro To Redux

## What is Redux

### Predictable State Management System

- Redux simplifies state management by offering a consistent easy to reason about way to mange state
- Redux manages state of an application in a central location outside of the UI.
- Flux (Redux) is a Software Design Pattern that can be used in any language, framework, library

### Locus of Control

- Redux Tool Kit is opinionated.
    - Opinionated framework: a framework that encourages/enforces preferred best practices specific to the framework
- Single Source of Truth:
    - All state is stored in a central location outside of the UI called a store.
- Immutable:
    - Once data is declared it does not change unless under specific circumstances.

## Core Concepts

### Reducers
- Functions that dictate how the store is interacted with and changed. Reducers respond to actions that get dispatched from somewhere else in the application.
- [Redux Reducers Documentation](https://redux.js.org/tutorials/fundamentals/part-2-concepts-data-flow#reducers)
```javascript
  function quoteReducer(state = [], action) {
	console.log("State", state);
	console.log("Action", action);
	if (action.type === "ADD_QUOTE") {
		return [...state, action.payload];
		// return ['Hello ','World', '!'];
	} else if (action.type === "REMOVE_QUOTE") {
		const newState = [...state];
		return newState.filter(index => index.id !== action.payload.id);
	} else {
		return state;
  	}
  }
```
### Actions
- Simple objects that send data to the store via the reducers.
- [Redux Actions Documentation](https://redux.js.org/tutorials/fundamentals/part-2-concepts-data-flow#actions)
```javascript
  const addQuoteAction = {
	type: "ADD_QUOTE",
	payload: { id: 1, content: "Hello " }
};
  ```
### Store
- Where all the data for an application is kept in a simple object. TLDR it is the single source of truth.
- [Redux Store Documentation](https://redux.js.org/tutorials/fundamentals/part-2-concepts-data-flow#store)
```javascript
  
  const store = createStore(quoteReducer);
  store.getState()
  // returns [{"id":1,"content":"Hello "},{"id":2,"content":"World  "},{"id":4,"content":"Redux Rock"}]

```
### Dispatch
- A built-in function on the store. It is the only way to change data in redux. How the UI and the store communicate
- [Redux Dispatch Documentation](https://redux.js.org/tutorials/fundamentals/part-2-concepts-data-flow#dispatch)
```javascript
store.dispatch(addQuoteAction);
```

## Classical Redux Code Walkthrough
- [Classical Redux Example Sandbox](https://codesandbox.io/s/classical-redux-nbcy9?file=/src/index.js)
    - Create action callbacks which use TYPES to determine what they do
    - `store.dispatch(actionCallback)` calls our action callbacks
    - console.log shows us what we are getting in the browser console
    - issues with this classical redux:
        - have to remember our actions
        - can be confusing to figure out which variables are changeable and which aren't (mutability)
- instead of this classical redux approach, we use [Redux Toolkit](https://redux-toolkit.js.org)
    - Includes [Immer](https://immerjs.github.io/immer/docs/introduction) - cleans up how we manage our states

## Redux with Express misquote code walkthrough
- Redux is separate from React
    - React uses `frontend/src/ui`
    - Redux uses `frontend/src/store`

### Set up our codebase to use Redux store
- Create a `frontend/src/store/misquote.js` file
  ```js
  import {createSlice} from '@reduxjs/toolkit'
  import {httpConfig} from "../utils/httpConfig"

  // Define our reducer and action.
  const misquoteSlice = createSlice({
    name: "misquote",
    initialState: [],
    reducers: {
        getAllMisquotes: (misquotes, action) => {
            return action.payload
        },
    },
  })

  // Make our actions callable as function getAllMisquotes. 
  export const {getAllMisquotes} = misquoteSlice.actions

  // We use export default here so that if something imports this file, they will get it by default
  export default misquoteSlice.reducer
  ```
- Create `frontend/src/utils/httpConfig.js`
  ```js
  import axios from "axios";

  export const httpConfig = axios.create();
  
  httpConfig.interceptors.response.use(function ({data, headers}) {
    if (data.status === 200) {
      return data.data !== null
        ? {message: null, data: data.data, status: 200, type: " alert alert-success", headers: {...headers}}
        : {message: data.message, status: 200, type: " alert alert-success", data: null, headers: {...headers}};
    }
    return {message: data.message, status: data.status, type: "alert alert-danger", data: null, headers: {...headers}}
    
  }, function (error) {
    // Do something with response error
    console.log(error);
    return Promise.reject(error);
  });
    
  httpConfig.interceptors.request.use(
    (config) => {
      
      // Attach our authorization via JWT token.  
      const authorization = window.localStorage.getItem("authorization")
      if (authorization) {
        config.headers['authorization'] = authorization
      }
      return config
    }, (error) => {
      // Do something with response error
      console.log(error);
      return Promise.reject(error);
    }
  )
  ```
    - axios is like improved `fetch()`
        - we can modify returned request
- Add line to .gitignore to ignore the next file we are going to create
    - `*/setupProxy.js`
- Create `frontend/src/setupProxy.js`
  ```js
  const { createProxyMiddleware } = require('http-proxy-middleware');

  module.exports = function(app) {
    app.use(createProxyMiddleware('/apis', {
      logLevel: 'debug',
      //Change this to your backend, e.g. http://123.432.653.21:8080
      target: "http://gkephart.uss-hopper.site:8080",
      changeOrigin: true,
      secure: true,
    }));
  };
  ```
    - Change the backend to match your dev server's backend
    - **Make sure you correctly have this in your .gitignore so that you don't commit this**
        - If you don't, your team members will connect to your backend instead of their own
- Test what you've done so far
    - Run `npm run start` in your terminal
    - Visit `localhost:3000/apis/misquote` and you will see your data from your backend

### Adapt our Redux info to a component
- Add an export to our `misquote.js` file
    - Add this code below your `{getAllMisquotes}` export and above your `export default`
  ```js
  // Create an export to allow async calls to our action
  export const fetchAllMisquotes = () => async dispatch => {
    const {data} = await httpConfig(`/apis/misquote/`)
    dispatch(getAllMisquotes(data))
  }
  ```
    - using `=> callback =>` syntax is called [currying](https://javascript.info/currying-partials)
        - allows us to chain functions in succession
        - passes arguments down the chain from function to function
- Create `frontend/src/store/index.js`
  ```js
  import misquotes from "./misquote"
  import {combineReducers, configureStore} from "@reduxjs/toolkit";
  
  const reducer =  combineReducers({misquotes})
  
  export const store = configureStore({reducer})
  ```
- Add `frontend/src/ui/App.js`
    - This is typical App.js with Redux imported and the store wrapping our components.
  ```jsx
  // Import basic front-end tools.
  import React from "react";
  import 'bootstrap/dist/css/bootstrap.css';
  import {BrowserRouter} from "react-router-dom";
  import {Route, Switch} from "react-router";
  import "../index.css";

  // Import icons we use in our components.
  import {library} from '@fortawesome/fontawesome-svg-core'
  import {
    faEnvelope,
    faPencilAlt,
    faSignInAlt,
    faSortDown,
    faUserCircle,
    faDog
  } from "@fortawesome/free-solid-svg-icons";
  import {faKey} from "@fortawesome/free-solid-svg-icons/faKey";
  
  // Import our custom components
  import {NavBar} from "./shared/components/NavBar";
  import {Posts} from "./posts/Posts";
  import {AboutUs} from "./AboutUs";
  import {Home} from "./Home";
  import {FourOhFour} from "./FourOhFour";

  // Import react-redux so we can use the store.
  import {Provider} from "react-redux";
  
  library.add(faPencilAlt, faUserCircle, faSortDown, faEnvelope, faSignInAlt, faKey, faDog );
  
  // Add store to our export so that we can pass values.
  export const App = (store) => (
    <>

      {/* Wrap our router in a Provider so that we have access to the store. */}
      <Provider store={store} >
        <BrowserRouter>
        <NavBar/>
        <Switch>
          <Route exact path="/about-us" component={AboutUs} />
          <Route exact path="/posts" component={Posts} />
          <Route exact path="/" component={Home} />
          <Route component={FourOhFour} />
        </Switch>
        </BrowserRouter>
      </Provider>
    </>
  );
  ```
- Replace our `frontend/src/index.js` with a call to App.js
  ```js
  import ReactDOM from 'react-dom'
  import {App} from "./ui/App";
  import {store} from "./store";
  
  // Use the store so that we can use it to pass information.
  ReactDOM.render(App(store), document.querySelector('#root'));
  ```
- Add our data to our frontend component in `frontend/src/ui/Posts.js`
    - Add imports
      ```js
      import { fetchAllMisquotes } from '../../store/misquote'
      import { PostCard } from './PostCard'
      ```
    - In our Posts constant, add a call to redux
      ```js
      export const Posts = () => {
        
        // Tell this component that it needs to watch for items that live outside of this component.
        // This is how we make sure this component looks for our data from Redux's call to the backend.
        const dispatch = useDispatch()
        const initialEffects = () => {
          dispatch(fetchAllMisquotes())
        }
        React.useEffect(initialEffects, [dispatch])
  
        // Render our misquotes constant - before we have our data, render the skeleton.
        // After we have our data, render the full object with our data.
        const misquotes = useSelector((state) => state.misquotes ? state.misquotes : [])
      ```
    - If you did this correctly, when you visit localhost:3000/posts and look at your console, you'll see two logs - one from before you got your data, one afterwards.
- Create a new `frontend/src/ui/posts` directory
- Create a new `frontend/src/ui/posts/PostCard.js` component
  ```js
  import React from "react";
  import Card from "react-bootstrap/Card";
  import Form from "react-bootstrap/Form";
  import InputGroup from "react-bootstrap/InputGroup";
  import FormControl from "react-bootstrap/FormControl";
  import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
  import Button from "react-bootstrap/Button";
  
  export function PostCard(props) {

    const {misquote} = props

    return(
      <>
        <Card className="card text-center">
          <div className="card-body">
            <Card.Title>{misquote.misquoteAttribution}</Card.Title>
            <Card.Text >
              <div>
                {misquote.misquoteContent}
              </div>
              <small className="text-muted">{misquote.misquoteSubmitter}</small>
            </Card.Text>
          </div>
        </Card>
      </>
    )
}
  ```
- Move `frontend/src/ui/Posts.js` to `frontend/src/ui/posts/Posts.js`
  - Replace our Card in here with a mapping function
    ```js
    <CardColumns className="p-4">
      {misquotes.map(misquote => <PostCard key={misquote.misquoteId} misquote={misquote} />)}
    </CardColumns>
    ```

## Recommended Reading
- [What Is Redux: A Designer's Guide - Smashing Magazine](https://www.smashingmagazine.com/2018/07/redux-designers-guide/)
