
## Local Spin-up/Development Instructions

1.  **Install/Update [Node](https://nodejs.org)**.

2.  **Open the project folder in VS Code and open a new terminal window.**

3.  **Install Node Packages.** - `npm ci`

4.  **Install [React developer tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en) and [Redux Dev Tools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en)** in Chrome.

5. Having issues? See the **Troubleshooting** section below.

### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
The page will reload if you make edits.
You will also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.
The build is minified and the filenames include the hashes.
Your app is ready to be deployed!
See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Troubleshooting

1. Run `npm install` - If you forget to do this, you'll get an error when you try to start the app later.
2. Delete any .eslintrc in your user directory and disable any ESLint plugin / custom rules within your editor since these will conflict with the ESLint rules defined in the app.
3. On Windows? Open your console as an administrator. This will assure the console has the necessary rights to perform installs.
4. Ensure you do not have NODE_ENV=production in your env variables as it will not install the devDependencies. To check run this on the command line: `set NODE_ENV`. If it comes back as production, you need to clear this env variable.
5. Nothing above work? Delete your node_modules folder and re-run npm install.

### [ES7 React/Redux/GraphQL/React-Native snippets extension](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)

A VS Code extension that provides shortcuts for creating React/Redux snippets.

Examples: - type `imp` and push `tab` to add `import moduleName from 'module'` to your code file. - type `rcc` + `tab` to add a React class component snippet.

## How this application was created

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Other [React Starter Projects](https://www.javascriptstuff.com/react-starter-projects/).

### 1. Use the Facebook React tool-chain to spin-up a new React app.

-  `npx create-react-app your-app`

- The above command will setup a React dev environment, install and configure Webpack, Babel, ESLint and Prettier.

### 2. Creating an application using the above tool-chain will scaffold a new project like so:

your-app<br />
├── README.md<br />
├── node_modules<br />
├── package.json<br />
├── .gitignore<br />
├── public<br />
  │ ├── favicon.ico<br />
  │ ├── index.html<br />
  │ └── manifest.json<br />
└── src<br />
├── App.css<br />
├── App.js<br />
├── App.test.js<br />
├── index.css<br />
├── index.js<br />
├── logo.svg<br />
└── serviceWorker.js<br />

### 3. To run the app, use the following command in a terminal window

-  `npm start`

- You should be able to browse to http://localhost:3000

### 4. Install [SASS](https://sass-lang.com/)

-  `npm install node-sass --save`

- Rename the `App.css` file to `App.scss`.

- Import `App.scss` instead of the `.css` file in the `App.js` file

### [Prettier](https://prettier.io/) Setup

The VS Code Prettier extension can be used to auto-format your code on save.

1. Click on the extensions icon on the left side-bar and search for Prettier and click install.
2. Then, in the VS Code main toolbar, click on Code -> Preferences -> Settings
3. Within the settings search for FormatOnSave and make sure the setting is enabled.

### 5. [ESLint](https://eslint.org/docs/user-guide/configuring) & Prettier Setup

- ESLint will get installed as part of the “Create-React-App” dependencies.

- You will need to install the ESLint extension in VS Code.

- Install the ESLint and Prettier libraries locally into the project:
  `install -D eslint prettier`

- Install the Airbnb config:
  `npx install-peerdeps --dev eslint-config-airbnb`

- Install eslint-config-prettier (disables formatting for ESLint) and eslint-plugin-prettier (allows ESLint to show formatting errors as we type)
  `npm install -D eslint-config-prettier eslint-plugin-prettier`

### 6. Install [StyleLint](https://stylelint.io/)

-  `npm i -g stylelint-cli`

Use --save-dev to install these as dev dependencies. We don't need them for production builds.

-  `npm i --save-dev stylelint`

-  `npm i --save-dev stylelint-config-recommended`

-  `npm i --save-dev stylelint-config-standard`

-  `npm i --save-dev stylelint-config-sass-guidelines`

-  `npm i --save-dev stylelint-order`

Create the .stylelintrc.json configuration file in the project root.
Add the Stylelint extension for VSCode (adds realtime linter error reporting)
Edit the Stylelint extension settings in VS Code and make sure the `Stylelint` setting is enabled.

### 7. Add an [EditorConfig](https://editorconfig.org/)

  You can add an EditorConfig file to your project or codebase to enforce consistent coding styles for everyone that works in the codebase. EditorConfig settings take precedence over global Visual Studio text editor settings. This means that you can tailor each codebase to use text editor settings that are specific to that project.

### 8. Workspace File

#### What is a workspace?

A project that consists of one or more root folders, along with all of the Visual Studio Code configurations that belong to that project.

These configurations include data such as:
- Settings that should be applied when the project is open.
- Recommended extensions for the project (useful when sharing the configuration files with colleagues)
- Project-specific debugging configurations

#### How to create a .code-workspace file?

Go to the VS Code menu and click File → Save Workspace As...

#### How to add root folders to a workspace?

Go to the VS Code menu and click File → Add Folder to Workspace....

#### How to open a workspace that is defined by a .code-workspace file?

Double click the .code-workspace file. VS Code won't open the actual file. Instead, it will read that file and open the folders that belong to that workspace.

## Learn More

To learn React, check out the [React documentation](https://reactjs.org/).
