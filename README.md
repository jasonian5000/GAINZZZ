# Edit
## This is a fork of the original project described. After working on converting it to a different tech stack, I determined it would be cleaner to start the project over as a new project.

Welcome to [GAINZZ](https://gainzzz-le8liei9e-1shoukr.vercel.app/)


[Demo](https://www.youtube.com/watch?v=jgOdi9Fryrs) | [Article](https://medium.com/@rahminshoukoohi/gym-bro-ed48a4258024)

# Table of Contents
1. [About the Project](#about-the-project)
    - [TechStack](#techstack)
    - [Features](#features)
    - [Colors Used](#colors-used)
    - [Env Variables](#environmental-variables)
2. [Getting Started](#getting-started)
    - [Run GAINZZZ locally](#how-to-run-gainzzz-locally)
3. [Usage](#usage)
4. [Roadmap](#roadmap)
5. [Contributions](#contributions)


# About the Project

## TechStack
Tech Stack used to create GAINZZZ
### Client Side
 - React.js
 - React-Redux.js
 - axios
 - dotenv
 - framer-motion
 - react-horizontal-scrolling-menu
 - redux-logger
 - styled-components
 - @emotion/react
 - @emotion/styled
 - @mui/icons-material
 - @mui/material

## Server Side
 - @supabase/supabase-js
 - body-parser
 - cors
 - express
 - node-fetch
 - nodemon


# Features of Application
 - Account creation/updating
 - Workout creation 
 - Weight Tracker
 - BMI Calculator
 - Favorite workout creator
 - instant workout creator
 - workout tracker
 - timer
 - database search for individual workouts
 - personal trainers selection




## Colors Used

- #FF1414
- #C3C9CC
- #D32F2C





## Environmental Variables

### Within the Client Side
```REACT_APP_SUPABASE_KEY```
```REACT_APP_SUPABASE_URL```

### Within the Server SIde
```SUPABASE_SECRET_KEY```
```SUPABASE_KEY```



# Getting Started
## How To run GAINZZZ locally
#### You can clone the project using the following link

```https://github.com/1ShoukR/GAINZZZ```

#### Direct yourself into the Client Folder and type npm i

```cd client```
<br>
```npm i```

#### Direct yourself into the Server folder and type npm i, nodemon index.js

```cd server```
<br>
```npm i```
<br>
```nodemon index.js```

#### Direct yourself into the Client folder type npm i, npm start

```cd client```
<br>
```npm i```
<br>
```npm start```

## Usage

The purpose of GAINZZZ is to be the catalyst that any beginner needs to kickstart their fitness journey, as well as providing a path for more elite trainers to take use of the 2,800 different workouts in our database, which can then be added to their daily workout routine. 



Users can
- Create an account and be authenticated within out database

[Login Page Screenshot](/client/src/assets/loginPageScreenshot.PNG)
- Search for and add workouts to their workout plan

[Workout Page Screenshot](/client/src/assets/workoutPage2.png)
- Account page where user can track their personal records

[Account Page Screenshot](/client//src/assets/account.PNG)
- Live-updating weight tracker for user to keep track of weight

[Weight Tracker Screenshot](/client/src/assets/weightTracker.PNG)
- Workout page for users to search for a curated workout 
- search through their favorite workouts 
- start a timer
- view a gif of the workout
- shuffle between workouts
- remove workouts

## Database

- PostgreSQL database
- utilized Supabase, a pre-hosted PostgreSQL data center
[Database Schema](./client/src/assets/databaseSchema.PNG)


## Roadmap

- Add a meal prep subscription service for the user to order meals prepped already for them
- implement supplement shop
- implement a groceries list for the user to be able to search for ingredients 


## Contributions

This project could not have been made without the team. They have been amazing, and an incredible help to this project. With countless hours spent over days and days, this project was created by: 

- Project Manager/Dev: Rahmin Shoukoohi [LinkedIn](https://www.linkedin.com/in/rahmin-shoukoohi-155855235/)
- Dev: Jason Blunck [LinkedIn](https://www.linkedin.com/in/jasonblunck/) [dev.to](https://dev.to/jasonian5000/the-capstone-the-final-project-3ff7)
- Dev: Ethan Gula [LinkedIn](https://www.linkedin.com/in/ethan-gula-222718177/)

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/sl7mgc8e528r63pm5tt7.jpg)

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/lea5ik9yo6lv7bdcrzhj.jpg)


![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/9p0eyzwvv776lyky9vfu.jpg)


![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/sf3n8euo8prgf2hl0bib.jpg)


![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/thfuor4v2qth0r5vfzdi.jpg)
