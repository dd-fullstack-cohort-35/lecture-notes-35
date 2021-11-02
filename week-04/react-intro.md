# React Intro
## What is React
*  Declarative Frontend-UI Library created by Facebook.
* Created to make front end development more straightforward and composable.
* Uses small chunks of Html CSS and javascript called components.
* Components are made possible by JSX or Javascript XML (HTML is a subset of XML)
## JSX !== HTML
* JSX, for the most part, is the same as HTML except for a few small differences
* HTML attributes are slightly different
    * Attributes are camel case
    * Some attributes are renamed
        * htmlFor instead for
        * className instead class
    * Can write javascript in html  with JSX using {}
        * possible to render a single variable, function or brand new component
        * code example
    * Style attribute must be a double `{{}}` and styles follow a key pair syntax like objects
        * *Inline styling is okay in react but better to use global style sheet or an individual style sheet for each component.*
    * Possible to create custom attributes called props that can be used to pass parameters into components
    * Alot more self-closing tags
### Props
* Props or properties is a way of passing parameters into Components.
* Accomplished by defining custom attributes in tags and accessing them in the component with the prop parameter
* *Code Example*
```jsx

function Parent() {
    return(
      <>
    <h1>props example</h1>
    <Child title="props are meh" />
    </>
    )
}
function Child(props) {
return(
    <h2>props are {props.title}</h2>
   )
}   
     

```
## Functional Programming and React
* Functional Programming is an approach of writing software based on the algebraic concept of functions.
* Functional programming emphasizes the immutability of data, the use of pure functions, and avoidance of side effects.
*  immutable data: data that once declared is not changed or mutated.
* pure function: a function that takes in a parameter and returns a unique value based on the parameter.
* side effect: Any operation that affects the outside environment where the operation takes place.

### Classe Components vs Functional Components

* Two ways to create a component
* **Class based components**
``` jsx
import React from "react"
class App extends React.Component { 

    constructor(props){
        super(props)
        this.state={externalData:"bar"}
    }

    componentDidMount() {
        this.setState({externalData:axios.get(`supercool.api/`)}:
    }

    componentDidUpdate() {
        this.setState({externalData:axios.get(`supercool.api/`)}:
    }

    render(){

        return(
            <h1>{this.props.welcomeMessage}<h1>
            {this.state.externalData.map({data}) => (<h2>data.title</h2>)}
        )
    }   
 }
```
* Function based component Code Example
```jsx

import React, {useState, useEffect} from "react"
  
function App(props) {
const [externalData, setExternalData] = useState("bar")

useEffect(() => {
//preform actions related to when the component would have to rerender
setExternalData(axios.get("supercool.api"))
},
//watch for changes to values used by useEffect]
[externalData]);

    return(
        <h1>{props.welcomeMessage}</h1>
        {externalData.map({data}) => (<h2>data.title</h2>)}
    )
} 
```
* We will be using Functional Components in this class.
* Class based components overuse `this` yuck and have confusing life cycle methods.
* Completely Functional Components in React were not possible until React 16.8.
## React Hooks
* React hooks are a relatively new feature in react.
* Hooks allow us to use the same functionality of React Class Components without having to use Classes.
* go over the four rules of hooks.
* The two most common hooks used in class is useState and useEffec.t
* ### useState
* The useState hook enables functional components to have state variables.
* Changes to state variable values cause components to rerender, update.
    * A state variable in react is any variable whose value will persist after a component has rerendered.
* `const [foo, setFoo] = useState("bar");`
    * `foo` is the accessor for the variable it returns a readonly value.
    * `setFoo` is the mutator for the variable and allows for new values to be set for a state variable .
    * `useState()` makes react aware of the specfied state variable and returns the accessor and mutator for it
    * `useState("bar")` allows for a default value to be set for a state variable.
### useEffect
* useEffect handles side effects that occur outside the component function, hence the name, and dictates how the component should respond.
* `useEffect(() => {setExternalData(axios.get("supercool.api"))},[externalData]);`
* useEffects syntax can be confusing and is unique to react
* the best way to think about useEffect is `useEffect(effects, inputs)`
* `effects` is an anonymous function that contains function calls that have side effects.
  * Side-effects include API calls, accessing local storage or interacting with the dom
  * failure to call functions with side-effects outside of useEffect causes a component to render continuously
* `inputs` is an array of values used by the effects inside of a component.
    * useEffect watches the values inside of inputs and if they change rerender the component.
    *
**useEffect !== componentDidMount || componentDidUpdate**
### Other Important Hooks
* [useRef](https://reactjs.org/docs/hooks-reference.html#useref)
* [usecallback](https://reactjs.org/docs/hooks-reference.html#usecallback)
* [useReducer](https://reactjs.org/docs/hooks-reference.html#usereducer)
* [useContext](https://reactjs.org/docs/hooks-reference.html#usecontext)

### Rules of Hooks
1. Only call hooks from functional react components or custom
2. Dont call hooks in nested functions, loops or conditionals
## Further Reading
* [Kent C. Dodds: Beginners Guide to React](https://egghead.io/courses/the-beginner-s-guide-to-react)
* [State vs. Props](https://codeburst.io/react-state-vs-props-explained-51beebd73b21)
* [React's official Introduction to JSX](https://reactjs.org/docs/introducing-jsx.html)