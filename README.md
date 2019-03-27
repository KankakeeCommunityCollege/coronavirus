# KCC Startup Template

#### Jekyll + Webpack + Babel + Gulp + Sass + Autoprefixer + imagemin + BrowserSync + ...

***A startup repo for creating new websites in the KCC website redesign project***

---

The Development of new KCC website is based off of designer's mockups and uses open source technologies.

***This README assumes you are using a modern macOS X system***

## Requirements
---

 - Jekyll & Bundler:
```shell
$ gem install jekyll
$ gem install bundler
```
 - Nodejs - I recommend using NVM (Node Version Manager): https://github.com/creationix/nvm
   - .nvmrc file in this repo will make NVM use Node v8.9.4 (to avoid compatibility issues)
   - Or, if you must - Use the Nodejs installer: https://nodejs.org/

 - Gulp:
```shell
$ npm install --global gulp-cli` // mac users may need sudo
```

## Installation
	$ git clone https://github.com/KankakeeCommunityCollege/kcc-startup-template.git <project name>
	$ cd <project name>
	$ sh install.sh

## Development
	$ gulp

## Production
	`$ `

Production build minifies CSS and JavaScript and compresses image files.

A gulp production build should be run before committing and pushing any CSS, JS, or new images to the Github repository.

Trying to push non-minified CSS and JS may result in merge conflicts.  If you have a merge conflict, especially on main.css or all.min.js, try running `$ gulp --production` before trying to push again

	$ gulp --production

## The gulpfile.js and gulpconfig.yml

See the comments within gulpfile.js and gulpconfig.yml for detailed explanation of what happens on running `$ gulp` or `$ gulp --production`
