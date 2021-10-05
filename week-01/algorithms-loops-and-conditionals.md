# Algorithms, conditionals, and loops

## Algorithms
- **algorithm** - a step-by-step process used to solve a problem
- **pseudocode** - an informal language that outlines an algorithm, not meant to be run on a computer
    - Examples
        - https://www.programiz.com/article/algorithm-programming
        - https://www.unf.edu/~broggio/cop3530/3530pseu.htm
- Example pseudocode algorithm: Fahrenheit to Celsius Conversion
  ```
  Given tempFahrenheit:  
  Set intermediaryVariable to tempFahrenheit - 32;  
  Set tempCelsius to intermediaryVariable * 5 / 9;  
  return tempCelsius;
  ```

## Conditionals
- `if` blocks evaluate *boolean expressions*, which are `true` or `false`
    - if the statement evaluates to true, then the block is executed
    - `||` means 'or', `&&` means 'and'
    - **Examples**
        - `x > 0`
        - `x >= 0`
        - `answer === 42`
        - `string.contains("fuzzy")`
        - `someArray.length > 4`
        - `x > 10 && x < 20` - checks if x is between 10 and 20
        - `person.inClass() || person.isInstructor()` - if this person is in class or an instructor
- `else` is evaluated if the `if` statement is not true
- `elseif` or `else if` is evaluated only if both
    - the original if statement is `FALSE` and
    - the conditional for this is `TRUE`
- You can nest if/elseif/else statements inside each other
- Types of equality
    - `=` - assign the value of the right side to the left side
    - `==` - check if this evaluates to the same value if we do some type conversion
    - `===` - check if this is exacly the same.
        - Use this one where possible!
- Example:
  ```javascript
  // Get the current hour of the day.
  let t = date('H');

  // Output a customized message.
  if (t < 10) {
    console.log('Have a good morning!');
  } elseif (t < 20) {
    console.log('Have a good day!');
  } else {
    console.log('Have a good night!');
  }
  ```

- Class Exercise: Build a pseudocode algorithm that outputs the cost for a ticket for admission to the
  Albuquerque Museum: https://www.cabq.gov/culturalservices/albuquerque-museum/plan-your-visit/admission-ticketing


## Loops
- **loops** - blocks of code that are (possibly) executed multiple times
- `while` - keep doing this as long as the condition is true
- `do...while` - do this at least once, then keep doing this as long as the condition is true
    - Avoid. There is rarely a good reason to use a do while loop.
- `for` - special kind of while loop that uses special syntax to save lines of code
    - Use these when you're trying to do something n times
- `foreach` - do this once for each element in an array or object
- Example
  ```javascript
  // All of the following loops do the same thing
  
  for(let i = 0; i < 16; i++) {
    console.log ('meow');
  }

  let i = 0;
  while(i < 16) {
    console.log ('meow');
    i++;
  }

  let i = 0;
  do {
    console.log ('meow');
    i++;
  } while(i < 16);
  ```
## Class exercises in pseudocode
- Write an algorithm that runs from 1 to 20. When the number is even, output 'fizz'. When the number is divisible by 5, output 'buzz'. If it is neither even nor divisible by five, output 'foo'.
- Given two numbers, write an algorithm that outputs the sum of all odd numbers between those numbers, inclusive.