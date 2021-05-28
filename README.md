# Getting Started with Dynamic Stack Modal - Example

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Demo: [View here](https://codesandbox.io/s/nifty-hopper-m0fzs)

## Available Scripts

Steps to run the application inside local environment:

```shell
npm install
```
```shell
npm start
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.


```shell
npm run build
```

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

## Features

- Modal Component using pure HTML, CSS & JS
- Dynamic Modal Component creation
- Stacked modal in LIFO structure
- Configuralble dimensions for Modals
- Close button inside every modal
- Modal can be opened/closed from any component from the component tree


## Another approach

The another way to implement the same use case to implement via Context APIs instead of Redux. Context APIs can be used as an alternative to a global state managment system. Context basically helps in providing information to the nested components inside the component tree. 
We can create the modal object which was used in the `rootReducer.js` inside the context and thus can be passed to all the components inside the component tree.