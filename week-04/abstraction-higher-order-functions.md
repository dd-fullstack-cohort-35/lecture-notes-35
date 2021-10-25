# Abstraction And Higher-Order Functions
## Abstraction
- **Abstraction:** The simplification of implementation details so that focus can be given to the problem at hand.
- Abstraction allows developers to focus on what problems they are trying to solve instead of reinventing the wheel.
- **Example:** Bootstrap
    - Bootstrap simplifies the development process of creating responsive mobile-first websites.
    - Bootstrap handles the definition of breakpoints and dictates how elements using bootstrap behave in different view widths.
    - A developer doesn't understand the source code or how to recreate it; only what classes bootstrap has exposed for use.
- Abstraction enables the writing of **declarative** **DRY** code necessary for functional programming

## Functions As First-Class Values
- In Javascript functions can be assigned to variables
* JavaScript loves functions even more than most other languages
* We can call functions on functions (on functions on functions on functions etc.)
    * Functions that are called on other function are **higher order functions**
    * Allows us to write more condensed code
* We can assign our functions to variables
* We can use arrow syntax to declare and use functions on the fly
    * Basic idea -- don't have to name our function since we're only using it once
    * https://javascript.info/arrow-functions-basics
* Using these techniques, we can quickly iterate over arrays using some built in functions and do cool stuff
    * [Map: do something to every element in an array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
    * [Filter: get only the elements that we want](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
    * [Reduce: combine all the elements in an array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
- doSomething vs doSomething()
```javascript
    const doSomeTask = () => {
    	return "ya I did some task"
    }

    const doAnotherTask = doSomeTask
    const completedTask = doSomeTask()
```

### Higher Order Functions In Action
```javascript
    const doSomeTaskThreeTimes = (someTask) => {
    	for(let i = 0; i < 3; i++) {
    		someTask()
    	}
    }
  
    doSomeTaskThreeTimes(doSomeTask)

    const createSomeTask = () => {
    	const doSomeTask = () => {
    		return "ya I did some task"
    	}
    	return doSomeTask
    }
    
    const someTask = createSomeTask()
    someTask()
```

- **First Order Functions:** Boring old normal functions

## Prototypes In Javascript

[A Plain English Guide to JavaScript Prototypes](http://sporto.github.io/blog/2013/02/22/a-plain-english-guide-to-javascript-prototypes/)

- Prototypes in action

    ```javascript
    let rikerIpsum = "Ensign Babyface! Smooth as an android's bottom, eh, Data? The unexpected is our normal routine. We could cause a diplomatic crisis. Take the ship into the Neutral Zone When has justice ever been as simple as a rule book? You did exactly what you had to do. You considered all your options, you tried every alternative and then you made the hard choice.";
    const filteredRikerIpsum = rikerIpsum.replace(/[^a-zA-Z ]/g, "");

    const array = ["I", "will", "obey", "your", "orders.", "I", "will", "serve", "this", "ship", "as", "First", "Officer.", "And", "in", "an", "attack", "against", "the", "Enterprise,", "I", "will", "die", "with", "this", "crew.", "But", "I", "will", "not", "break", "my", "oath", "of", "loyalty", "to", "Starfleet."]

    array.forEach(index => {
    	console.log(index)
    })

    const repeatedArray = array.map(index => {
    	return index + index
    })

    const arrayBackToString = array.reduce((accumulator, currentValue) => {
    	return accumulator + currentValue
    })
    ```