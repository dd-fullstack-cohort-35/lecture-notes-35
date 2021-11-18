# Debugging

## What is debugging?
- **debugging** - Finding and fixing problems in code that cause it not to operate in the way it was designed
- ideally, all bugs are found and eliminated
- realistically, this isn't always possible
    - bugs may not affect enough users
    - bugs may be so difficult to fix that it is not worth it to fix them
    - users may develop faster workarounds
- many companies manage their bugs using tickets
    - When the bug affects enough users, the ticket is placed into the next sprint

## How do we debug?
- debugging is more art than science
- relies on experience
    - one of the biggest differences between an experienced programmer and a novice is how long it takes them to find and fix bugs

### Soft skills for debugging
Although these are often overlooked by novices, they are usually much more useful than the technical tools.
1. Zoom out - Think about what purpose this code serves. Often, there can be a simpler way to accomplish the same thing.
2. Write down your preconditions - What should be true before this code runs in order to make it run correctly. Is it all there?
3. Write down your postconditions - What you would expect your code to output, given your preconditions? Evaluate the assumptions you're making to connect your preconditions and postconditions.
4. [Rubber ducky](https://en.wikipedia.org/wiki/Rubber_duck_debugging) - Explain a bug to your friend or relative, even if they don't know programming. Often, verbalizing the problem will help you see a new approach.
5. Ask your peers for advice - Perhaps they have seen this problem before.
6. Step away - Literally, put some distance between you and the computer. Get up, take a walk, and think about it without your screen in front of it.
7. Sleep on it - Coming back to a problem with fresh eyes can present new solutions.
8. Remember the big picture - Most bugs are small and relatively inconsequential. Don't get trapped into feeling bad about something small.
9. Alleviate it - Is there an easy solution that will solve almost all of the problem?  If so, implement that solution and come back to the hard bug when it's worth it.
10. Reevaluate the reward - Sometimes, tough bugs simply aren't worth the time it would take to fix them. If you've already spent 8+ hours on it, is it really worth fixing it?

### Technical tools
- Comment out code, copy it, and change it so that you have a known starting place if you need to go back to it.
- Print variables to the screen
    - in JS: `console.log` - https://developer.mozilla.org/en-US/docs/Web/API/Console/log
- Use these variable examinations to find the line where your code is going wrong
    - Once there, use the soft skills of debugging to fix the issue
- More formal debuggers
    - browser tools - can look at all variables that are contained on browser-side javascript
    - [various methodologies for server-side JS](https://raygun.com/javascript-debugging-tools) - outside of the scope of this class, but you can look into them if you are curious.
