## Local Spin-up/Development Instructions

1. **Install/Update [Node](https://nodejs.org)**.
2. **Open the project folder in VS Code and open a new terminal window.**
3. **Install Node Packages.** - `npm ci`
4. **Install [React developer tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en) and [Redux Dev Tools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en)** in Chrome.
5. Having issues? See the **Troubleshooting** section below.

### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Troubleshooting

1. Run `npm install` - If you forget to do this, you'll get an error when you try to start the app later.
2. Don't run the project from a symbolic link. It will cause issues with file watches.
3. Delete any .eslintrc in your user directory and disable any ESLint plugin / custom rules within your editor since these will conflict with the ESLint rules defined in the app.
4. On Windows? Open your console as an administrator. This will assure the console has the necessary rights to perform installs.
5. Ensure you do not have NODE_ENV=production in your env variables as it will not install the devDependencies. To check run this on the command line: `set NODE_ENV`. If it comes back as production, you need to clear this env variable.
6. Nothing above work? Delete your node_modules folder and re-run npm install.

### Prettier Setup

The VS Code Prettier extension can be used to auto-format your code on save.

1. Click on the extensions icon on the left side-bar and search for Prettier and click install.
2. Then, in the VS Code main toolbar, click on Code -> Preferences -> Settings
3. Within the settings search for FormatOnSave and make sure the setting is enabled.

### ES7 React/Redux/GraphQL/React-Native snippets extension

A VS Code extension that provides shortcuts for creating React/Redux snippets.

Examples: - type `imp` and push `tab` to add `import moduleName from 'module'` to your code file. - type `rcc` + `tab` to add a React class component snippet.

## How this application was created

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Other [React Starter Projects](https://www.javascriptstuff.com/react-starter-projects/).

1.  Use the Facebook React tool-chain to spin-up a new React app.

    - `npx create-react-app your-app`
    - The above command will setup a React dev environment, install and configure Webpack, Babel, ESLint and Prettier.

2.  Creating an application using the above tool-chain will scaffold a new project like so:

        your-app

    ├── README.md
    ├── node_modules
    ├── package.json
    ├── .gitignore
    ├── public
    │ ├── favicon.ico
    │ ├── index.html
    │ └── manifest.json
    └── src
    ├── App.css
    ├── App.js
    ├── App.test.js
    ├── index.css
    ├── index.js
    ├── logo.svg
    └── serviceWorker.js

3.  To run the app, use the following command in a terminal window

    - `npm start`
    - You should be able to browse to http://localhost:3000

4.  SASS

    - `npm install node-sass --save`
    - Rename the `App.css` file to `App.scss`.
    - Import `App.scss` instead of the `.css` file in the `App.js` file

5.  ESLint

    - ESLint will get installed as part of the “Create-React-App” dependencies.
    - You will need to install the ESLint extension in VS Code.

    Configure ESLint for your project:

    - `npx eslint --init`

    You will be asked several questions for configuring ES Lint, answer them as follows:

    1.  How would you like to use ESLint? `To check syntax, find problems, and enforce code style`
    2.  What type of modules does your project use? `JavaScript modules (import/export)`
    3.  Which framework does your project use? `React`
    4.  Does your project use TypeScript? `No`
    5.  Where does your code run? `Browser`
    6.  How would you like to define a style for your project? `Use a popular style guide`
    7.  Which style guide do you want to follow? `Airbnb: https://github.com/airbnb/javascript`
    8.  What format do you want your config file to be in? `JSON`

    - You will be prompted to install the ESLint config for Airbnb. Type `yes` to install.

    Open the .eslintrc file and set the rules object to:

        "rules": {
          "no-debugger": "off",
          "no-console": "warn",
          "no-unused-vars": "warn",
          "react/prop-types": "warn"
        }

    Next, in .eslintrc, add the settings object that specifies the version of React in use as required
    by eslint-plugin-react as follows:

        "settings": {
          "react": {
        	"version": "detect"
          }
        }

6.  StyleLint

- `npm i -g stylelint-cli`

Use --save-dev to install these as dev dependencies. We don't need them for production builds.

- `npm i --save-dev stylelint`
- `npm i --save-dev stylelint-config-recommended`
- `npm i --save-dev stylelint-config-standard`
- `npm i --save-dev stylelint-config-sass-guidelines`
- `npm i --save-dev stylelint-order`

Create the .stylelintrc.json configuration file in the project root.

{
  "extends": "stylelint-config-standard",
  "plugins": ["stylelint-order"],
  "rules": {
    "at-rule-no-unknown": null,
    "function-name-case": null,
    "color-hex-case": "upper",
    "color-named": "always-where-possible",
    "order/order": ["custom-properties", "declarations"],
    "order/properties-alphabetical-order": [true, { "severity": "warning" }]
  }
}

Create the .stylelintignore file in the root directory:

./*

!src/

src/styles/plugins/**/*.scss
src/styles/plugins/**/*.css
**/*.min.css
obj/

Add the Stylelint extension for VSCode (adds realtime linter error reporting)
Edit the Stylelint extension settings in VS Code and make sure the `Stylelint` setting is enabled.

7. Editor Config

Add a file in the root directory called .editorconfig and add the following settings:

[*]
charset = utf-8
indent_style = space
indent_size = 2
end_of_line = crlf
insert_final_newline = true
trim_trailing_whitespace = true

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
