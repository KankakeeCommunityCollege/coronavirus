# Webpack Babel and CoreJS Settings

> Explanation of the setup for Webpack 4, Babel 7, & CoreJS 3.
> For compiling & polyfilling es6 modules into a cross-browser compatibile vanilla JavaScript bundle.

---

## Webpack configuration

As of Webpack 4, you do not need a configuration file by default. For our project's webpack configuration, we use a `webpack.config.js` file in the project's root.

## The 'webpack.config.js' file

```javascript
// ./webapck.config.js in project root-level
process.traceDeprecation = true;  // More in-depth reporting on deprication warnings
const path = require('path'); // Gotta require it for webpack 4
const HashPlugin = require('hash-webpack-plugin');  // Plugin that generates a hash from the bundle. Installed via npm (package.json).
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // Plugin for cleaning the dist/ dir. Installed via npm (package.json).

const config = {
  mode: 'production', // Set mode to make a production-bundle
  watch: true, // Watch for changes
  entry: { // Defining multiple entry-point files.
    'main': './assets/js/src/all.js', // Main bundle's entry-point file.
    'slim': './assets/js/slim/slim.js' // Slim bundle's entry-point file.
  },
  output: {
    filename: '[name].[hash].bundle.js', // Create a hash in the bundles name for cache-busting. In `[name].[hash].bundle.js` [name] & [hash] are webpack-y things
    path: path.resolve(__dirname, 'assets', 'js', 'dist')  // Where to inject the file
  },
  module: {
    rules: [ // define the rule to use for javascript files
      {
        test: /\.js$/,  // A regular expression for the `.js` file-ending
        exclude: [
          path.resolve(__dirname, 'node_modules') // Not excluding node_modules/ can drain a lot of CPU/resources when running webpack
        ],
        use: { // What to do if the test is met:
          loader: 'babel-loader'  // Uses `babel-loader` installed from `package.json`.
        }
      }
    ]
  },
  plugins: [ // Some plugin configurations
    // WARNING: Piping the hash file to a folder other than `_data` may break the build/watch process.
    new HashPlugin({ path: './_data/', fileName: 'hash.yml' }),  // Tell the `hash-webpack-plugin` where to create the hash file.
    new CleanWebpackPlugin({ path: './assets/js/dist/' }) // Tell the `clean-webpack-plugin` which dir/subdir/ to clean.
  ],
  resolve: { // Pretty standard stuff bellow
    extensions: ['.json', '.js', '.jsx']
  }
};

module.exports = config;
```

## Making Webpack & Jekyll Work Together

Jekyll is written on the ruby language, however, Webpack uses NodeJS. To get these two different processes running, we use the npm package [`npm-run-all`](https://www.npmjs.com/package/npm-run-all)(installed from the `package.json` file durring `npm install`).

Running `npm run production` will run the `npx webpack --mode=production` and `gulp --production` commands in parallel.

One more issue arises with running Jekyll and Webpack in parallel like this. You can easily get into infinite update loops if Webpack alters any files that Jekyll is watching.
