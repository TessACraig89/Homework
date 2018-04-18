![GA Cog](https://camo.githubusercontent.com/6ce15b81c1f06d716d753a61f5db22375fa684da/68747470733a2f2f67612d646173682e73332e616d617a6f6e6177732e636f6d2f70726f64756374696f6e2f6173736574732f6c6f676f2d39663838616536633963333837313639306533333238306663663535376633332e706e67)

# Welcome to the Express.js Static Assets Lab!

#### First were going to set up a simple Express App.

We really can't practice this too many times. As you build it, think about every bit of code. Are you writing a JavaScript/node function? Or is it an Express function? What is happening behind the scenes?

- Make a file called ```app.js``` and use the code below to build your server.

```
const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(3000, () => console.log('Example app listening on port 3000!'))

```
- install express.
* ```npm init```
* Accept the mostly default settings for setting up your .json file _unless you would like to add your name as the author ect_
* set `main` to `app.js`
* ```npm install express --save```
* Run ```nodemon```
* Go to ```http://localhost:3000/``` in your browser to make sure your root route is getting a response.

#### Challenge 1
Get set up!

1. **set up middleware to serve static assets**
2. Create a public folder with an index.html, a error.html.
3. Put a css and js folder in your public folder as well
4. Test that static assets can be served by dropping some boilerplate html in the index.html file and going to localhost:3000/index.html

#### Challenge 2
Set up your 404 page!

1. Check out the hints for the bonus from the last exercise. 
2. Create a 'catch all' route and put it under all of the other routes.
3. Use the syntax in hint 2 to send the approriate file

#### Challenge 3
Do some classic Front End Web Developement! 

Create a real web page on the index.html. It should be documentation for a JSON API for whatever resource or resources you want. It can be a clowns API, a Rick and Morty API, a Solar System API, a chili pepper API. Up to you! Use the [OMDB documentation](http://www.omdbapi.com/)'s Usage and Examples section as a guide.

Style it! Make it interactive if you want!
Use bootstrap if you want! Use jquery! Use your toes to code! Whatever you feel like here. 

#### Challenge 4
Create the API you just documented within the same app! 

Make the routes namespaced with `/api/v1/clowns/:id` (or whatever your API is for). 
