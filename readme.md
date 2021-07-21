**Be active , stay healthy**

**Description**

<<<<<<< HEAD
## Description

Stay Healthy is a web providing activities to help you stay healthy both mentally and phsically.

## User Stories
=======
Stay Healthy is a web providing activities to help you stay healthy both mentally and phsically.

**User Stories**
>>>>>>> 3bf8a3547417fb026d72314a4b2695a2f9623fb3

404: As an anon/user I can see a 404 page if I try to reach a page that does not exist so that I know it's my fault  
Signup: As an anon I can sign up in the platform so that I can start joining activities  
Login: As a user I can login to the platform so that I can see my the activities I will join  
Logout: As a user I can logout from the platform so no one else can use it  
Add activities As a user I can add an activity so that I can share it with the community  
List activities As a user I want to see the activities so that I can choose one to join  
<<<<<<< HEAD
Comment actvites as a user i can comment any activites

## Backlog

User community  
see other users profile chat with them

## Client

Routes
=======
Comment actvites as a user i can comment any activites  

**Backlog**

User community  
see other users profile chat with them  

**Client**
**Routes**

>>>>>>> 3bf8a3547417fb026d72314a4b2695a2f9623fb3
/ - Homepage  
/auth/signup - Signup form  
/auth/login - Login form  
/activities - activities list  
/activites/create - create a activity  
/activities/:id - activie detail  
<<<<<<< HEAD
/profile/me - my details and activities I will join

## Pages
=======
/profile/me - my details and activities I will join  


**Pages**
>>>>>>> 3bf8a3547417fb026d72314a4b2695a2f9623fb3

Home Page (public)  
Sign in Page (anon only)  
Log in Page (anon only)  
Activities List Page (public )  
Activities Create (user only)  
Activities Detail Page (public only)  
My Profile Page (user only)  
<<<<<<< HEAD
404 Page (public)

## Components

Nav bar  
Activities component  
Search component

## Services
=======
404 Page (public)  

**Components**

Nav bar  
Activities component  
Search component  

**Services**
>>>>>>> 3bf8a3547417fb026d72314a4b2695a2f9623fb3

Auth Services  
auth.login(user)  
auth.signup(user)  
auth.logout()  
auth.profile()  
<<<<<<< HEAD
auth.getUser() // synchronous

=======
auth.getUser() // synchronous   
 
>>>>>>> 3bf8a3547417fb026d72314a4b2695a2f9623fb3
Activities Services  
activities.list()  
activities.create(data)  
activities.detail(id)  
activities.join  
<<<<<<< HEAD
activities.comment()

## Server

## Models

User Model

username - String // required & unique  
password - String // required  
img: string
=======
activities.comment()  

**Server**

**Models**

User model

username - String // required & unique  
password - String // required  
img: string  
>>>>>>> 3bf8a3547417fb026d72314a4b2695a2f9623fb3

Activites Model

user ID  
name - String // required  
date - String  
time - String  
Description-String  
joined - Schema.Types.ObjectId, ref: "User",  
<<<<<<< HEAD
comment -Schema.Types.ObjectId, ref: "comment",

Comment Model
UserID - Schema.Types.ObjectId, ref: "User",  
ActivitiesID- Schema.Types.ObjectId, ref: "Activites",  
Comment-string
=======
comment -Schema.Types.ObjectId, ref: "comment",  

Comment Model 
UserID - Schema.Types.ObjectId, ref: "User",  
ActivitiesID- Schema.Types.ObjectId, ref: "Activites",  
Comment-string  
>>>>>>> 3bf8a3547417fb026d72314a4b2695a2f9623fb3
