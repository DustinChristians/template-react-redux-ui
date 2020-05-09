## Local Spin-up/Development Instructions

1.  **Install/Update [Node](https://nodejs.org)**.

2.  **Open the project folder in VS Code and open a new terminal window.**

3.  **Install Node Packages.** - `npm ci`

4.  **Install [React developer tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en) and [Redux Dev Tools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en)** in Chrome.

5.  Having issues? See the **Troubleshooting** section below.

### Available Scripts

In the project directory, you can run:

#### `npm start`

Automatically runs the app in development mode.
Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.
The page will hot-reload if you make edits.

#### `npm run start:dev`

Automatically runs the app in development mode and starts a mock JSON API server in parallel for testing API calls locally.
Open [http://localhost:3000](http://localhost:3000) to view the app in your browser. The page will hot-reload if you make edits.
Open [http://localhost:3001](http://localhost:3001) to view raw data from the JSON server.

#### `npm run build`

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.
The build is minified and the filenames include the hashes.
Your app is ready to be deployed!
See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `npm test`

Launches the test runner in the interactive watch mode.
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### Troubleshooting

1. Run `npm ci` - If you forget to do this, you'll get an error when you try to start the app later. At the time of writing this there were errors about Python not being set from the command line or npm configuration. This is a bug in npm ci and the error should be ignored.
2. Delete any .eslintrc in your user directory and disable any ESLint plugin / custom rules within your editor since these will conflict with the ESLint rules defined in the app.
3. On Windows? Open your console as an administrator. This will assure the console has the necessary rights to perform installs.
4. Ensure you do not have NODE_ENV=production in your env variables as it will not install the devDependencies. To check run this on the command line: `set NODE_ENV`. If it comes back as production, you need to clear this env variable.
5. Nothing above work? Delete your node_modules folder and re-run npm install.

## Helpful VS Code Extensions

### [ES7 React/Redux/GraphQL/React-Native snippets extension](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)

A VS Code extension that provides shortcuts for creating React/Redux snippets.

Examples: - type `imp` and push `tab` to add `import moduleName from 'module'` to your code file. - type `rcc` + `tab` to add a React class component snippet.

### [Prettier](https://prettier.io/) Setup

The VS Code Prettier extension can be used to auto-format your code on save.

1. Click on the extensions icon on the left side-bar and search for Prettier and click install.
2. Then, in the VS Code main toolbar, click on Code -> Preferences -> Settings
3. Within the settings search for FormatOnSave and make sure the setting is enabled.

### [ESLint](https://eslint.org/docs/user-guide/configuring)

1. Click on the extensions icon on the left side-bar and search for ESLint and click install.

The extension uses the ESLint library installed in the opened workspace folder. If the folder doesn't provide one the extension looks for a global install version. If you haven't installed ESLint either locally or globally do so by running `npm install eslint` in the workspace folder for a local install or `npm install -g eslint` for a global install.

## How this application was created

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Other [React Starter Projects](https://www.javascriptstuff.com/react-starter-projects/).

### 1. Use the Facebook React tool-chain to spin-up a new React app with Redux.

- `npx create-react-app my-app --template redux`

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

### 3. Install [Redux](https://redux.js.org/introduction/getting-started)

Redux makes it easier to manage state in an application. Redux manages the data displayed and the application's response to user actions.

- Redux was installed by the create-react-app step so we don't need to npm install it.

The standard way to use synchronous action creators with network requests is to use the Redux Thunk middleware. By using this specific middleware an action creator can return a function instead of an action object. This way, the action creator becomes a thunk. This function doesn't need to be pure; it is thus allowed to have side effects, including executing asynchronous API calls. The function can also dispatch actions.

- `npm i redux-thunk`

The redux immutable state invariant will warn us if we accidentally mutate redux state.

- `npm i -D redux-immutable-state-invariant`

### 3. Install [SASS](https://sass-lang.com/)

- `npm i node-sass`

- Rename the `App.css` file to `App.scss`.

- Import `App.scss` instead of the `.css` file in the `App.js` file

### 4. [ESLint](https://eslint.org/docs/user-guide/configuring) & Prettier Setup

- ESLint will get installed as part of the “Create-React-App” dependencies.

- You will need to install the ESLint extension in VS Code.

- Install the ESLint and Prettier libraries locally into the project:

  `npm i -D eslint prettier`

- Install the Airbnb config. The peer dependencies are not automatically installed on npm install
  so the `install-peerdeps` flag is included.

  `npx install-peerdeps -D eslint-config-airbnb`

- Install eslint-config-prettier (disables formatting for ESLint) and eslint-plugin-prettier (allows ESLint to show formatting errors as we type)
  `npm i -D eslint-config-prettier eslint-plugin-prettier`

### 5. Install [StyleLint](https://stylelint.io/)

- `npm i -g stylelint-cli`

Use -D to install these as dev dependencies. We don't need them for production builds.

- `npm i -D stylelint`

- `npm i -D stylelint-config-recommended`

- `npm i -D stylelint-config-standard`

- `npm i -D stylelint-config-sass-guidelines`

- `npm i -D stylelint-order`

Create the .stylelintrc configuration file in the project root.
Add the Stylelint extension for VSCode (adds realtime linter error reporting)
Edit the Stylelint extension settings in VS Code and make sure the `Stylelint` setting is enabled.

### 6. Add an [EditorConfig](https://editorconfig.org/)

You can add a .editorconfig file to your project or codebase to enforce consistent coding styles for everyone that works in the codebase. EditorConfig settings take precedence over global Visual Studio text editor settings. This means that you can tailor each codebase to use text editor settings that are specific to that project.

### 7. Workspace File

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
