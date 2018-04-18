![GA Cog](https://camo.githubusercontent.com/6ce15b81c1f06d716d753a61f5db22375fa684da/68747470733a2f2f67612d646173682e73332e616d617a6f6e6177732e636f6d2f70726f64756374696f6e2f6173736574732f6c6f676f2d39663838616536633963333837313639306533333238306663663535376633332e706e67)
# Relax with this RESTful Lab

| Objectives |
| :--- |
| Get more practice creating JSON APIs! |

We have a fully functioning JSON API that serves up a collection of videos and videos by ID, and a collection of comedians!

If you haven't already, finish the challenge from the earlier lesson to serve up videos by ID. 

*hint* Google is your friend. 

Next: 

## Challenge 1

Make the route that returns comedians by ID functional! 

## Challenge 2

Make a whole new resource. Whatever you want! 

1. Create an array of objects representing that resource
2. Create the route to return the collection of that resource
3. Create the route to return one resource from that collection by ID

## BONUS

#### Check out the Express documentation and look at `app.post`. Can you create a POST route to POST data?  

We will cover POST in depth tomorrow and next week 

1. Start by just sending a response, without worrying about adding the POSTED data to the array. 
2. No need to write a whole AJAX call. Test your route by using `curl` from the terminal. Take a look at [this resource](https://stackoverflow.com/questions/7172784/how-to-post-json-data-with-curl-from-terminal-commandline-to-test-spring-rest) on how to form your curl request.
3. Once you have the route working, than work on actually adding the POSTED data to the array
4. Using `curl` or your browser, can you then GET the collection you just POSTed to, and see that object in the collection?

## Super BONUS

Build a simple jQuery front end that makes an AJAX call to your backend and renders the data. 

You will need to enable [CORS](https://enable-cors.org/server_expressjs.html)
