# Intro to Typescript

## Javascript The Bad Parts

[Wat](https://www.destroyallsoftware.com/talks/wat)

- What's the output?
  ```jsx
  // 
  console.log(Infinity / -0);

  console.log([0, -1, -2].sort());

  const array = [{
      "id": 1,
      "name": "Leanne Graham",
      "company": {
          "name": "Romaguera-Crona",
          "catchPhrase": "Multi-layered client-server neural-net",
          "bs": "harness real-time e-markets"
      }
  }, {
      "id": 2,
      "name": "Ervin Howell",
      "company": {
          "name": "Deckow-Crist",
          "catchPhrase": "Proactive didactic contingency",
          "bs": "synergize scalable supply-chains"
      }
  }, {
      "id": 3,
      "name": "Clementine Bauch",
      "company": {
          "name": "Romaguera-Jacobson",
          "catchPhrase": "Face to face bifurcated interface",
          "bs": "e-enable strategic applications"
      }
  }]
  const doh = array.map(index => {
      index.company = undefined;
      return index;
  });
  console.log(doh)
  ```
    - Results:
      ```jsx
      -Infinity      // Shouldn't be able to divide by zero, and definitely not negative.
      [ -1, -2, 0 ]  // Sorted as if it was a string.
      
      [
        { id: 1, name: 'Leanne Graham', company: undefined },
        { id: 2, name: 'Ervin Howell', company: undefined },
        { id: 3, name: 'Clementine Bauch', company: undefined }
      ]
      // Company still exists?!
      ```

- Lack of support for object composition - making objects out of smaller objects
- `this.foo === "anyones best guess"`
    - Use of this is extremely inconsistent

## Fixing the Bad Parts

### Functional Programming
- Javascript is the first major programming language to embrace the Functional Programming paradigm in a non-academic setting (sorry Lisp, Scheme, and Scala)
- Functional Programming is an approach of structuring software based on the mathematical concept of a function
- Functional Programming emphasizes
    - Writing software based on functions instead of classes.
        - Closures - allow us to do tricky things with variable scope that we wouldn't otherwise be able to do
            - Example from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures
          ```jsx
          function makeAdder(x) {
            return function(y) {
              return x + y;
            };
          }
  
          var add5 = makeAdder(5);
          var add10 = makeAdder(10);
  
          console.log(add5(2));  // 7
          console.log(add10(2)); // 12
          ```
            - makeAdder becomes a "factory" that allows us to create functions on the fly
    - Avoidance of side effects
        - no operation allowed that affects the outside scope of a function.
        - https://xkcd.com/1790/
    - Immutability of data
        - Javascript is a pass by reference language - a function shouldn't change something that's passed to it but rather return a new value.
    - Use of pure functions
        - Returns the same output for the same input.
        - Does not cause side effects outside the function

### Typescript
- Typescript is a strongly typed superset of JavaScript that transpiles into plain JavaScript
    - transpile - convert one language into a similar language
    - Javascript can be run everywhere, but Typescript can't, so we want our end product to run in JS
- Typescript uses the same syntax JavaScript developers know - no need for new language
- Typescript incorporates  standard OOP paradigms and cutting edge javascript features

  ![](intro-typescript-images/js-vs-typescript.png)

- Features include
    - Strict type checking
        - no more worrying if 1 == 'one' == '1' == [1] etc. (all evaluate to false)
    - Fancy object-oriented abilities - Mixins/Traits and Interface support
        - we don't use these in the bootcamp, but lots of other places do
- For a five minute intro to Typescript checkout [Typescript handbook](https://www.typescriptlang.org/docs/handbook/basic-types.html)

### ECMAScript
- The specification that defines Javascript
    - more info: https://www.freecodecamp.org/news/whats-the-difference-between-javascript-and-ecmascript-cba48c73a2b5/
- Features
    - nullish coalescing operator
        - `console.log(value ?? default)`
        - if left side of the operator is null or undefined, use the right side instead
        - Useful for error messages if a value isn't set
        - More info: https://mariusschulz.com/blog/nullish-coalescing-the-operator-in-typescript
        - technically vanilla JS (ECMAScript), not TypeScript
    - optional chaining
        - `object.firstProperty?.secondProperty`
        - Allows us to access secondProperty only if firstProperty is defined.  In vanilla JS we get an ugly error if firstProperty is undefined

### The takeaway
ECMAScript and Typescript are all over.  If you're going to program in modern JavaScript, you will definitely have to learn ECMAScript, and you probably will need to learn Typescript as well.