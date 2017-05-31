# rad.io [![Build Status](https://travis-ci.org/arnoschutijzer/rad.io.svg?branch=master)](https://travis-ci.org/arnoschutijzer/rad.io)
>websockets + react

## setup
A React webapp using websockets, jsx, ES6 and Redux communicating with a Node webserver using mongodb.

## pre-requisites
- yarn (`npm install -g yarn`)

## deploy
- Follow the steps in `backend/readme.md` and `frontend/readme.md` to get the app running locally first
- Create a mongodb server somewhere (MongoDB Atlas, mLabs, ...)
- Grab the mongodb url and set it as the `database` property `backend/src/config/settings.js`
- Run `now` inside `backend` or deploy backend to wherever
- Grab the public URL of the backend and set the `BASE` variable to this value in `frontend/src/config/config.js`
- Build the frontend and deploy the built project somewhere