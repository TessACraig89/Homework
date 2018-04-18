# Webpack

## What is Webpack?

Webpack is a module bundler. It takes react apps, and any other code based on modules, and creates one simple JS file out of it. That is its main function. It comes with create-react-app, and is what you are using when you do `npm run build`. It also can do many other cool things!

Let's evaluate what happens when we run `npm run build` and then take a look at what else Webpack can do for us!

#### React Scripts

React Scripts is not Webpack. is a tool for creating scripts that do things to our React App. It has a "build" script that *uses* webpack. The following is some exerpts of code and comments explaining what the build script does. You can find this in `node-modules/react-scripts/scripts/build.js`

```js

// First, read the current file sizes in build directory.
// This lets us display how much they changed later.
//...
// Create the production build and print the deployment instructions.
function build(previousFileSizes) {
  console.log('Creating an optimized production build...');
  // Calling on webpack:
  let compiler = webpack(config);
  return new Promise((resolve, reject) => {
    compiler.run((err, stats) => {
      //...
    });
  });
}
```

OK! So now we know that react-scripts has a build script that gives us some info on how big our app is before and after the build, and call `webpack(config).run` to do the actual building. Let's take a look at webpack now!

#### Webpack code

We can track down the `webpack()` function in `node-modules/webpack/lib/webpack.js`.

It has a 117 lines of code, most of it pulling in additional dependencies. The magic happens around line 24:

```js
compiler = new Compiler();
compiler.context = options.context;
compiler.options = options;
new NodeEnvironmentPlugin().apply(compiler);
if(options.plugins && Array.isArray(options.plugins)) {
  compiler.apply.apply(compiler, options.plugins);
}
compiler.applyPlugins("environment");
compiler.applyPlugins("after-environment");
compiler.options = new WebpackOptionsApply().process(options, compiler);
```

We can keep digging, and we will find more and more dependencies all the way down to Webpack finally taking advantage of the Node File Systems module that can read and write files. Why is it so damn complicated? Well, Webpack is famously versitile, extremely configurable, and has LOTS of plugins. Making all of that work together is complicated! Luckily we can leave the complexity to the Webpack devs and just use it!

## Webpack Plugins

So I mentioned Webpack uses plugins. The idea is, while Webpack is already compiling all of your files into static files and minifying them, why not let the same tool do some of the other stuff developers sometimes need to happen to their code. These plugins usually also work as stand alone tools! Some kind developers have then created a "loader" for that tool, so it can be seemlessly encorporated into the Webpack build.

Like these things:

#### Babel:

[Babel](https://babeljs.io/) is a stand alone tool that can also be plugged in to Webpack. It translates ES6 into ES5 so your ES6 apps don't break on old browsers! [Babel Loader](https://github.com/babel/babel-loader) comes enabled with create-react-app, so we don't have to think about it for another moment :)

#### Sass Loader:

[Sass](https://sass-lang.com/) is like CSS if CSS was a real programming language. It stands for Syntactically Awesome Style Sheets, and it is pretty awesome. With Sass you can create variables for things like div width's, font-sizes, fonts, colors -- really anything. Only trouble is **browswers don't speak Sass**, only CSS. Enter [Sass Loader](https://github.com/webpack-contrib/sass-loader), which translates Sass into CSS. This takes a little set up, like most Webpack plugins. Like most Webpack plugins the set up is basically:

- `npm install my-plugin`
- Add the plugin to the plugins section of the webpack config file. [info on this here](https://medium.com/javascript-training/beginner-s-guide-to-webpack-b1f1a3638460)

Here's a quick peak at an example webpack config file:

```js
var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');

module.exports = {
  context: __dirname,
  devtool: debug ? "inline-sourcemap" : null,
  entry: "./js/scripts.js",
  output: {
    path: __dirname + "/js",
    filename: "scripts.min.js"
  },
  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
};
```

#### Linters:

Another thing we can do while compiling things is **check our code against best practices**. Linters are great tools that do just this. They go through your code and give warnings that your terminal or browser might miss, and also warnings about inconsinstent code like `() {` vs `(){`. These tools can save software teams a TON of time. Rather than arguing about style, or using valuable code review energy for things like this, just let the linter catch it. [ESLint](https://eslint.org) is one such linter and [ESLintLoader](https://github.com/webpack-contrib/eslint-loader) is the Webpack plugin to make it work with Webpack.


#### Much more:

[There's tons more](https://github.com/webpack-contrib/awesome-webpack). [Inline SVG files automatically](https://github.com/jhamlet/svg-react-loader), [Compiling CoffeeScript](https://github.com/webpack-contrib/coffee-loader) and [TypeScript](https://webpack.js.org/guides/typescript/), and more plugins all the time!

## More Resources:

[React + Webpack from Free Code Camp](https://medium.freecodecamp.org/learn-webpack-for-react-a36d4cac5060)
