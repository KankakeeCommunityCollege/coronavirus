# KCC Startup Template

#### Jekyll + Webpack + Babel + Gulp + Sass + Autoprefixer + imagemin + BrowserSync + ...

***A startup repo for creating new websites in the KCC website redesign project***

This project's version of Ruby: `ruby-3.1.3`.

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

## Develoment Environment

### Xcode Command-Line Tools

Install the Xcode command-line tools:

```shell
xcode-select --install
```

### [Homebrew](https://brew.sh/)

Install homebrew:

```shell
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

### GNUPG

```shell
brew install gnupg gnupg2
```

### [RVM](https://rvm.io/) & ruby-2.5.0

```shell
# Install the GPG keys
gpg --keyserver hkp://pool.sks-keyservers.net --recv-keys 409B6B1796C275462A1703113804BB82D39DC0E3 7D2BAF1CF37B13E2069D6956105BD0E739499BDB

# Install RVM
\curl -sSL https://get.rvm.io | bash -s stable
```

```shell
# Install ruby-2.5.0
rvm install ruby-2.5.0

# Set ruby-2.5.0 as the default (loaded when bash is initiallized)
rvm alias create default ruby-2.5.0
```

### [Node Version Mananger (NVM)](https://github.com/nvm-sh/nvm)

```shell
# Install NVM
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash

# Make sure it works
command -v nvm
```

```shell
# Install Node.js via NVM
nvm install 10.15.3
# Set it as the default
nvm alias default 10.15.3

# Some older respositories run on Node.js v8.9.4
nvm install 8.9.4
# Make an alias for it
nvm alias old 8.9.4
```

<br>

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

<br>

## Installation

> This project has two different possible installations methods

---

- To use this project as a starting point for creating a new site, use the instructions for "Installation - for Creating a New Project".
- To work on development for this "kcc-startup-template" repo use the steps in "Installation - for Template Development".

---

<br>

### Installation - for Creating a New Project

```shell
git clone https://github.com/KankakeeCommunityCollege/kcc-startup-template.git <NEW_PROJECT_NAME>
cd <NEW_PROJECT_NAME>
cp ruby-version.txt .ruby-version && nvm use && rvm use # Ensures you are using the correct versions prior to install.
sh install.sh # install.sh runs bundle & npm installs, among a few other things.
```

---

<br>

### Installation - for Template Development


```shell
$ git clone https://github.com/KankakeeCommunityCollege/kcc-startup-template.git
$ cd kcc-startup-template
cp ruby-version.txt .ruby-version && nvm use && rvm use # Ensures you are using the correct versions prior to install.
$ sh install_template.sh # install.sh runs bundle & npm installs, among a few other things.
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
