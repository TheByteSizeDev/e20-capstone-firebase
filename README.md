# How To Use This Boilerplate Code

You can use this code to quickly and easily use Firebase v9.0.0

It supports these product:

- Firebase Authentication with Email/Password + Google Auth
- Firebase Storage

You can either use this as the base for your application base OR cherry pick the files you need.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## If You Use This As Your Application Base

### Step 1: Clone This Template

* Click the "use this template" button in the upper right hand corner of this repo and select "create a new repository". (note: the repo pictured is a different repo but it works the same). 

![Screen Shot 2022-11-14 at 7 55 27 AM](https://user-images.githubusercontent.com/43580474/201677821-fca0834d-2cf9-4465-9488-d6ab755f0ffa.png)

* Select yourself from the "Owner" drop down list and name your repo after your app. Important! Make sure it's set to public"

![Screen Shot 2022-11-14 at 7 57 16 AM](https://user-images.githubusercontent.com/43580474/201678218-8b8b85a8-4e09-4b89-bff0-c01c0aa604d9.png)

* Now you should have a copy of this as a github repo in your github! All you have to do is copy the ssh from the green "<> CODE" button in the upper right hand corner and clone it locally.

### Step 2: Change things to your app's name

* In your `package.json` file change the "name" property on line 2 to your app's name
* Rename the `CapstoneTemplate.js` file to your app's name. Do the same with the name of the component

### Step 3: Run `npm i`

* Run `nmp i` in your app's root directory

## Step 4: Create a Firebase Account & Initialize Products

* Go to https://firebase.google.com/ and creat an account. It's free!
* Add a new project for your app IMPORTANT! DISABLE google analytics (it will ask you when it asks for your app name)
* It will ask you to enable Firebase. 

![Screen Shot 2022-11-14 at 8 19 28 AM](https://user-images.githubusercontent.com/43580474/201683328-4479c1ed-5864-4060-8bbb-857bc273fcf2.png)

* Make sure you pick the "web" button. Give your app a nickname and click next. In step 2 make sure it copy the firebase Config object it shows you. Copy it into your `fakeApiKeys.js` file.
* Rename `fakeApiKeys.js` to `apikeys.js`
* Next it will ask you to "Choose Products You Want To Add To You App". IF USING AUTHENTICATION Choose Authentication click the "get started" button and enable email/password.
* After that is done click the "enable a new provider" and choose google.
* IF USING PHOTO STORAGE: Go into the side menu under "build" and choose storage.

![Screen Shot 2022-11-14 at 8 27 00 AM](https://user-images.githubusercontent.com/43580474/201684975-f62755a7-371a-4b48-a591-e4c1356bbce0.png)

* click the "Get Started" button
* When prompted make sure you select to use Production Mode.
* Click next when it asks you which region you want (stick with the default).
* Go into the "Rules" tab and change them to match what is below. Click the "publish" button.

![Screen Shot 2022-11-14 at 8 29 39 AM](https://user-images.githubusercontent.com/43580474/201685827-48a6b36b-a11a-4c7e-babd-9e4b5d1ac3fd.png)

**YOU ARE ALL SET!**

## If You Cherry Pick (Not Advised)

This is assuming that you only want to use the methods and you are building your own structure to use them. Slightly harder and more advanced so not totally advised.

### Using It For Google Authentication

If using only google auth keep the `googleAuth.js` file

Initialize Firebase Authentication in your firebase account. Enable google as a sign-in method.

-- Methods --

`googleAuth.signInRegister()`

- params: 
  -  Navigate --> A way to pass in `userNavigate` function and route to a new view
- note: opens google sign in popup

`googleAuth.signOut()`

- params: 
  -  Navigate --> A way to pass in `userNavigate` function and route to a new view
- note: could be used for either signout methods

## Using It For Email/Password

If using only email/password auth keep the `emailAuth.js` file

Initialize Firebase Authentication in your firebase account. Enable email/password as a sign-in method.

-- Methods --

`emailAuth.register()`

- params:
  - userObj --> {fullName: , password: , email: }
  - Navigate --> A way to pass in `userNavigate` function and route to a new view

`emailAuth.signIn()`

- params:
  - userObj --> full object{email: , password: }
  - Navigate --> A way to pass in `userNavigate` function and route to a new view

`emailAuth.signOut()`

- params:
  -  Navigate --> A way to pass in `userNavigate` function and route to a new view


## Using It For Email/Password AND Google Sign In

If using email/password and google auth keep everything in the `helpers/` folder except `photoStorage.js`.

Initialize Firebase Authentication in your firebase account. Enable email/password as a sign-in method as well as Google.

-- Methods --

The only new file you would use is `logout.js`. That handles logging out for both google and email.

`logout.lougout()`

- params:
  -  Navigate --> A way to pass in `userNavigate` function and route to a new view
-  Note: Looks at which type of login the user used and then picks the appropriate sign out.

### Using It For File Storage

If using only file storage keep the `photoStorage.js` file

Initialize Firebase Storage in your firebase account.

-- Methods --

`photoStorage.upload()`

- params:
  - bucket ---> name of folder in your firebase storage where your photo is going. Default is "images".
  - file ---> file object to be uploaded
- note: Make sure that you are saving the return URL to an object in your database (ex: a user if its a user profile)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
