# OmniConnx

OmniConnx is a community-oriented website for aspiring and current medical students to connect with knowledgable and experienced doctors to create network a network of individuals centered around the medical field.

## Table of Contents
* [General](#general)
* [Features](#features)
* [Posts](#posts)
* [Skills](#skills)
* [Pages](#pages)
* [Routes](#routes)

## General
OmniConnx is a newly built startup oriented around bridging the gap of knowledge between curious medical students and experienced doctors. It set out to solve one of the biggest problems seen firsthand by medical students, that it is "difficult to find everything in one place, including doctors, jobs, and other people" 


## **Features**

- ### **User profiles**

  - Name
  - Username
  - Posts made
  - Skills list
  - Personal info for profile

- ### **Posts**
- 
  - Authored by users
  - Created and posted
  - Users can respond
  - Editable

- ### **Skills**
  - Skills represented by hashtag (#anatomy, #optometry, #dermatology, etc)
  - Each individual skill will have its own page
  - Skills can be linked in posts and on user profiles

## **Pages**

- Landing page
- Log in
- User profile
- Posts
- Skills page

## **Routes**

- "/user/signup"
    - Allows an individual to sign up for OmniConnx
- "/user/signin"
    - Allows an authorized user to sign in after registration of account
- "/post/create" route
    - Allows an authorized user to sign in.
- "/post" route
    - Lists an authorized users post history
- "/post/delete/:id"
    - Allows an authorized user to delete posts they've previously made
- "/skill"
    - Allows an authorized user to get all skills

## How to run app

In root folder:  
`npm run dev`  
Both backend Node server and React Front-End app will run concurrently. We pretty much always use this, in both production and dev environments.   

## How to run just the Node backend server

In terminal:   
`npm run server`  

## How to run just the React Front-End

In terminal:  
`cd client`  
`npm start` or `yarn start`
