# Promises!

Promises are another one of those things that have been around in programming for a long time, but are relatively new to JavaScript.

They are extremely useful, allowing our programs to perform more asynchronously, rather than waiting for something to resolve before moving on to what is next.

At it's simplest a promise in JavaScript works like this:

1. Some operation that takes time, like an AJAX call, instead of returning nothing until it is done, returns a "promise".
2. This promise is simply a JavaScript Object, that models a promise, in the way that let orange = new Orange() can model an orange.
3. When the AJAX call returns data, then the promise is "kept" or resolved, which triggers the next action.
4. In the mean time, the program was able to keep running instead of hanging around waiting.

For a more in depth explanation of promises in JS, how they work, and how and where they are used, please read the folowing:

- https://developers.google.com/web/fundamentals/primers/promises

- https://spring.io/understanding/javascript-promises

- https://www.promisejs.org/
