# Express-generator-and-partials

## It's time for you to learn the magic of Express Generator. 

[![Express Logo](https://i.cloudup.com/zfY6lL7eFa-3000x3000.png)](http://expressjs.com/)

[Express'](https://www.npmjs.com/package/express) application generator.

[![NPM Version][npm-image]][npm-url]

## Installation

```sh
$ npm install -g express-generator
```

## Quick Start

The quickest way to get started with express is to utilize the executable `express(1)` to generate an application as shown below:

Create the app:

Here start by typing express and the name of your app AND also add ejs and a gitignore. 

```bash
$ express (name of your app) --ejs --git
```
This command did everything init for you. 

Next cd into the directory (name of your app) 

Then 

Install dependencies:

```bash
$ npm install
```

Start your Express.js app at `http://localhost:3000/`:

```bash
$ npm start
```

## Command Line Options

This generator can also be further configured with the following command line flags.

        --version        output the version number
    -e, --ejs            add ejs engine support
        --pug            add pug engine support
        --hbs            add handlebars engine support
    -H, --hogan          add hogan.js engine support
    -v, --view <engine>  add view <engine> support (dust|ejs|hbs|hjs|jade|pug|twig|vash) (defaults to jade)
    -c, --css <engine>   add stylesheet <engine> support (less|stylus|compass|sass) (defaults to plain css)
        --git            add .gitignore
    -f, --force          force on non-empty directory
    -h, --help           output usage information




*************

# Partials in EJS

## EJS Partials footer.ejs, head.ejs, header.ejs

Like a lot of the applications we build, there will be a lot of code that is reused. We'll call those partials and define three files we'll use across all of our site: head.ejs, header.ejs, and footer.ejs.

We can create a folder in views called partials and store any resuable code in there. 


Let's make some example files 
Here is a head.ejs 

```
<!-- views/partials/head.ejs -->
<meta charset="UTF-8">
<title>Super Awesome</title>

<!-- CSS (load bootstrap from a CDN) -->
<link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css">
<style>
    body    { padding-top:50px; }
</style>
```


Here is header.ejs

```
<!-- views/partials/header.ejs -->

<nav class="navbar navbar-default" role="navigation">
<div class="container-fluid">

    <div class="navbar-header">
        <a class="navbar-brand" href="#">
            <span class="glyphicon glyphicon glyphicon-tree-deciduous"></span>
            EJS Is Fun
        </a>

        <ul class="nav navbar-nav">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
        </ul>
    </div>

</div>
</nav>
```

Now let's do a footer.ejs

```
<!-- views/partials/footer.ejs -->
<p class="text-center text-muted">© Copyright 2014 The Awesome People</p>

```

## Using EJS Partials

We have our partials defined now. All we have to do is call them in the files that we need them. Let's go into index.ejs and users.ejs (or any other page) and use them in there. We will also define the full width and sidebar layouts here using the good old Bootstrap grid. Using Partials The syntax to use an EJS partial is: <% include FILENAME %>. The path to the partial is relative to the current file.


Here is how we would do this 

```
<!-- views/pages/index.ejs -->

<!DOCTYPE html>
<html lang="en">
<head>
    <% include ../partials/head %>
</head>
<body class="container">

<header>
    <% include ../partials/header %>
</header>

<main>
    <div class="jumbotron">
        <h1>This is great</h1>
        <p>Welcome to templating using EJS</p>
    </div>
</main>

<footer>
    <% include ../partials/footer %>
</footer>

</body>
</html>
```

Now try doing this for another page.




# Passing Data to Views (this is optional for this lab but very helpful) 

Let's define some basic variables and a list to pass to our home page. Go back into your server.js file and add the following inside your app.get('/') route.

```
// server.js

// index page 
app.get('/', function(req, res) {
    var drinks = [
        { name: 'Bloody Mary', drunkness: 3 },
        { name: 'Martini', drunkness: 5 },
        { name: 'Scotch', drunkness: 10 }
    ];
    var tagline = "Any code of your own that you haven't looked at for six or more months might as well have been written by someone else.";

    res.render('pages/index', {
        drinks: drinks,
        tagline: tagline
    });
});
```

We have created a list called drinks and a simple string called tagline. Let's go into our index.ejs file and use them.

## Single Variable


To echo a single variable, we just use <%= tagline %>. Let's add this to our index.ejs file:
```
<!-- views/pages/index.ejs -->
...
<h2>Variable</h2>
<p><%= tagline %></p>
...
```

## Looping Over Data

To loop over our data, we will use .forEach. Let's add this to our view file:

```
...
<h2>Loop</h2>

<ul>
    <% drinks.forEach(function(drink) { %>
        <li><%= drink.name %> - <%= drink.drunkness %></li>
    <% }); %>
</ul>
...
```
Now we can see in our browser the new information we have added!





## License

[MIT](LICENSE)

[npm-image]: https://img.shields.io/npm/v/express-generator.svg
[npm-url]: https://npmjs.org/package/express-generator
[travis-image]: https://img.shields.io/travis/expressjs/generator/master.svg?label=linux
[travis-url]: https://travis-ci.org/expressjs/generator
[appveyor-image]: https://img.shields.io/appveyor/ci/dougwilson/generator/master.svg?label=windows
[appveyor-url]: https://ci.appveyor.com/project/dougwilson/generator
[downloads-image]: https://img.shields.io/npm/dm/express-generator.svg
[downloads-url]: https://npmjs.org/package/express-generator
[gratipay-image]: https://img.shields.io/gratipay/dougwilson.svg
[gratipay-url]: https://gratipay.com/dougwilson/

https://scotch.io/tutorials/use-ejs-to-template-your-node-application#toc-ejs-partials-footerejs-headejs-headerejs
