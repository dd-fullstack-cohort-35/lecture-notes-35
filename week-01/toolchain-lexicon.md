# Toolchain and Lexicon

## Intro
- Question: What technical tools (software, languages, applications, etc.) did we use during the prework?
    - JavaScript
    - WebStorm
    - HTML
    - CSS
    - Git
    - GitHub
    - ssh/putty
    - command line

## What We Teach
- Modified MERN Stack
    - MySQL database - holds the information in a way that is quickly retrievable
        - In classic MERN stack, the M stands for MongoDB - Similar idea, but architecture of the database is slightly less formal.
    - Express - Javascript platform that acts as a way for us to interact with the database more naturally
    - React frontend javascript library - Builds page elements on the browser-side
    - Node - Allows us to run JavaScript server side, rather than browser-side
- Other technologies
    - Linux (Ubuntu) operating system (OS) - provides the platform for our server
    - Apache and nginx webservers
        - two flavors of the same technology
        - respond to incoming requests and gives out information
    - Docker - How we host our websites using containerization
    - Bootstrap - tool to help put together responsive websites quickly
- Concepts
    - Data design

## Prework Tools
- **version control** - Software that tracks changes to files
    - makes collaboration on projects easier
    - **Git** - our version control system
        - Created by Linus Torvalds for work on the Linux project
    - **GitHub** - version control hosting platform
    - **repo/repository**: specific git project
    - Git commands
        - **clone** - copy a remote repository to a local machine
        - **add** - tell Git to watch this file
        - **commit** - tell Git that this file/folder is at a point ready for tracking
            - Do this a lot!  Better too many than too few.
        - **push** - Send this code to remote repo (GitHub)
    - We will soon use command line for all git commands, and will be using git branching
- **server** - computer with special software that is accessible to remote users, usually via the web
    - **student server**: server that you have been using (ddc-web-student.cnm.edu)
    - server commands
        - **cd**: change directory `cd /home`
        - **ls**: list files/directories
        - **mkdir**: make a new directory.
        - **rm**: remove a file
        - **rm -rf**: remove recursive force (remove a directory).
    - **deployment** - specific project on the student server.
    - **IDE** - Integrated development environment.  Software used to write code, and provides extra related tools
        - We use WebStorm in this class
        - Not the same as text editor!

## Open Source
- Question: Can anybody tell me what open source is?
- **open source** - code is freely available and open to use
    - Free as in beer
    - Free as in speech
    - Free as in kittens
    - **Apache License version 2.0**: Open Source License that we use for all class projects
        - allows you to take your projects after the class is over
        - anybody else can also take and use your code as long as they give you credit
        - But wait, does that mean I can't make money from my work? NO.

## Programming terminology
- **function** - a block of code that does one job well
- **parameter** or **argument** -  a value being passed into a function
    - functionName(parameter1, parameter2) {}
    - functions are a black box.
- **return value** - value given back when a function executes
    - always only one
- **body** - the code inside of the function
- **throws** - exceptions/errors that occur in the function and are passed back to the parent function
- **function signature** - the unique name of the function, and how you call it in other locations
    - $value = functionName(parameter1);
- **comment** - text in a code file that is there
- **DocBlock**: special comment that defines how the function will behave
- **type**: data type (IE int, string, array, object)

## Example Function:
```javascript
/**
 * Add two numbers together.
 * 
 * @param {number} parameter1 The first number to add.
 * @param {number} parameter2 The second number to add.
 * 
 * @return {number} The sum of parameter1 and parameter2.
 *
 * @throws {error} If parameter1 is not a number.
 */
function addNumbers(parameter1, parameter2) {

  // Throw an error if parameter1 is non-integer.
  if(typeof(parameter1) !== number ) {
    throw ("parameter1 must be an integer");
  }

  // Add the values together.
  let answer = parameter1 + parameter2;
  return answer;
}

// Examples of function calls.  myVariable will equal 3. 
let myVariable = addNumbers(1, 2);

// anotherVariable will equal -6.
let anotherVariable = addNumbers(-14, 8);  

// thirdVariable will equal -3.
let thirdVariable = addNumbers(myVariable, anotherVariable)
```

## Style Guide
http://ddc-web-curriculum.cnm.edu/style-guide/