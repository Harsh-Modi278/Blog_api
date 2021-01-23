# Odin-Project-REST-api-Excercise

REST API pratice excercise from [the Odin Project](https://www.theodinproject.com/courses/nodejs/lessons/blog-api)

# Structure of the project

Frontend: client

Backend: Blog_api

# Backend Description

- A REST API for a blog website backend.
- User can see posts and comments.
- To post comments users have to login and users can't post blogs.
- Only admins can post blogs and comments. An admin can delete blogs as well as comments by other users. An admin can publish/unpublish a blog.
- An unpublished blog is saved in database but not visible to the users whereas a deleted blog is deleted from database.
- Admin access: Login -> Admin Login
- Admins can see published as well as unpublished blogs whereas users can only see published blogs.
- A blog when first submitted is unpublished. To publish that blog use edit blog option(HTTP PUT method).

# API routes

| HTTP Method | Path                            | Remarks                                           | Login required? |
| ----------- | ------------------------------- | ------------------------------------------------- | --------------- |
| GET         | /                               | Base page of website-show published blogs         | No              |
| POST        | /register                       | Submission of sign-up form                        | No              |
| POST        | /logout                         | Logout                                            | Yes             |
| POST        | /login                          | Submission of login form                          | No              |
| GET         | /posts                          | Redirect to base page                             | No              |
| GET         | /posts/:postId                  | See blog with postId and comments by users on it  | No              |
| POST        | /posts/:postId/comments         | Post comment on the blog with postId              | Yes             |
| GET         | /posts                          | Show published as well as unpublished blogs       | Yes             |
| POST        | /admin/login                    | Submission of admin login form                    | Yes             |
| POST        | /admin/posts                    | Submission of blog-form                           | Yes             |
| PUT         | /admin/posts/:postId            | Edit blog with postId                             | Yes             |
| DELETE      | /admin/posts/:postId            | Delete blog with postId                           | Yes             |
| PUT         | /admin/posts/:postId/:commentId | Delete comment with commentId on blog with postId | Yes             |

# Developement
* You need to install Node to start the developement environment. Download Node here: [Node](https://nodejs.org/en/)
* You need to setup a .env file in the root of the repository. The template for the same is as following:
```
ACCESS_TOKEN_SECRET = # your secret key for token
DBURI = # mongoDB atlas link of your database
ADMIN_KEY = # password for admin access
```

* Run
```
npm i
npm run dev
```

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
