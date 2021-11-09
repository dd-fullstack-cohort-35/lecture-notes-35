# Software architecture and design

## What is software architecture?
* **software** - programs that run on a computer
    * Can be small, e.g. the code that we write in a snap challenge, or large e.g. Linux operating system, MS Word or WebStorm
* **hardware** - the physical components of the computers that our code runs on
    * Can be small individual components e.g. processor, hard drive, memory stick, or large complete piece of technology e.g. laptop, mobile phone
* **firmware** - The low-level software that provides an interaction layer between software and hardware
* Developers deal mostly with software.
* Hardware and firmware are more commonly managed by IT professionals like sysadmins
* **software architecture** - the high-level design of a software program
    * Some people think of software architecture and software design as different things, but for the scope of this class we use them interchangeably.

## The main idea of all software architecture
* Take a large problem that is difficult and break it into many smaller, easier-to-solve problems.
* You've already done this type of thinking: planning poker exercise
* If you understand this kind of thinking, you will be able to use many different software designs effectively

## Software design patterns
* Many different ways to design software, each with their own benefits and drawbacks
* Some people swear by one or the other, leading to often esoteric arguments
* Examples of software architecture patterns
    * Procedural
        * Example (adapted from https://stackoverflow.com/questions/36815518/what-is-a-good-example-that-shows-the-difference-between-oop-and-procedural-prog)
          ```javascript
          var myCarMake = "Chevy";
          var myCarYear = 2004;
          var myCarKgs = 2000;
          var myCarColor = "blue";
    
          function go(make, year, kgs, color) {
              alert(make + " " + kgs + " " + year + " " color);
          };
    
          go(myCarMake, myCarYear, myCarKgs, myCarColor);
          ```
        * Do things from the top of the code to the bottom of the code
        * Advantage: Easiest programming to pick up initially, simple control flow.
        * Disadvantage: Can lead to a lot of duplication of code if you have to do similar tasks often.
    * Object oriented
        * Example (from https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_JS)
          ```javascript
          function createNewPerson(name) {
            const obj = {};
            obj.name = name;
            obj.greeting = function() {
              alert('Hi! I\'m ' + obj.name + '.');
            };
            return obj;
          }
          
          const salva = createNewPerson('Salva');
          salva.name;
          salva.greeting();
          ```
        * Create code "objects" that contain your code
        * Advantage: humans often find it easier to think in nouns than in verbs, e.g. it's easier to think of a person walking than it is to think about "walking" without a person doing it.
        * Disadvantage: Code is fundamentally more like a verb, and so we have to write a lot of extra code to wrap our verbs in nouns.
    * Functional
        * Example (from https://medium.com/the-renaissance-developer/concepts-of-functional-programming-in-javascript-6bc84220d2aa)
          ```javascript
          const string = " I will be a url slug   ";
    
          const slugify = string =>
            string
              .toLowerCase()
              .trim()
              .split(" ")
              .join("-");
    
          slugify(string); // i-will-be-a-url-slug
          ```
        * Advantage: Can create architecture that will be broken down into very small functions that always do the same thing.
        * Disadvantage: Reading nested functions can be difficult, and code does not look very similar to other languages.
* All projects should think about which pattern(s) they are going to use and have rules for when to use them.
    * worst case is a little bit of everything in no clear organization - leads to technical debt
        * **technical debt** - code or infrastructure that is out of date, poorly written, or otherwise needs work
        * technical debt eventually needs to be repaid, either by throwing it out and starting over with a whole new project, or by redoing it
        * Inoconsistent software design makes code unreadable, and the application very difficult to understand.
    * We use mostly a functional approach with a bit of procedural code where either
        * pure functional programming would make the code unreadable or
        * functional programming would run counter to dominant pattern of the libraries/platforms we are using.

## Further reading
* https://levelup.gitconnected.com/functional-object-oriented-procedural-programming-644feda5bcfc
* https://academind.com/learn/javascript/functional-vs-oop-vs-procedural/
* https://opensource.com/article/17/6/functional-javascript
* https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_JS
