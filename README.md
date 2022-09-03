
## Key Notes for Alex:

# Connect to git
To build out this repo in your VSC here are the steps to get you started;

Download the VSCode extenstion > [Documents To Follow](https://code.visualstudio.com/docs/editor/github)

-- Set up profile
    `git config --global user.email "you@example.com"`\
    `git config --global user.name "Your Name"`\

-- Copy the repo to your computer
        Navigate to where to want to save this file (I normally just have a file on my desktop named dev for this kinda stuff)
        If you need to make a folder on desktop and wanna be fancy about it:
            `cd Desktop/`\
            `mkdir dev`\

`cd Desktop/dev`\
`git clone https://github.com/ConanCodes/symmetrical-guacamole.git`\
`cd symmetrical-guacamole`\
`npm install`\
(if you want to run the app in the broswer to see your changes live)\
`npm start`\



# Packages (Install any more if you wanna mess around with them!)
Packages I installed which are good to know and get accustomed to using:

React App > `npx create-react-app ./ --template typescript`\
    `npx` -  React uses this to install itself, you will probably never use it again, its the same thing as `npm` more or less.\
    `./` - tells `create-react-app` to install itself in the current folder and not make a new folder. If you want to have it make a folder with a custom name you just swap them.  `npx create-react-app thisIsTheAppsName --template typescript`\
    `--template typescript` - creates the app using typescript as its base formate. Dont worry typescript is the more or less the exact same is JS, just add additional funcationality we will teach you later on, right now dont worry about it\

These packages will help make websites work and look smoother. Front end web development is just frankensteining packages together to make what you want.

MUI Core > [MUI Core Documents](https://mui.com/material-ui/getting-started/overview/) - `npm install @mui/material @emotion/react @emotion/styled`
    Makes desgining the site easier]\

react-router-dom > [Documents](https://github.com/remix-run/react-router/blob/main/docs/getting-started/tutorial.md - `npm install react-router-dom`
    helps with routing since react is a single page app\

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
