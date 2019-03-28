# KCC Startup Template

#### Jekyll + Webpack + Babel + Gulp + Sass + Autoprefixer + imagemin + BrowserSync + ...

***A startup repo for creating new websites in the KCC website redesign project***

---

The Development of new KCC website is based off of designer's mockups and uses open source technologies.

***This README assumes you are using a modern macOS system***

*The same setup can be achieved on Windows and Linux however, the requirements are different.*

---
## Requirements

 - Jekyll & Bundler:
```shell
$ gem install jekyll
$ gem install bundler
```
 - Nodejs/npm - We use NVM (Node Version Manager): https://github.com/creationix/nvm
   - .nvmrc file in this repo will make NVM use Node v8.9.4 (to avoid compatibility issues)
   - Or, if you must - Use the Nodejs installer: https://nodejs.org/

 - Gulp:
```shell
$ npm install --global gulp-cli # mac users may need sudo
```

---
## Installation

```shell
$ git clone https://github.com/KankakeeCommunityCollege/kcc-startup-template.git <project name>
$ cd <project name>
$ sh install.sh # install.sh runs bundle & npm installs, among a few other things.
```

---
## The Build

Both production builds and dev builds use the run-p (running npm scripts in parallel) using [npm-run-all](https://www.npmjs.com/package/npm-run-all).

Both dev and production builds run two npm scripts in parallel: one starts the `$ gulp` command, the other starts `$ npx webpack`.

**A dev build** runs the default gulp task (i.e. with no `--production` flag) and Webpack passing the `--mode="development"` flag to Webpack.

**A production build** runs gulp with the `--production` flag and Webpack with the `--mode=production` flag.

---
## Development

***Do NOT push dev builds to the GitHub repo.***

```shell
$ npm run dev

# This alias in your dotfiles is convenient:
alias npm-d="npm run production"
```

Dev builds run quicker on your machine. They make un-minified CSS, JS, & images.

Dev builds also create a sourcemap in the stylesheets. This allows tools like Chrome's inspect to display the Sass module a particular style is located in.

---
## Production

***Only production builds should be pushed to the GitHub repo.***

```shell
$ npm run production

# Another convenient alias:
alias npm-p="npm run production"
```

Production build minifies CSS and JavaScript and compresses image files.
