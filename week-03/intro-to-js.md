# Intro to JavaScript: Syntax and The Browser
## JavaScript - What is it?
- **JavaScript** - The most used programming language in the world.
  - Not necessarily the most used primary language. But many, many applications use it as a secondary language in their applications.
- **script** - small utility that is designed to be run locally to automate tasks.
- Syntax is based on the Java language, hence the name.
- Not the same thing! Don't confuse the two, or you will look VERY bad.
- Originally built in 10 days in 1995 so that we could do things without going back to the server, because pre-broadband, going back to the server was v e r y s l o w.
  - led to a bad reputation, and had (still has!) very serious design limitations.
- For a long time, it stayed only in the browser.
- 2009, Node.js popularizes server-side JavaScript
  - Weirdly absurd endpoint – JavaScript everywhere! But nonetheless, it works.
  - ~~We don't use server-side in this class, only browser-side~~
  - We use JavaScript on the browser and server-side in this class, now. 
- "Science fiction / comedy / absurdist / completely serious talk [on] the history of JavaScript, and programming in general, from 1995 until 2035"
   [Birth and Death Of Javascript](https://www.destroyallsoftware.com/talks/the-birth-and-death-of-javascript)
### JavaScript Basics
* Declaring Variables: 
```javascript
var doNotUse = true
let value = "I am A string"
const someValue = true
```
* Conditionals:
```javascript
if(doNotUse === true) {
    console.log("Var is bad mkay")
} else {
   console.log("var is not bad")
}
```  
* Functions:
```javascript
function doSomething(parameter) {
  return parameter + " " + "is the answer to life"
}

const doSomethingElse = (parameter) => parameter + " " + "is the answer to life"
```
* Loops
```javascript
for (let currentValue = 0; currentValue < 10; currentValue = currentValue + 1) {
   console.log(currentValue)
}
```
### Arrays
* data that we group together
``` javascript
  let students = ['Agnes', 'Xavier', 'Demetrius', 'Isabella'];
  
  // Output: 'Agnes'
  console.log(students[0]);             
  
  // Output: 'Hello and welcome, Isabella'
  console.log('Hello and welcome, ' + students[3]);   
  ```
* The number we refer to elements in the array is called the **array index**
  * Always starts at 0, not 1
* Lots of different things we can do with an array to manipulate it: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
* Arrays are best suited when we have a lot of data that is simple and all the same type
  * examples
    * the first names of students in the class
    * a list of prime numbers
    * a list of ingredients in a recipe
  
### Objects
* If we have a list of different data and want to encapsulate it all, it's better to use an object
* syntax
``` javascript
  let student = {
    firstName: 'Isabella',
    lastName: 'Morales',
    age: 31
  };

  // Output: 'Isabella'
  console.log(student['firstName']);

  // Output: 'Full name: Isabella Morales'
  console.log('Full name: ' + student['firstName'] + student['lastName']);
  ```
  
### Objects vs. arrays: Which should we use?  Both!
* We access things in objects by property name, but by index in arrays
* Items in an object are often different, whereas in an array they are all the same type of thing.
* Objects are much more general purpose than arrays.
* Arrays have more default functionality for mathematical operations like sorting and can have better performance.
* Rule of thumb - if all data is exactly the same type and can be reordered freely, use an array.  If it's different, use an object.
* Question: What if we wanted to make a list of all the students in the class, but also allow them to have first and last names?
* Answer: Use nesting!
* Nesting: putting objects or arrays inside of other objects or arrays
``` javascript
    let students = [
      {
        firstName: 'Isabella',
        lastName: 'Morales',
      },
      {
        firstName: 'Shawn',
        lastName: 'Saito',
      },
      {
        firstName: 'Rochelle',
        lastName: 'Puckett',
      }
    ];

    // Output 'Hello Shawn Saito'
    console.log('Hello ' + students[1]['firstName'] + ' ' + students[1]['lastName'];
```
  * Nesting objects within an array allows us to
    * encapsulate complicated entities using properties of an object
    * iterate over each instance of an entity by using arrays
    * pull out only the relevant pieces of the objects when we need them
  * This "array of objects" structure is the fundamental building block of modern JS
    * JSON - JavaScript Object Notation
    * Founds the basis of how you will be using JavaScript in your capstone
  
### Unique JavaScript Syntax Quirks
- JavaScript does very strange things with functions that most other languages don't allow you to do.
  - This is much of what makes it appealing, and also what makes other people dislike it strongly
- **closure** - A function that creates and returns another function instead of a variable
  - Allows us to build boilerplate functions that can be used to build more specific functions that can be very useful for shorthand.
  - Examples and Further reading:
    - https://bootcamp-coders.cnm.edu/class-materials/javascript/closures/
    - https://developer.mozilla.org/en-US/docs/Web/JavaScript/
- **foreach loop** - given an array of elements, do one thing on each item in the array
  - JavaScript uses function syntax to do this.
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
- **spread syntax** - pass an array as its individual elements
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
  
## JavaScript Events
- **event** - In JavaScript, something that happens that can be reacted to with code.
  - Either something the browser does (timeline) or something the user does
  
### Browser timeline events
Something that happens on every page visit. These are the most important events.
- `DOMContentLoaded` AKA **ready**: ALL HTML is loaded and we have a plain black-and-white version of the page - images, CSS, JavaScript still loading
- `load` : all images, CSS, and JavaScript are loaded - **cursor is no longer busy**
the timeline events are very important for these key reasons:
- users don't get full control until `load`
- JavaScript files (custom and libraries) often have to wait for `load` to manipulate data
- these events show you how fast your site is

### Mouse events
- `click`: single click with the primary button - tap on mobile
- `dblclick`: two clicks with the primary button - double tap on mobile
- `auxclick`: single click with any secondary button - long press on mobile
- `mouseenter`: mouse enters an area
- `mouseover`: mouse is in an area
- `mouseout`: mouse exits an area

### Keyboard events
- `keydown`: key is pressed
- `keypress`: repeats while key is held in
- `keyup`: key is let go

#### Window events
- `focus`: when a window (or object within a window) grabs the keyboard
- `blur`: inverse of focus, when it loses the keyboard
- `resize`: when the window area changes - also a zoom in/out
- `scroll`: when the content is pushed up or down

### The Document Object
Many objects/methods access/manipulate the HTML document
- You can map events, delete content, read content, add content, etc.
- `document.getElementById`: method to get `<div id="foo">`
- `document.getElementByClassName`: method to get elements `<div class="foo">` as an array
- `document.forms`: array of forms in the HTML document
- `document.querySelector`: method to get objects by CSS selectors
- `document.onfoo`: reaction to the foo event
**IMPORTANT**: `document.getElementById("foo").value` gives you the value of the form data as a string, even if this is a `number` field
- frequently used tactic: create an empty tag with an id for user output from a function
  - `<p id="foo"></p>`