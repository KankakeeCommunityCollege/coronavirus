# KCC Coronavirus Website

#### Jekyll + Webpack + Babel + Sass + Autoprefixer + imagemin + BrowserSync + ...

-----

<br>

The Development of new KCC website is based off of designer's mockups and uses open source technologies.

**This site uses KCC's own gem-based jekyll-theme--developed in-house!**

You can find the kcc-gem-theme at https://rubygems.org/gems/kcc-gem-theme and on GitHub at https://github.com/KankakeeCommunityCollege/kcc-gem-theme/

[![Gem Version](https://badge.fury.io/rb/kcc-gem-theme.svg)](https://badge.fury.io/rb/kcc-gem-theme)

***This README assumes you are using a modern macOS system***

*The same setup can be achieved on Windows and Linux however, the requirements are different.*

## Requirements

 - Jekyll & Bundler:
```shell
$ gem install jekyll
$ gem install bundler
```
 - Nodejs/npm - We use NVM (Node Version Manager): <https://github.com/creationix/nvm>
   - .nvmrc file in this repo will make NVM use the Node version listed in `.nvmrc` (to avoid compatibility issues)
   - Or, if you must - Use the Nodejs installer: <https://nodejs.org/>
 - Webpack 5

The ruby version for this project is specified in the `.ruby-version` file.

-----

<br>

## Installation

-----

1. Clone (via ssh) the project and `cd` into the new project folder
2. Install the gem and npm dependencies

```bash
git clone git@github.com:KankakeeCommunityCollege/coronavirus.git
cd coronavirus
npm i && bundle i ## Or `npm install && bundle install` if you like typing more
```

-----

<br>

## Development

***Do NOT push dev builds to the GitHub repo.***

**Development changes should be made in the `master` branch.** Be sure you have the latest changes first to avoid merge conflicts:
```bash
git checkout master
git pull origin master
```

To run a development build use:
```shell
$ npm run development

# This alias in your dotfiles is convenient:
alias npm-d="npm run development"
```

The development npm script sets the `NODE_ENV` environment variable to `"development"`. Webpack checks the `NODE_ENV` and, if its set to development, uses `style-loader` to inject styling into the document's `<head>` as inline styling (`<style>...</style>`.) 

According to Webpack's docs, injecting inline styles into the document `<head>` provides a faster development environment.

Webpack will also set its mode (production/dev) depending on what the `NODE_ENV` variable is set to. In development the bundle is not minified and is easier to debug.

-----

<br>

## Production

***Only production builds should be pushed to the GitHub repo.***

**Check the production build in a browser before pushing it to GitHub!**

### Publishing workflow

Most of the KCC websites are setup to use the `master` branch to stage changes. To make them live, the changes are then brought into the `publish` branch and pushed GitHub. 

Development should have been started in the `master` branch. Production builds should also happen in the `master` branch. Once changes are finalized they can be pushed (`git push -u origin master`.) **To publish the changes to the live website**, checkout the `publish` branch and make sure it is current (`git checkout publish && git pull origin publish`.) Next, merge your changes of the `master` branch into the `publish` branch and push to GitHub: `git merge master`, accept the default commit message and `git push -u origin publish`. Lastly, switch back to the `master` branch so that the project is ready for the next time it needs editing. 


If you accidentally developed in the `production` branch its ok! Just finish up your development, push the production build to `publish`, and then bring those changes into the `master` branch and push them. This ensures the `master` branch stays even with the `publish` branch.

To run a production build use:
```shell
$ npm run production

# Another convenient alias:
alias npm-p="npm run production"
```

The production build still watches for file changes and creates a local server for previewing. **After previewing the production build in your browser,** use the `[control ^] + c` key-combination to kill the running processes. _If everything looks ok,_ you can `git add ...`, `git commit`, and `git push ...` the changes to GitHub.

A production build sets the `NODE_ENV` variable to `"production"`. Webpack then uses the `mini-css-extract-plugin` to generate, and output, a CSS file stylesheet. The stylesheet's `<link>` tag is only included in the DOM in production builds (development builds inject inline styling.) Webpack also minifies the bundle in production mode. 

_**Note:** Webpack outputs the stylesheet file into the `/assets/js/dist` folder._

**IMPORTANT: if any SCSS/CSS or JS is  modified, be sure to _commit and push the `_data/hash.yml` file along with modified SCSS/CSS/JS files._** \
_Not including `hash.yml` will break the site's main JS and CSS files!_

-----

<br>

## Accessibility testing with Pa11y

Pa11y is used for automated and manual accessibility testing.

### Automated testing

The GitHub repo uses an action to automatically run pa11y after every commit to the `master` branch. This helps catch
things like missing alt text or other issues introduced by non-technical editors of the site in CloudCannon.

### Manual testing

`pa11y` and `pa11y-ci` are used in the local project files to test for accessibility issues. The `pa11y` script will run
on a local build of the project and test the files in `_site/` for accessibility issues. The `pa11y-ci` script runs using
the live `sitemap.xml` file of the website.

At this time, **the `pa11y-ci` script picks up more issues than the plain `pa11y` script.** The `pa11y` script doesn't seem to render or test all the dynamic content built with JavaScript so `pa11y-ci` will usually give more accurate results. The hope is to get `pa11y` configured better so that JS is rendered and dynamic content tested.

```bash
## Run pa11y on the local build
npm run test:pa11y
## Run pa11y-ci on the live sitemap
npm run test:pa11y-ci
```

Both scripts take the same arguments:

| Argument | Name | Description |
| ---------|------|-------------|
| `-o`     | Output     | Output the results to a log file (`pa11y-log.*.txt` and `pa11y-ci-log.*.txt`) |
| `-s`     | Skip build | Skip doing a Jekyll build prior to running `pa11y` (does not apply to `pa11y-ci`) |

Examples:

```bash
# Pa11y examples:
## Run pa11y and output the results to a log file
npm run test:pa11y -- -o
## Run pa11y, skip the jekyll build, and output the results to a log file
npm run test:pa11y -- -s -o

# Pa11y CI examples:
## Run pa11y-ci and output the results to a log file
npm run test:pa11y-ci -- -o
## This script does the same as passing the `-o` flag to `test:pa11-ci`
npm run test:pa11y-ci-log
```

### `pa11y-ci-sitemap.xml`

Since the sitemap contains PDF files, there is a separate sitemap file for use with `pa11y-ci` that excludes them.
The file `pa11y-ci-sitemap.xml` is used for this purpose. You can run `pa11y-ci` against the standard `sitemap.xml`
file but it will take a lot longer and the resulting PDF errors are not helpful.

### Pa11y CI logs/reporting

When running `npm run test:pa11y-ci -- -o` or `npm run test:pa11y-ci-log`, the log file is created in the `./pa11y-ci-logs/` folder. These logs *should* be committed to GitHub to document our ongoing accessibility testing and results.

**If any errors are found, the log file should be duplicated with the filename suffix `_remediation.txt` and the fix documented there.**

-----

<br>

## The [kcc-gem-theme](https://rubygems.org/gems/kcc-gem-theme)

You will notice this GitHub repo has nothing in it's `_layouts/` dir and no `assets/img/` dir. Yet, when you build the project, images are there and it obviously has a layout. That's thanks to KCC's gem-based jekyll-theme.

Having a theme gem allows us to make changes (to the shared theme elements) across multiple sites, in one place.
