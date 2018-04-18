# Heroku deployment!!!

### What is Heroku?

- A cloud Platform-as-a-Service (PAAS), used to deploy and manage websites and applications
- Takes the pain out of configuring servers
- Can have collaborators
- "Heroku can be a great fit for teams who want to do zero dev ops or create small apps"

### Steps to deploy

1. Go to [heroku.com](https://heroku.com) and create an account.

2. Install the heroku command line utility by running `brew install heroku`.

3. Run the command `heroku login` and log in using the email and password you signed up with.

4. Run `heroku create` in the root of your project folder.

5. Run `heroku open`, which will open your web app in your browser (if it doesn't work just skip it for now). You should see a welcome webpage with the text => Heroku | Welcome to your new app!

6. Heroku will have its own version of your git repo on its server. So, you have to push to it by running `git push heroku master`. If you get an error here, just keep going and we'll fix the error in a later step. **NOTE: any time you make changes to your repo, you'll have to push it to Heroku and GitHub.**

7. Go to the [dashboard on heroku.com](https://dashboard.heroku.com/apps) and select your newly created app.

8. Click on the configure add-ons link, then in the add-ons search box look for 'postgres' and install it.

9. **NOTE: this is for if you have API Keys only, if you're not using third party API keys, like for Auth, you don't need to do this.** Click on the 'settings' tab in the dashboard. Click on the 'Reveal Config Vars' button. Add a new config var, for the key enter the names of your API keys and for the value enter the actual keys. Remember when we added this to the `app-env` file? We can't push the `app-env` file since we .gitignored it. This is how we add the same config variable without using the app-env file.

10. After making these changes ^ , you'll have to `git add`, `git commit`(you know the drill), ** `git push heroku master`**. 
> IF YOU GET AN ERROR!!!!!! 
> Something along the lines of ... "could not find remote heroku", you need to add it! 
> in your terminal, you need to run `heroku info`
> See 'Git URL'? Copy the URL
> Run `git remote add heroku PASTE_URL_THAT_YOU_JUST_COPIED_HERE`
> To check if it worked, type `git remote -v` -> if any of the lines include `heroku` word, you are good to go!
> Now you are ready to `git add`, `git commit`, `git push heroku master` !!!

11. Configuring your DB:

(from Mozilla)
"
Database configuration
So far in this tutorial we've used a single database that is hard coded into app.js. Normally we'd like to be able to have a different database for production and development, so next we'll modify the LocalLibrary website to get the database URI from the OS environment (if it has been defined), and otherwise use our development database.

Open app.js and find the line that sets the mongoDB connection variable. It will look something like this:

`var mongoDB = 'mongodb://your_user_id:your_password@ds119748.mlab.com:19748/local_library';`

Replace the line with the following code that uses process.env.MONGODB_URI to get the connection string from an environment variable named MONGODB_URI if has been set (use your own database URL instead of the placeholder below.)

`var mongoDB = process.env.MONGODB_URI || 'mongodb://your_user_id:your_password@ds119748.mlab.com:19748/local_library';`


## Resources:
1. [Heroku's Node docs](https://devcenter.heroku.com/articles/getting-started-with-nodejs#introduction)
2. [Heroku's Mongo docs](https://elements.heroku.com/addons/mongohq)
3. [Mozilla's Deploying Express Apps doc](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/deployment)
