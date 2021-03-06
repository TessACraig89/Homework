# Test Driven Development with Jasmine

## Learning Objectives

* List benefits of unit testing in collaborative development process.
* Write and run tests with Jasmine and `jasmine-node`.
* Implement hooks to DRY up test code.
* Plan a project by first creating a series of unit tests.

## Why Testing
- Having good tests is one of the best things you can ask for as a developer. Imagine writing some code and being "pretty sure" it won't break anything else when you deploy it vs being **very** sure it won't break anything AND if it does break something, it is partly the fault of the test suite. 
- Testing requires investment up front that pays off as time goes on. 

## There are always tests. 
- Sometimes those tests are automated tests written in testing frameworks like Jasmine, RSpec, Mocha, and Protractor. 
- Sometimes the tests are a QA team who manually click about, check server logs, and document the results
- Sometimes the tests are your users, who try to use your app, but find bugs. They'll let you know about the bugs **if you are lucky.** Most will just stop using your app. 

## Why TDD
- Test Driven Developement has pros and cons. 

  * Cons
    * **Time.** It's often a very large time/money investment up front. You have to write code before you can even write code.
    * **It's overkill.** I write tests later, and that will be fine. 
    * **App complexity.** My app is too simple to require testing at all, let alone TDD.
  * Pros
     * **Bug detection.** Quickly identify unanticipated errors.
     * **Code Quality.** Create standards for our code before writing it.
     * **Time.** Shorten development time through bug detection.
     * **Documentation.** Tests act as a documentation of sorts for how our code should work. Helpful to other developers and shareholders.
     * **PEACE OF MIND.**

## All Together Now

When it comes to development in teams, both the benefits and the potential pitfalls of testing practices increase. Many feel that testing is essential when working on large, complex projects.

