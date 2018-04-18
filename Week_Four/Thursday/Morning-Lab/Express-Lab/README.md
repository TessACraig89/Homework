![GA Cog](https://camo.githubusercontent.com/6ce15b81c1f06d716d753a61f5db22375fa684da/68747470733a2f2f67612d646173682e73332e616d617a6f6e6177732e636f6d2f70726f64756374696f6e2f6173736574732f6c6f676f2d39663838616536633963333837313639306533333238306663663535376633332e706e67)
# Welcome to the Express.js Lab!

### Let's pratice more with Express.js and Node

#### First were going to set up a simple Express App.

- Make a file called ```app.js``` and use the code below to build your server.
 * you can also review the [codebase](https://git.generalassemb.ly/WDIplus-ATX/Express-Lab/tree/master/express-app)



```
const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(3000, () => console.log('Example app listening on port 3000!'))

```



- Taking what we learned in this morning's lesson, we can now install express.
* ```npm init```
* Accept the all default settings for setting up your .json file _unless you would like to add your name as the author ect_
* ```npm install express --save```
* Sanity check! Run ```node app.js``` to make sure your app is being hosted!
* Go to ```http://localhost:3000/``` in your browser to make sure your root route is getting a response.
* Profit!




 As you may remember in this morning's lesson the ```app.get()``` method in our server is sending a string response, ```'Hello World'``` whenever the root route ```'/'``` is requested.



 Assuming you didn't change your code, what would happen if the route ```/kittens``` was requested instead?
 - Go ahead and finish building your express app
 - Test this URL in your browser and see what happens ```http://localhost:3000/kittens```
 - What changes could you make to have your Express server send a different response


### For this lab we're going to practice adding routes to our express app.

- Combining what we learned in the lesson today lets create routes for our Express App!
- We will be using ```GET``` requests and your responses should vary depending on the route.
- Your responses should return a string, just like in our ```'Hello World'``` example.
- Test your routes and responses in the browser for functionality
- Be sure to take advantage of ```nodemon```, otherwise you'll need to start and stop ```localhost``` everytime your change your code
- Try to imagine a real world website and what kind of requests it might receive from users 

#### Show us your creativity! Add some humor to your apps response strings!
![Funny Gif](https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif)

#### Bonus: 

Can you whip up a quick front end with:
- an Ajax call that GETs data from your backend and
- Displays it in the DOM? 

HINT: Express servers have a security feature by default where they do not allow requests from other domains! This is called CORS or Cross Origin Requests. Here's how to get around it: https://enable-cors.org/server_expressjs.html

(OMG, you are being a full stack dev rn)
