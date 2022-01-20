# Getting Started with Create React App

Test commit This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more
information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will
remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right
into your project so you have full control over them. All of the commands except `eject` will still work, but they will
point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you
shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't
customize it when you are ready for it.

# How to run Backend Golang Service.

## Prerequisite

### Install MySQL server

Either this
https://www.liquidweb.com/kb/install-mysql-windows/
https://dev.mysql.com/downloads/installer/

Or use one that comes with Xamp/Wamp

### Install Go1.17

Download Latest Version of go1.17.6 from [https://go.dev/dl/](https://go.dev/dl/)

For example for Windows [https://go.dev/dl/go1.17.6.windows-amd64.msi](https://go.dev/dl/go1.17.6.windows-amd64.msi)

## Initialize DB

- Add your db schema to file

### `backend/initdb/main/initialize.sql`

- cd into backend/initdb/main

### `cd backend/initdb/main/`

- run OR set dropDatabaseFirst=true first if required

### `go run initialize.go`

## Running server

Now cd into directory backend

### `cd backend`

Resolve dependencies

### `go mod tidy`

run main.go file.

### `go run main/main.go`

This project is bootstraped from this tutorial
[https://gin-gonic.com/docs/quickstart/](https://gin-gonic.com/docs/quickstart/)