* Take Ember.js for example. [If you look at the framework's repo](https://github.com/emberjs/ember.js#how-to-run-unit-tests), it comes packaged with a ton of tests.
* So many moving parts. And so many people contributing to them. Can you imagine how crazy this would get without testing?

Two common pain points in the real world are creating test coverage for existing code bases and ensuring that test suites are adequately maintained as an application grows in complexity. BOTH of these can be avoided by using TDD as a tool for ***planning***.  

## Do you wanna build a snowman?

For example, imagine you're Elsa from Frozen, and you want to build a snowman. Or more specifically a snowman constructor.

Before we write any of our snowman code, we're going to create a test. And before we create a test, we're going to think: What do I want my snowman constructor to do? What should the snowmen it creates be like?

```js
//I want my snowman constructor to create a snowman object
//My winter wonderland is a friendly place, so I want each snowman to have a name
//In order for it to really be a snowman, it needs to have a carrot nose.
//It also needs stick arms.
//If the snowman is named Olaf, he should like warm hugs.
```

Now that we have our features outlined, we're going to start turning it into tests. (Note: Do these look like user stories to you?)

### Specs

Using Jasmine, our tests followed a "describe...it" format, which reads like english like so:

- describe "A snowman"
  - it "should have a name"
  - it "should have a carrot nose"
  - it "should have stick arms"
  - describe "a snowman named Olaf"
    - it "should like warm hugs"

## Jasmine

Jasmine is only one testing framework. There's [Mocha](https://mochajs.org/), [QUnit](https://qunitjs.com/) and more... However, they're all very similar. Most use the same "describe...it" syntax.

### Getting set up
First, we're going to install jasmine-node globally.

It doesn't matter where you run this code:

```bash
$ npm install  -g jasmine-node
```

Now, `cd` into your project folder. If you don't have a project folder, go ahead and make one. It doesn't really matter what folder you use for what we're about to do, but if you can, you may as well get some of your project done now so you don't have to later!

I'm going to create a folder for a `snowman-constructor` project.

Inside your project folder, create a new folder called `spec`:

```bash
$ mkdir spec
```

Inside that new folder, create a file named after your model, followed by "dash-spec":

```bash
$ touch spec/snowman-spec.js
```

Now, run:

```bash
$ jasmine-node spec
```

You should get something like:

```
$ jasmine-node spec


Finished in 0.001 seconds
0 tests, 0 assertions, 0 failures, 0 skipped
```

### Scripting your Specs

Now, paste the specs you wrote earlier into the `*-spec.js` file you created.

If you run `jasmine-node` at this point, you'll just get an error. We need to properly format the code for Javascript.

A Jasmine test file will look like this:

```js
describe("the test subject", function(){

  it("should have this quality", function(){

  });

  it("should have this other quality", function(){

  });

});
```

`describe` and `it` are actually functions, just like, say, `console.log()`. They both take a string as their first argument. The second argument is a callback function.

A `describe` statement's function contains a bunch of `it` statements.

An `it` statement's function contains the code that will do the actual testing. We're not going to write that code yet -- we're just going to worry about getting set up with the proper syntax.

For the snowman builder, the result would be this:

```js
describe( "A snowman", function(){

  //My winter wonderland is a friendly place, so I want each snowman to have a name.
  it( "should have a name", function(){

  });

  //In order for it to really be a snowman, it needs to have a carrot nose.
  it("should have a carrot nose", function () {

  });

  //It also needs stick arms.
  it("should have stick arms", function () {

  });

  //If the snowman is named Olaf, he should like warm hugs.
  describe( "a snowman named Olaf", function(){

    it( "should like warm hugs", function(){

    });

  });

});
```

If I run this, I now get:

```
$ jasmine-node spec
....

Finished in 0.009 seconds
4 tests, 0 assertions, 0 failures, 0 skipped
```

Each green dot indicates a passing test.

If I add the `--verbose` flag, I get:

```
$ jasmine-node spec --verbose

A snowman - 4 ms
    should have a name - 1 ms
    should have a carrot nose - 0 ms
    should have stick arms - 0 ms

    a snowman named Olaf - 0 ms
        should like warm hugs - 0 ms

Finished in 0.01 seconds
4 tests, 0 assertions, 0 failures, 0 skipped
```

## The suite life of Jasmine

Let's break this test down according to its parts.

What you've done so far is create a **test suite**.

**The Suite**.

```js
describe( "A snowman", function(){
  // Specs go here.
});
```

A "suite" is the highest-level container in our test file.
* A suite defines what we are testing. Oftentimes, this is an object.
* Indicated using the `describe` function.
* Takes two arguments: (1) a string, (2) a function
  * (1) The string is the name of what we are testing
  * (2) The function contains the actual tests

**The Specs**

A suite contains **specs**. These are the `it` statements.

In the "spec," we target a specific part of the suite.

> "Spec" is short for "specification", which comes from "specific", as in, "we're testing a specific part of this app." Get it?

<hr>

## Great Expectations!

Now that we have the pieces of our snowman builder described, we can start thinking about how we'll know that our snowmen are living up to our expectations.

**Expectations** are the meat-and-potatoes of our tests.

* Begins with `expect`. Takes one argument that will be the input to our function.
* Followed by a **matcher** (e.g., `toBe`), which will compare the actual output to the expected output. Below are a few different options.

### Jasmine's built-in matchers

```txt
'toBe' matcher compares with ===
'toEqual' matcher
'toMatch' matcher is for regular expressions
'toBeDefined' matcher compares against `undefined`
'toBeUndefined' matcher compares against `undefined`
'toBeNull' matcher compares against null
'toBeTruthy' matcher is for boolean casting testing
'toBeFalsy' matcher is for boolean casting testing
'toContain' matcher is for finding an item in an Array
'toBeLessThan' matcher is for mathematical comparisons
'toBeGreaterThan' matcher is for mathematical comparisons
'toBeCloseTo' matcher is for precision math comparison
'toThrow' matcher is for testing if a function throws an exception
'toThrowError' matcher is for testing a specific thrown exception
```

A full list of Jasmine's native matchers can be found [here](http://jasmine.github.io/edge/introduction.html#section-Expectations).

If you're feeling adventurous, you can even [create your own custom matcher](http://jasmine.github.io/2.0/custom_matcher.html).

### Let's add the first expectation:

```js
describe( "A snowman", function() {

  it( "should have a name", function(){
    var olaf = new Snowman("Olaf");
    expect( olaf.name ).toBeDefined();
  });

//...
```

It fails!

```
$ jasmine-node spec
F...

Failures:

  1) A snowman should have a name
   Message:
     ReferenceError: Snowman is not defined
   Stacktrace:
     ReferenceError: Snowman is not defined

Finished in 0.012 seconds
4 tests, 1 assertion, 1 failure, 0 skipped
````

That's because this script has no idea what a Snowman is -- we haven't linked in a file that describes a Snowman model yet.

We can create a `snowman.js` file and put this in it:

```js
// snowman.js

function Snowman(name) {
  this.name = name;
}

module.exports = Snowman;
```

Next, I'm going to `require` that file inside my spec file:

```js
var Snowman = require("../snowman");

describe( "A snowman", function(){

  //My winter wonderland is a friendly place, so I want each snowman to have a name.
  it( "should have a name", function(){
    var olaf = new Snowman("Olaf");
    expect( olaf.name ).toBeDefined();
  });

//...
```

...and now the test passes!

# Review: Test-Driven Development Basics

## The Process, Recontextualized

![tdd flowchart](img/tdd-flowchart.png)

A planning-oriented approach TDD

  - **Think.**
    - What do we want this app/feature to do?
    - What are its components? (Think models!)
    - What properties should each of those components have? What should they be able to do?
    - What behaviors do you definitely want to avoid?
  - **Write _tests_ an outline of your app/feature using testing syntax.**
    - For today, we're going to break this down even further, first writing suites and specs, then going back and adding expectations.
  - **Run your tests.** Seeing red.
  - **Write code.** How can we make this test pass?
  - **Test passes.** Green light.
  - **Refactor and Repeat.**

You write a failing test. Your next step is to write code that will make your test pass. This is kind of like Jeopardy, where the contestants are given the answer and then come up with a question for that answer: it's backwards from what we intuitively want to do, which is write passing code first and test it later.

This process is often abbreviated **Red, Green, Refactor**: write a failing test, write the code to make it pass, then refactor. Lather, rinse repeat.

## Moving on

...at this point we would write one more expectation, then write the code to make it pass, then write the next expectation, and so on, doing everything **one test at a time**. Let's fast forward and see what a fully spec'ed snowman would look like.

>**Why is it not recommended to write *all* your expectations first, and then write all the code to make them pass?**

> Because it's pretty straightforward to write the code to make one failing test into a passing test. It's super-overwhelming to write the code to make a bunch of failing tests pass.

## The final Snowman specs:

```js
var Snowman = require("../snowman");

describe( "A snowman", function(){

  //My winter wonderland is a friendly place, so I want each snowman to have a name.
  it( "should have a name", function(){
    var olaf = new Snowman("Olaf");
    expect( olaf.name ).toBeDefined();
  });

  //In order for it to really be a snowman, it needs to have a carrot nose.
  it("should have a carrot nose", function () {
    var olaf = new Snowman("Olaf");
    expect ( olaf.features ).toContain("carrot nose");
  });

  //It also needs stick arms.
  it("should have stick arms", function () {
    var olaf = new Snowman("Olaf");
    expect ( olaf.features ).toContain("stick arms");
  });

  //If the snowman is named Olaf, he should like warm hugs.
  describe("A snowman named Olaf", function(){
    it( "should like warm hugs", function(){
      var frosty = new Snowman("Frosty");
      var olaf = new Snowman("Olaf");
      expect( olaf.hug() ).toBe( "I like warm hugs!" );
      expect( frosty.hug() ).not.toBe( "I like warm hugs!" );
    });
  });

});
```

I'm not even going to bother running `spec` because I know all but one of these tests will fail. That's not important right now. The important thing is that I'm writing `expect` statements that make sense to me because this will inform the coding decisions I make later.

## Refactor

What's not DRY about my tests? What repeats?

`var olaf = new Snowman("Olaf");`

``` js
describe( "A snowman", function(){
  var olaf;

  // this code get run before each spec
  beforeEach(function(){
    olaf = new Snowman("Olaf");
  });

  it( "should have a name", function(){
    expect( olaf.name ).toBeDefined();
  });

  it("should have a carrot nose and stick arms", function () {
    expect ( olaf.features ).toContain("carrot nose", "stick arms");
  });

  describe("A snowman named Olaf", function(){
    var frosty;
    it( "should like warm hugs", function(){
      frosty = new Snowman("Frosty");
      expect( olaf.hug() ).toBe( "I like warm hugs!" );
      expect( frosty.hug() ).not.toBe( "I like warm hugs!" );
    });
  });

});
```

### Let's Build a Snowman!

```js
// /snowman.js
function Snowman(name) {
  this.name = name;
  this.features = ["carrot nose", "stick arms"];
}

Snowman.prototype = {
  hug: function(){
    if (this.name == "Olaf") {
      return "I like warm hugs!";
    }
    else {
      return "Why are you hugging snow?";
    }
  }
};

module.exports = Snowman;
```

Let's run our test again: `$ jasmine-node spec`

```
$ jasmine-node spec --verbose

A snowman - 7 ms
    should have a name - 4 ms
    should have a carrot nose - 1 ms
    should have stick arms - 0 ms

    A snowman named Olaf - 1 ms
        should like warm hugs - 1 ms

Finished in 0.014 seconds
4 tests, 5 assertions, 0 failures, 0 skipped
```

## Additional Reading

* [Jasmine's really great documentation](http://jasmine.github.io/2.1/introduction.html)
* [Testing AJAX Calls](http://jasmine.github.io/2.1/ajax.html)
* [Testing Express Routes](https://semaphoreci.com/community/tutorials/getting-started-with-node-js-and-jasmine)
