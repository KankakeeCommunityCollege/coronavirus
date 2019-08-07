# KCC Startup Template

#### Jekyll + Webpack + Babel + Gulp + Sass + Autoprefixer + imagemin + BrowserSync + ...

***A startup repo for creating new websites in the KCC website redesign project***

---

<br>

## Items TODO for Starting a New Project

### Terminal TODO:

- [ ] At terminal, add all the files to be tracked by git: `git add .`
- [ ] At terminal, make the first commit: `git commit -m "First commit for <REPOSITORIES_NAME>"`
- [ ] At terminal, add the project's remote origin: `git remote add origin git@github.com:KankakeeCommunityCollege/<REPOSITORIES_NAME_IN_GITHUB>.git`
- [ ] At terminal, push the first commit using `-u` flag: `git push -u origin master`

### README TODO:

- [ ] `README.md` - replace "KCC Startup Template" with an appropriate title for this project.
- [ ] `README.md` - replace "***A startup repo for creating new websites in the KCC website redesign project***" with an appropriate description for this project.

### package.json TODO:

- [ ] `package.json` - replace `"name": "kcc-startup"` with an appropriate name value.

### Jekyll config TODO:

- [ ] `_config.yml` - replace `public-url: "https://www.kcc.edu"` with the appropriate sub-domain.
- [ ] `_config.yml` - replace Google Tag Manager placeholder-text with a key: `google-tag_key: Google Tag Manager key goes here`.

---

<br>

The Development of new KCC website is based off of designer's mockups and uses open source technologies.

**This site uses KCC's own gem-based jekyll-theme--developed in-house!**

You can find the kcc-gem-theme at https://rubygems.org/gems/kcc-gem-theme and on GitHub at https://github.com/KankakeeCommunityCollege/kcc-gem-theme/

[![Gem Version](https://badge.fury.io/rb/kcc-gem-theme.svg)](https://badge.fury.io/rb/kcc-gem-theme)

***This README assumes you are using a modern macOS system***

*The same setup can be achieved on Windows and Linux however, the requirements are different.*

---

<br>

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

<br>

## Installation

```shell
$ git clone https://github.com/KankakeeCommunityCollege/kcc-startup-template.git <project name>
$ cd <project name>
$ sh install.sh # install.sh runs bundle & npm installs, among a few other things.
```

---

<br>

## The Build

Both production builds and dev builds use the run-p (running npm scripts in parallel) using [npm-run-all](https://www.npmjs.com/package/npm-run-all).

Both dev and production builds run two npm scripts in parallel: one starts the `$ gulp` command, the other starts `$ npx webpack`.

**A dev build** runs the default gulp task (i.e. with no `--production` flag) and Webpack passing the `--mode="development"` flag to Webpack.

**A production build** runs gulp with the `--production` flag and Webpack with the `--mode=production` flag.

---

<br>

## Development

***Do NOT push dev builds to the GitHub repo.***

```shell
$ npm run dev

# This alias in your dotfiles is convenient:
alias npm-d="npm run dev"
```

Dev builds run quicker on your machine. They make un-minified CSS, JS, & images.

Dev builds also create a sourcemap in the stylesheets. This allows tools like Chrome's inspect to display the Sass module a particular style is located in.

---

<br>

## Production

***Only production builds should be pushed to the GitHub repo.***

```shell
$ npm run production

# Another convenient alias:
alias npm-p="npm run production"
```

Production build minifies CSS and JavaScript and compresses image files.

---

<br>

## The [kcc-gem-theme](https://rubygems.org/gems/kcc-gem-theme)

You will notice this GitHub repo has nothing in it's `_layouts/` dir and no `assets/img/` dir. Yet, when you build the project, images are there and it obviously has a layout. That's thanks to KCC's gem-based jekyll-theme.

Having a theme gem allows us to make changes (to the shared theme elements) across multiple sites, in one place.
