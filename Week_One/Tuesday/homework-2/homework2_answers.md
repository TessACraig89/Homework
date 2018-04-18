#### Answer the following questions</summary>

### Part One

1. What command do you use to setup a git repository inside of your folder? `git init`<br>
1. What command do you use to ask git to start tracking a file? `git add <file>`<br>
1. What command do you use to ask git to move your file from the staging area to the repository? `git commit -m 'adding file to staging area'`<br>

#### Run git commit with following comment
`"Commit 1 - The 1st set of GIT homework answers are complete"`

1. What command do you use to pull any changes from the master repository into your local repository? `git pull`<br>
1. What command do you use to unstage a file? `git reset`<br>
1. What command do you use to change your files back to how they were after a commit? `git checkout --`<br>
1. Why is it important to use `--` when changing files back to a previous state?<br>
1. Why might you want to reset your files back to a previous commit?<br>
- Perhaps you might need to undo a version that doesn't function well.

#### Run git commit with the following comment
`"Commit 2 - The 2nd set of GIT homework answers are complete"`

1. What command do you use to create a branch? `git checkout -b <name of new branch>`<br>
1. What command do you use to use a different branch? `git checkout <branch name>`<br>
1. Why would you want to use a branch other than the default `master`? - You can use other branches to build in different features<br>

#### Run git commit with the following comment
`"Commit 3 - The 3rd set of GIT homework answers are complete"`

1. Give an example for when you would use `git merge` and give an example for when it would be better to submit a pull request to have your branch merged<br>
- You would use `git merge` to merge changes from one branch to another.
- Submitting a pull request from a forked version allows a different developer to look at your code before merging it.
1. What command do you use to send all of the work that you've done locally to your remote repository?<br>
- `git push`

#### Run git commit with the following comment
`"Commit 4 - The 4th set of GIT homework answers are complete"`

#### Students will commence with watching the referenced YouTube video
Watch [this video on HTML](https://www.youtube.com/watch?v=DxhXFpsN5I4&index=1&list=PLdnONIhPScST0Vy4LrIZiYKpFNoxgyH7J).

1. Inside the Week_One homework folder, students will create a `resume_page`.
1. Change directories to `resume_page`. Create two files: `index.html` and `style.css`.<br>
1. Using Atom, open your files and add the HTML boilerplate code.<br>
1. Create a heading level-one tag with your name.<br>
1. Open the `index.html` in your browser to confirm that everything is set up properly.
Reminder: To open your file with your browser, from the command line, type `open index.html`

#### Run git commit with the following comment
`"Commit 5 - index.html file is setup"`

#### Add some content to your site

1. Insert a professional image of yourself or someone else ('img' tag); it should be placed right after your 'h1' tags<br>
1. Insert an unordered list of your last three positions ('ul' tag)<br>
1. Create links to your (or someone's) LinkedIn and Facebook/Twitter pages ('a' tag)<br>1. Use level-three heading tags to create headings before your positions and before your links<br>

#### Run git commit with the following comment
`"Commit 6 -  Added initial content for resume site"`

#### Add some style to your site

1. Center your "h1" tag<br>
1. Change the font of your "h1" tag<br>
1. Change the color of the font of your "h3" tag text<br>
1. Add some space on the body of your application to make your site look more appealing.<br>

#### Run git commit with the following comment
`"Commit 7 -  Added initial styling for resume site"`

#### Add some navigation to your site

1. Create a nav bar with the links to your LinkedIn, Twitter (whichever links you had created earlier); Remove the links section that you had created earlier in the homework.
1. In the nav bar, also create a link to the 'index.html' page (maybe give it a name of `Home Page` in the bar), and a link to a file called "projects.html" (maybe call this `Projects` in the bar) <br>
1. Create another html file in this folder called 'projects.html'<br>
1. Copy the contents of the nav bar and information from the 'head' tag of your `index.html` file and paste it into your `projects.html` file<br>
1. Inside `projects.html`, create a level-two heading and add the text `Projects`<br>
1. Check to make sure that your links work! When you click on "Projects" in your nav bar, does it open the `projects.html` document?<br>
1. In 'projects.html', add your three most recent projects (or just make some up). To do this simply, you can use an ordered list. If you're up for a little more of a challenge, create three columns: each column should contain the title and a description of your three most recent, successful projects<br>

#### Run git commit with the following comment:
`"Commit 8 -  Added project.html page and content"`

## Part 4 - Loops
#### Stay Fresh! Looping with Javascript

1. In this folder, create a `loops.js` file which you will run execute with node.
1. Inside the loops.js file, create a loop that logs the numbers from 0-99 (ascending)
1. Inside the loops.js file, create a loop that logs the numbers from 99-0 (descending)
1. Inside the loops.js file, create a loop that logs the **EVEN** numbers from 0-98 (ascending)
1. Inside the loops.js file, create a loop that logs the **EVEN** numbers from 98-0 (descending)
1. Inside the loops.js file, create a loop that logs the numbers from 49-72 (ascending)
1. Inside the loops.js file, create a loop that logs the numbers from 81-26 (ascending)
1. Inside the loops.js file, create a loop that logs the numbers from 3-90 **that are multiples of 3** (ascending)

#### Run git commit with the following comment:
`"Commit 9 - Created loops.js file"`

##### At this point, student can perform the work listed in the 'Hungry for more section, but it's not required'
1. One important note if they decide to take this part of the assignment is that will will need to make an additonal commit to github to let us know.

## When You're Done

#### Prep for Morning Review

1. Tomorrow's morning exercise will be a review, so come with questions prepared regarding git/github, terminal or anything else covered so far.

#### Submission

 1. Inside this folder (Week_One), you should now have a file called `answers.md`, a file called `loops.js`, and a folder called `resume_page` which contains `index.html`, `projects.html`, and `style.css`.

 2. You should have been adding and committing along the way, but please type `git status` one last time to make sure that everything is committed. If it's not, please commit.

 3. Follow the instructions for submitting homework, found in [the wiki](https://git.generalassemb.ly/WDIplus-ATX/Wiki-Page/wiki/Homework-Submission-Guide).

 4. Submit your homework sometime between **7 - 10pm CST** tonight so that you can ask questions if you have them. You can continue to work on the homework and push your solutions, but as part of your homework tonight, you should submit the issue during regular hours.
