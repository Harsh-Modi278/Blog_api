# Odin-Project-REST-api-Excercise
REST API pratice excercise from [the Odin Project](https://www.theodinproject.com/courses/nodejs/lessons/blog-api)

# Structure of the project

Frontend: Pending

Backend: Blog_api

# Description
* A REST API for a blog website backend. 
* User can see posts and comments. 
* To post comments users have to login and users can't post blogs. 
* Only admins can post blogs and comments. An admin can delete blogs as well as comments by other users. An admin can publish/unpublish a blog.
* An unpublished blog is saved in database but not visible to the users whereas a deleted blog is deleted from database.
* Admin access: Login -> Admin Login
* Admins can see published as well as unpublished blogs whereas users can only see published blogs.
* A blog when first submitted is unpublished. To publish that blog use edit blog option(HTTP PUT method).

# API routes

| HTTP Method  | Path | Remarks  |  Login required?
| ------------- | ------------- | ------------- |  -------------
| GET  | /  | Base page of website-show published blogs  |  No  | 
| POST  | /register  | Submission of sign-up form  |  No  |
| POST  | /logout  | Logout  |  Yes  |
| POST  | /login  | Submission of login form  |  No  |
| GET | /posts  | Redirect to base page |  No  |
| GET  | /posts/:postId  | See blog with postId and comments by users on it  |  No  |
| POST  | /posts/:postId/comments | Post comment on the blog with postId  |  Yes  |
| GET  | /posts  | Show published as well as unpublished blogs  |  Yes  |
| POST | /admin/login  | Submission of admin login form  |  Yes  |
| POST  | /admin/posts  | Submission of blog-form  |  Yes  |
| PUT  | /admin/posts/:postId  | Edit blog with postId  |  Yes  |
| DELETE  | /admin/posts/:postId  | Delete blog with postId  |  Yes  |
| PUT  | /admin/posts/:postId/:commentId  | Delete comment with commentId on blog with postId  |  Yes  |

