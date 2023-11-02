<h1 align="center">Welcome to Noteracy 👋</h1>
<p align="center">
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000"/>
  <a href = "http://hits.dwyl.com/jamal474/NoteracyApp"><img alt="Version" src="https://hits.dwyl.com/jamal474/NoteracyApp.svg?style=flat"/></a>
  <a href = "https://cyclic.sh"><img src = "https://img.shields.io/static/v1?label=cyclic.sh&message=Success&labelColor=5c5c5c&color=008000&logoColor=white"/></a>
</p>

### Description:

Noteracy is your all-in-one solution for seamless note-taking and organization. With Noteracy, we can:

- **Create Notes :** Capture your thoughts, ideas, and to-dos with ease.
- **Update & Edit :** Keep your notes up-to-date as your projects and tasks evolve.
- **Delete Notes :** Remove what's no longer relevant or needed.
 - **Search Functionality :** Effortlessly find the notes you need with powerful search capabilities.

**Google Account Integration :** Sign in using your Google account for a smooth and secure experience.


---
## Technologies Used:

![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)

- **Authentication** using : **Passport.js**
## Hosting:

The website is hosted on **cyclic.sh**

---

## Design:

## Database:

**2 Models :**
- User: Stores everything about the user including displayName, firstName, lastName, profileImage, and createdAt.
- Notes: Stores a single note instance for a user and includes details like user, title, body, and createdAt.


## Server-Side :
**Rest API :** 
- Express server with 3 routes:
  - **auth :** Authentication route that checks if user already has an account in the platform. If not, it inserts a new user, using passportJS's passport-google-oauth20 strategy.
  - **dashboard :** Handles all the requests after login for notes view etc.
  - **user :** to confirm authentication status of user anytime.

## Client-Side :
Front-end was made using **React.js** with **react-router** for routing and **react-helmet** for custom head. 

---
## Install 
```sh
npm install
```


## Usage

### Build the React frontend
```sh
cd client | npm run build
```

### Create a .env file
```sh
MONGODB_URI = ''
GOOGLE_CLIENT_ID = ''
GOOGLE_CLIENT_SECRET = ''
GOOGLE_CALLBACK_URL = 'http://localhost:5000/google/callback'
```
Fill in these details from your MongoDB Atlas connection and Google OAuth credentials.

Set `http://localhost:5000/google/callback` in redirect URI in google credential.
### Run the server
```sh
npm run dev
```
The application will now be accessible from   `http://localhost:5000`

### Production 
```sh
npm run start
```

## Show your support

Give a ⭐️ if this project helped you!

***