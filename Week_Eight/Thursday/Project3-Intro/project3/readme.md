# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Project #3: Building a Full Stack MERN Application

### Overview

While your last project taught you how to get started with writing a fullstack application in JavaScript using Express, Mongoose, and Node, this project will have you building another full stack application, but this time with a React front-end.

You will build an app with two major components:

1. An API of your own design, built using Node, Express, and Mongoose, that serves JSON.
2. Front-end React code that updates the UI and makes requests to the API.

---

**Note:** You won't want to use Express Generator for this, but consider using [express-generator-api](https://github.com/pietgeursen/generator-api)

### Requirements

> ### *In case you were thinking about it, do not use Redux for this project*

#### Planning Requirements/ Proposals
  - Clearly defined user stories for you MVP
  - Wireframes
  - ERD *if* you're planning on having more than one resource, and a relationship as a stretch goal
  - Trello board with granular todo items
  - Readme describing your project idea with links/ images of above
  
#### Back-End Requirements
  - This app must contain a Node, Express, and Mongoose backend API with at least 1 model. No associations are required. User authentication is **strongly discouraged since it is often a major stumbling block**.
  - Alternatively, you may create your back end using Firebase! This can potentially be a big time saver. Please note that if you do this, we will be looking for a little more from you on the front end. 
  - Must have Create, Read, Update, and Destroy functionality.

#### Front-End Requirements
  - This app must use a React front end that leverages the backend API in the above requirement.
  - Must use React Router to handle multiple views.
  - Must communicate with the back-end API RESTfully to Create, Read, Update, and Destroy resources, using fetch or axios.

#### Deployment
  - Your API must be deployed to Heroku and your front-end must be deployed to GitHub pages or Surge.
  - We recommend Surge as using it to deploy is [very easy](https://daveceddia.com/deploy-create-react-app-surge/)

    > You MUST deploy your back-end and front-end separately. This assignment is to make a front end and separate back end using decoupled architecture. This will make it far easier to debug your deployed applications and manage your deployments. One way to get yourself in trouble in this project would be to attempt to follow a tutorial for MERN stack that is NOT decoupled. 

[See checklist for deploying to Heroku with MLAB cloud-hosted MongoDB here](https://git.generalassemb.ly/gist/alexw/856f0771b4bcac583fd82a4276a86d60)

[Check out this sample App code that sucessfully deploys to Heroku using MongoLab](https://github.com/awhit012/testing-mongo-deploy)

---

### App Organization

You should split your application into separate repositories, one for your React front-end and another for your Node-Express-Mongoose API.

---

### Process

* **Keep user stories small** and well-defined. Remember: user stories focus on what a user *needs*, not what development tasks need accomplishing.
* **Write pseudocode** before you write actual code. Thinking through the logic first helps.
* **Don't hesitate** to write throwaway code to solve short-term problems.
* **Read the docs** for whatever technologies / frameworks / API's you plan to use. (See ["RTFM"](https://en.wikipedia.org/wiki/RTFM))
* **Continuously Deploy** your code.

---

### Code

* **Keep your code DRY** and build your API RESTful.
* **Be consistent** with your code style. (Pick single or double quotes, either put a space between `) {` or don't).
* **Commit early; commit often.** Don't be afraid to break something because you can always go back in time to a previous version (so long as you're committing often).
* **Deploy early; deploy often.** Deploy your work as early as possible, even if you don't really have anything completed. Heroku issues **always** pop up. Don't be caught short just before the submission deadline!
* **Name things appropriately.  Comment as necessary.** Do your naming conventions make sense? Would another developer be able to look at your app and understand what everything is? (See ["self-documenting"](https://en.wikipedia.org/wiki/Self-documenting)).  Even if it's obvious, comments can help to explain the intent -- the what and why.  This allows the next developer to understand the purpose and decide what can be adjusted to achieve the same goal.
* **Ensure it is well-formatted.** Are you indenting consistently? Can we find the start and end of every div, curly brace, etc?  Organizing the hierarchy is key to understanding.

We recommend using [StandardJS linting](https://github.com/standard/standard#install). Instructions for Atom package installation [here](https://github.com/standard/standard#atom).

---

### Project Ideas

For this project, work with your team to build a creative product that you actually think someone will want to use.

If you're struggling to come up with your own project ideas, checkout [r/startup_ideas](https://www.reddit.com/r/Startup_Ideas/) on reddit or [requestforstartup.co](https://requestforstartup.co/).

### Evaluation and Submission

[See the requirements for the contents of the submission here.](evaluation.md)


### Attendance

Remember, you are expected to be in class at 9:00 AM every day, and remain there until 4:30 PM (aside from lunch, obvi).

---

### Bonuses

You should only attempt these bonuses if and only if you've satisfied project requirements.

#### Two Resources

#### Two Resources with a Relationship

#### User Authorization

Consider whether or not you want to introduce a barrier to entry for your application. Does it fit in with the idea of your application? User authorization can be really tricky, *as you all know*.

  > "Do I *really* need to log in just so I can post a link to a GIF?"

[Here](https://git.generalassemb.ly/ga-wdi-lessons/express-passport) is a GA lesson explaining how auth can be implemented in an Express application.

#### Maps

If your application uses physical locations, consider adding a map ***as a bonus feature*** to your application. [Check out this Google Maps component library](https://tomchentw.github.io/react-google-maps/).
