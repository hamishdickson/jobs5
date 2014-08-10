# Jobs5

A very light webapp for jobs3 and jira.

Note: this is being rewritten at the moment. Development is in angularjs, Master is all done in the DOM with jQuery and jQuery-ui

## Differences between jobs5 and jobs4

This is a simple webapp, not designed to do everything that jobs4 does. Mark has put a lot of work into jobs4 and it is a much more complete application.

## Loging in

Authentication for this app is pretty much done on trust, all that is checked is that the username provided on login is valid.

IF it becomes a requirement to connect to the LDAP and confirm passwords, then let me know, I have prototyped this with passport (a node module)

## Technologies

The back end uses a java rest server to get the jobs data from the iSeries (see hamishdickson/Jobs3RestServer). A node.js app runs this webapp (with express.js)

The front end only uses javascript, mustache.js (as a template engine) and jQuery - this is by design, I wanted to see how far we could go with just javascript

## How to run

First, ensure you have node.js up and running on your machine. Then go to jobs5/app and run 'npm install'

Run node server.js and the app should now be running on [localhost:3000](http://localhost:3000/).

If you are keep on making changes (and perhaps submitting a pull request) I would suggest you install nodemon

The port can be changed in app/config.js

## TODO

There is still quite a lot left to do, but here is everything I can think of before this is production ready (in no specific order)

0. Add in unit tests. That's what's made this so hard - there are no unit tests for jobs3
1. ~~use gulp to compress everything~~
2. ~~add cookies to remember who you are~~
3. add jira support
4. ~~a huge refactoring exercise is needed~~
5. ~~replace style.css with style.scss~~
6. add something that will check to see if there is a new version available in github, and if there is pull it and restart the node sever (or just use nodemon)
7. ~~add in functionality to change data (ie convert jobs5 from a viewer to a full blown app)~~
8. ~~add in login page~~