## Get Started

1. **Install [Node 8](https://nodejs.org)** or newer. Need to run multiple versions of Node? Use [nvm](https://github.com/creationix/nvm) or [nvm-windows](https://github.com/coreybutler/nvm-windows)
2. **Navigate to this project's root directory on the command line.**
3. **Install Node Packages.** - `npm install`

## Having Issues? Try these things first:

1. Run `npm install` - If you forget to do this, you'll get an error when you try to start the app later.
2. Don't run the project from a symbolic link. It will cause issues with file watches.
3. Delete any .eslintrc in your user directory and disable any ESLint plugin / custom rules within your editor since these will conflict with the ESLint rules defined in the project.
4. On Windows? Open your console as an administrator. This will assure the console has the necessary rights to perform installs.
5. Ensure you do not have NODE_ENV=production in your env variables as it will not install the devDependencies. To check run this on the command line: `set NODE_ENV`. If it comes back as production, you need to clear this env variable.
6. Nothing above work? Delete your node_modules folder and re-run npm install.

### Production Dependencies

| **Dependency**     | **Use**                                              |
| ------------------ | ---------------------------------------------------- |
| bootstrap          | CSS Framework                                        |
| prop-types         | Declare types for props passed into React components |
| react              | React library                                        |
| react-dom          | React library for DOM rendering                      |
| react-router-dom   | React library for routing                            |
| password-validator | utils for password validation                        |

### Development Dependencies

| **Dependency**          | **Use**                                                          |
| ----------------------- | ---------------------------------------------------------------- |
| @babel/core             | Transpiles modern JavaScript so it runs cross-browser            |
| babel-eslint            | Lint modern JavaScript via ESLint                                |
| babel-loader            | Add Babel support to Webpack                                     |
| babel-preset-react-app  | Babel preset for working in React. Used by create-react-app too. |
| css-loader              | Read CSS files via Webpack                                       |
| cssnano                 | Minify CSS                                                       |
| enzyme                  | Simplified JavaScript Testing utilities for React                |
| enzyme-adapter-react-16 | Configure Enzyme to work with React 16                           |
| eslint                  | Lints JavaScript                                                 |
| eslint-loader           | Run ESLint via Webpack                                           |
| eslint-plugin-import    | Advanced linting of ES6 imports                                  |
| eslint-plugin-react     | Adds additional React-related rules to ESLint                    |
| html-webpack-plugin     | Generate HTML file via webpack                                   |
| jest                    | Automated testing framework                                      |
| mini-css-extract-plugin | Extract imported CSS to a separate file via Webpack              |
| npm-run-all             | Display results of multiple commands on single command line      |
| postcss-loader          | Post-process CSS via Webpack                                     |
| style-loader            | Insert imported CSS into app via Webpack                         |
| webpack                 | Bundler with plugin ecosystem and integrated dev server          |
| webpack-bundle-analyzer | Generate report of what's in the app's production bundle         |
| webpack-cli             | Run Webpack via the command line                                 |
| webpack-dev-server      | Serve app via Webpack                                            |

### Useful scripts

To run the app:

`npm start`

If you get Error: "listen EADDRINUSE" either need to change the start script in package.json to use different port than 3000 or kill the process that is running on port 3000.

To run unit tests:

`npm test`
