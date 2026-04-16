# Compass Glass Website


Compass Glass project modernized with React 18 with Node v25 compatibility.

📊 What Was Updated

Dependencies:

- ✅ React: 16.13.1 → 18.2.0
- ✅ React DOM: 16.13.1 → 18.2.0
- ✅ react-scripts: 3.4.1 → 5.0.1 (webpack 4 → webpack 5)
- ✅ node-sass → sass (dart-sass)
- ✅ React Router: 5.x → 6.18.0
- ✅ react-hook-form: 6.x → 7.48.0
- ✅ TypeScript: 4.6.3 → 5.3.3
- ✅ All testing/dev dependencies updated

Code Changes:

- ✅ React 18 rendering API (ReactDOM.createRoot())
- ✅ React Router v6 (Routes vs Switch, element prop, className callbacks)
- ✅ react-hook-form v7 API (formState.errors)
- ✅ EmailJS SDK migration (emailjs-com → @emailjs/browser)
- ✅ Component TypeScript definitions for children props
- ✅ Windows path handling in build scripts (PowerShell fix)

## Available Scripts

In the project directory, you can run:

### `yarn wireup`

Creates boilerplate code to wire up `types`, `routes`, `sass` and `component` exports.<br/>
**Note**: Run this command when files are deleted or created.

### `yarn plop`

CLI tool to create `components`, `pages` and `layouts`.<br />
This will also run `yarn wireup` to create all boilerplate code.

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More

Plop template generation [documentation](https://plopjs.com/)

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
