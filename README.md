# Jobs5

A very light webapp for jobs3 and jira

## Differences between jobs5 and jobs4

Note, this is not considered stable and only used for prototyping/proof of concept. Please use jobs4 for production

## Technologies

This webapp runs off an express (http://expressjs.com/) (a node.js) server. It uses mustache.js (http://mustache.github.io/ as a template engine

This webapp doesn't communicate with the iSeries directly, instead it requires a rest server to do the heavy lifting

## How to run

First, ensure you have node.js up and running on your machine. Then go to jobs5/app and run 'npm install'

Run node server.js and the app should now be running on [localhost:3000](http://localhost:3000/).

The port can be changed in app/config.js
