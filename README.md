# Table of contents 

1. [Introduction](#this-is-your-github-exercise)
2. Tasks
    1. [Task 1](#task-1---to-make-a-change-in-code)
    2. [Task 2](#task-2---to-review-and-approve-a-pr)
    3. [Task 3](#task-3---clean-up)
    4. Help notes
        1. [Github](#reminder-what-github-gives-you-when-new-repo-is-created)
        2. [Video timeline](#timeline-in-the-video)
3. [Adding styles](#adding-styles)
4. [Walking Skeleton](#-------------walking-skeleton--readme-part--------------)

# THIS IS YOUR GITHUB exercise

multideveloper env so that we create working branches, merge pull requests 


Github multi-developer exercises

Watch the youtube video
https://www.youtube.com/watch?v=DVRQoVRzMIY

The code for the exercise use
https://github.com/petteri-te/github-exercise

You need to be added as a collaborator so that you can review and approve pull requests. Contact the teacher if not done yet.

NOTE: the video uses master branch name, but github gives example commands  that use main when a new repo is created. main is used in github-exercise. You can see it when you log in to github


## TASK 1 - TO MAKE A CHANGE IN CODE

Set up your local directory to connect to (this chapter 13-4 exercise code) https://github.com/petteri-te/github-exercise
Pull the code to your laptop
git pull origin main (if you set up the remote name as origin, and the master branch from there)
Create a new branch in your local git
Make a code change in your new branch and commit it to you local git
Do something that does not break the app. Run the app on your local laptop to make sure your change was successful. That is, test it. You can do something as simple as console.log or change some text in the view template that is easily visible in the browser, like add your name somewhere. Easy to verify and test
Push you change up to github common repo (when you know it works)
Check that a PR (pull request) is created in github repo
Assign some fellow student (collaborator) to review it
Wait for that someone to approve your change and then merge it. You should not be able to merge before PR is approved (check set in github)

You can do multiple changes to practice. Create a new local branch for your change and then push it to repo. 

>It is technically possible to just push directly to main branch. !!! So that is violating good sw dev practises.
1. You need to create first a branch in your local git.
2. Always make sure you pull the latest main branch from the github repo so you have the latest code
3. Continuously keep pulling so there are less surprises (conflicts) when it is time for you to push your changes up to github remote repo.
4. Make the changes in your local git branchPush your local branch to remote github repo (main / origin)
5. Create a pull request in github and assign reviewers
6. Make changes fi reviewers request
7. When all needed reviews and approvals are done MERGE the PR (your code) into github main branch
8. Clean the PR branch if needed


## TASK 2 - TO REVIEW AND APPROVE A PR

Someone will assign you to review their change. You will get an email notification about this. You can also monitor the github repo to see what is going on
Go to the PR (pull request), open the source code and review the change
Make sure that the change is something that does not break the application, the code looks nicely written, understandable etc. We should be able to trust that the person who has created the PR has first tested it and has verified that the functionality does not break the app. Your job is to make sure the implementation is pretty, nice, good architecture, good coding, good solution etc. You can comment, ask for changes or approve. When you approve. Then the PR creator can and will merge the code


## TASK 3 - CLEAN UP

Some time/days later after you have done one or multiple changes to code, go and clean up at least one of your PR branches from the repo. So delete/remove it. 






### REMINDER WHAT GITHUB GIVES YOU WHEN NEW REPO IS CREATED

echo "# github-exercise" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/petteri-te/github-exercise.git
git push -u origin main
NOW YOU already have the code in the remote repo so get it from there. You do not need to commit anything in the beginning. Just pull to your empty local git directory.
Then you can start making a change to the existing code.

You need to 
git init
git remote ….
git pull


### TIMELINE IN THE VIDEO

1 - At 18min start setting up folder and git repo on your local machine
2- learn how to create local branches, move between them, merge them
3- at 24min20s add branches to your local git
-git checkout -b new-branch
4- at 28min40s start setting up remote repo
5 - at 33min making sure you have configured your github with name and email for remote repo connection
(and you might need to authenticate yourself - login in to github)
git config –global user.name your-name
git config –global user.email your-email    you used in github account
6 - at 38min how to resolve merge conflict between remote repo and your local 
-manually resolve in the code file
-git add .
-git commit -m “merge change”
-git push
7 - at xx   now push your new local working branch to remote repo and create a new branch there
git push -u origin new
and now resolve the pull request (PR) in github 

## Adding styles

To edit the styles, navigate to
`app/assets/scss`, and make sure to run the bash script located under
`/app` to compile the scss files and output them as a single file
under `app/assets/css`.

You may need to install `Sass` on your machine, please visit the official [sass website](https://sass-lang.com/install/)

```shell
bash compile_sass.sh
```


# ------------ Walking skeleton  README part  ------------

This is a walking skeleton -- a starting point for working on the course
assignments -- for the free online Web Software Development course available at
[https://fitech101.aalto.fi/web-software-development/](https://fitech101.aalto.fi/web-software-development/).

## Contents

The walking skeleton has a simple Deno application that starts on port `7777`.
The application responds to queries with the message `Hello world!` and logging
the contents of the database table `names` to the console.

Launching the walking skeleton starts the Deno application, a PostgreSQL server,
and a database migration process (Flyway).

## Starting and shutting down

The walking skeleton is used with Docker Compose.

- To start the walking skeleton, open up the terminal in the folder that
  contains the `docker-compose.yml` file and type `docker-compose up`.
- To stop the walking skeleton, press `ctrl+C` (or similar) in the same terminal
  where you wrote the command `docker-compose up`. Another option is to open up
  a new terminal and navigate to the folder that contains the
  `docker-compose.yml` file, and then write `docker-compose stop`.

## Watching for changes

The walking skeleton by default watches for changes in the Deno code and
restarts the application whenever needed. There is a
[bug](https://github.com/denoland/deno/issues/6966), however, that leads to this
functionality not working in Windows Subsystem for Linux. When working with WSL,
stop and start the container between changes.

## Database

When the walking skeleton is up and running, you can access the PostgreSQL
database from the terminal using the following command:

```
docker exec -it database-server psql -U username database
```

This opens up `psql` console, where you can write SQL commands.

## Database migrations

When the walking skeleton is started, Flyway is used to run the SQL commands in
the database migration files that reside in the `flyway/sql`-folder. If a
database exists, Flyway checks that the schema corresponds to the contents of
the database migration files.

If you need new database tables or need to alter the schema, the correct
approach is to create a new migration file and start the walking skeleton.
Another approach is to modify the existing migration file -- if you do this, the
migrations fail, however.

If you end up altering the migration files (or the schema in the database), you
can clean up the database (remove the existing database tables) by stopping the
containers and the related volumes -- with the database data -- with the command
`docker-compose down`. When you launch the walking skeleton again after this,
the database is newly created based on the migration files.

## Deno cache

When we launch a Deno application, Deno loads any dependencies that the
application uses. These dependencies are then stored to the local file system
for future use. The walking skeleton uses the `app-cache`-folder for storing the
dependencies. If you need to clear the cache, empty the contents of the folder.

## The project.env file

Database and Deno cache configurations are entered in the `project.env` file,
which Docker uses when starting the walking skeleton. If you deploy the
application, you naturally do not wish to use the file in this repository.
Instead, create a new one that is -- as an example -- only available on the
server where the application is deployed. Another option is to use secrets --
we'll discuss these briefly in the course, where this walking skeleton is used.

## VSCode configurations

The walking skeleton also comes with a few default VSCode settings. These
settings can be found in the `settings.json` file in the `.vscode` folder. By
default, we assume that you have the VSCode Deno plugin.

## E2E Tests with playwright

The walking skeleton comes also with simple
[Playwright](https://playwright.dev/) configuration that provides an easy
approach for building end-to-end tests. Check out the folder `tests` within
`e2e-playwright` to get started.

To run E2E tests, launch the project using the following command:

```
docker-compose run --entrypoint=npx e2e-playwright playwright test && docker-compose rm -sf
```

Note! Once finished, this will also remove any changes to the database of your
local project.

What the e2e tests effectively do is that they start up a browser within the
docker container and examine the application programmatically based on the
tests.

(This isn't yet discussed in the materials, but will be sooner or later!)
# github-exercise

test