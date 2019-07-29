# Update Procedure

> Update procedure to bring projects into the new gulp V4 + webpack template.

---

<br>

## Update + Configure Project's Backend

<br>

> - Gulpjs v3 => v4
> - \+ Webpack

1. Delete all `./gulp-tasks/` files & replace with `./gulp-tasks/loadGulpConfig.js`
2. Add the "theme", "site_name", "public-url", & "google-tag_key" keys & values to _config.yml (replaceing any <EXAMPLE VALUE> with the appopriate value for the project):
```yaml
public-url: "<LIVE URL OF THE SITE INCLUDING HTTPS://>" # Displays in the navigation bar
site_name: "<SITE NAME>" # Displays in footer '<subdomain>.kcc.edu' link
theme: "kcc-gem-theme"
google-tag_key: "Google Tag Manager key goes here"
```
3. To the Gemfile, add:
```ruby
gem 'kcc-gem-theme', '~> 0.7.4'
```
4. ***REPLACE*** the ***ENTIRE*** contents of gulpfile.js with the new one.
5. Compare old new `gulpconfig.yml` files line-by-line:
    - Check for unique project tasks & delete unnecessary ones (e.g. travis tasks)
    - Delete all javascript-compiling task entries
6. Copy-and-paste the new `package.json` file's contents from the line after the `"description": "",` to the end (should be line 5 to end)
7. Paste webpack.config.js into site root.
8. Delete yarn.lock file if it exists.
9. Run `$ bundle i` & `$ npm i` to install/update the new dependancies.

---

## Setup Project for `kcc-gem-theme`

<br>

1. Copy the `_includes/copies/` dir & its contents into the new project
2. Examine all the `./_layouts/` in use:
    - If a layout named `default.html` is in use by the project:
      - Delete it if the gem theme's default layout is suitable.
      - Rename it if the layout is too different from the gem theme's
3. Examine fonts used in the project:
    - For custom fonts in the project:
      - Copy `./_includes/copies/styles/fonts.html` into `./_includes/styles/fonts.html`
      - ***Append*** with additional font stylesheet `<link>` tags
4. For any included html-module customizations needed in the project:
      - Copy the appropriate `./_includes/copies/**/*.html` file up a level into `./_includes/**/*.html` & make the desired changes
5. Check if the project has any of the following files already:
    - `./_includes/benefits.html`
    - `./_includes/body.html`
    - `./_includes/bottom-action-call.html`
    - `./_includes/contacts.html`
    - `./_includes/document-head.html`
    - `./_includes/foot.html`
    - `./_includes/footer.html`
    - `./_includes/nav-global.html`
    - `./_includes/nav-landing.html`
    - `./_includes/nav-local.html`
    - `./_includes/nav-sub.html`
    - If any of these exist:
      - Delete whenever possible (when the project is run, not deleting them will cause them to be pulled into the gem-theme's template--instead of the theme's file)
      - If file is too different from its kcc-gem-theme counterpart with the same name, incorporate the code with the gem-themes' code.
6. Add the `nav_links` key & approprate configuration to `./_config.yml`
7. Add the contacts-collection configuration to the `collections` entry of `./_config.yml`:
```yaml
# more config above ...
collections:
  contacts:
    output: false
# more config below ...
```

---

## Test gulpjs V4

> Resolve any errors thrown by gulp

<br>

99% of the time gulp is going to throw errors at this point. 99% of the time gulp is going to throw errors at this point from one of the two:
  1. A mismatch between your `gulpfile.js` and `gulpconfig,yml`. This happens when an entry in your `./gulpconfig.yml` being different than the task calling it from `./gulpfile.js`.
  2. Missing a `_layouts/` or `_includes/` file (which is actually a Jekyll error but gulp is running jekyll).

Fortunately, npm & gulps error handling is verbose enough to get a good idea of exactly what is causing the issue.

At this point we need to start testing the new gulpjs V4 we just installed & setup. ***Unless the planets have aligned and you got super lucky, your new gulp tasks & setup are probably broken & will throw an error.*** Steps to fix broken gulp tasks:

1. Test gulp by running `$ gulp --production` at terminal.
2. Look the error's printout in terminal. Most of the time it's the `./gulpfile.js` pointing to settings in `./gulpconfig.yml` that either don't exist or go by a different name.
3. Make the adjustment to `./gulpfile.js` or `./gulpconfig.yml`
4. Repeat 1. through 3. until gulp doesn't throw any more errors.

### Gulp Testing Example

Here is an example error thrown by gulp while updating to V4:
```shell
[12:06:15] 'cmsScss' errored after 28 ms
[12:06:15] TypeError: Cannot read property 'src' of undefined
    at cmsScss (/Users/wdzajicek/repositories/newsroom/gulpfile.js:69:34)
    at bound (domain.js:395:14)
    at runBound (domain.js:408:12)
    at asyncRunner (/Users/wdzajicek/repositories/newsroom/node_modules/async-done/index.js:55:18)
    at process._tickCallback (internal/process/next_tick.js:61:11)
[12:06:15] 'default' errored after 2.31 s
[12:06:15] The following tasks did not complete: mainScss, copy
[12:06:15] Did you forget to signal async completion?
```

Above we can see:
  - The gulp task `'csmScss'` threw the error.
  - The error was thrown when trying to read the `'src'` property saying its undefined

To fix this we need to look at the task that errored in `./gulpfile.js`:
```javascript
function cmsScss() {
  const PRODUCTION = !!(yargs.argv.production);

  return gulp.src(config.cmsScss.src) // The culprit property
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer(config.cmsScss.compatibility))
    .pipe(gulpif(PRODUCTION, cssnano({ zindex: false }))) // {zindex:false} to prevent override of z-index values -- higher z-index's needed to bring objects above bootstrap's default z-index values
    .pipe(gulpif(!PRODUCTION, sourcemaps.write()))
    .pipe(gulp.dest(config.cmsScss.dest.jekyllRoot))
    .pipe(gulp.dest(config.cmsScss.dest.buildDir))
    .pipe(browserSync.stream());
}
```
You can see the property (that threw the error) being called on the 2nd line inside the function: `return gulp.src(config.cmsScss.src)`

Looking at the corresponding configuration in `./gulpconfig.yml`:
```yaml
contentSass:  # Task is named wrong
  compatibility:
    - "last 2 versions"
    - "ie >= 9"
    - "defaults"
  dest:
    jekyllRoot: "assets/css/"
    buildDir: "_site/assets/css/"
  notification: "Running contentSass"
  src: "assets/scss/content.scss"
```

This task is named wrong in our configuration.

This example fix is as simple as replacing one occurrence of `contentSass:` in `./gulpconfig.yml`:

```yaml
# More above
cmsScss:  # Renamed
  compatibility:
  ...
# More below
```

---

## Setup + Configure Webpack/Babel

> Bundle ES16 into IE11-friendly JS

<br>

1. In `./assets/js/` create a `src/` & `dist/` dir plus:
    - If the project only compiles 1 JS file:
      1. Create `./assets/js/src/all.js`
      2. Delete the `'slim': './assets/js/slim/slim.js'` entry from `./webpack.config.js`
    - If the project was only compiling 2 JS files:
      1. Create `./assets/js/src/all.js`
      2. Create ./assets/js/slim/slim.js`
    - If the project had more than 2 JS files compiling:
      1. Create `./assets/js/src/all.js`
      2. Create ./assets/js/slim/slim.js`
      3. Create an additional dir & entry-file for each old JS task and an appropriate entry in `./webpack.config.js`
2. Delete any `*.min.js` files & orphans that weren't included in anything in the old `gulpconfig.yml`
3. Create a simple JS module to test webpack. Name it test.js and put a copy in each javascript task's dir:
```javascript
// test.js
function test() {
  console.log('THIS IS A TEST');
}

export default test;
```
4. In your new blank entry-point files (all.js, slim.js, etc.), import the module and call its function like this:
```javascript
// './assets/js/src/all.js'
import test from './test.js';

document.addEventListener('DOMContentLoaded', function() {
  test();
});
```

## Test Webpack

Test that webpack is working properly by running:
```bash
npx webpack
```
Resolve any errors that arise & repeat. If webpack is working properly you should see something like this in your terminal when webpack is working:
```bash
Hash: 5fd9bc66ed0205a194fd
Version: webpack 4.37.0
Time: 664ms
Built at: 07/24/2019 1:52:23 PM
                              Asset      Size  Chunks             Chunk Names
main.5fd9bc66ed0205a194fd.bundle.js  1.06 KiB       0  [emitted]  main
slim.5fd9bc66ed0205a194fd.bundle.js  1.04 KiB       1  [emitted]  slim
Entrypoint main = main.5fd9bc66ed0205a194fd.bundle.js
Entrypoint slim = slim.5fd9bc66ed0205a194fd.bundle.js
[0] ./assets/js/src/all.js + 1 modules 213 bytes {0} [built]
    | ./assets/js/src/all.js 112 bytes [built]
    | ./assets/js/src/counter.js 101 bytes [built]
[1] ./assets/js/slim/slim.js + 1 modules 194 bytes {1} [built]
    | ./assets/js/slim/slim.js 103 bytes [built]
    | ./assets/js/slim/test.js 91 bytes [built]
```

## Convert JS files into JS modules.

Go through each JS file that was compiled by the old gulp tasks and convert it into a module for importing into your entry points.

When using the `import moduleFunction from './module.js';` import-method, using `module.exports = moduleFunction;` usually won't work in your modules (webpack will throw an error). Instead use the `export default moduleFunction;` method.

Import each module into your entry-point file and call your functions appropriately (e.g. after the 'DOMContentLoaded' event). Do this one-at-a-time to make debugging easier.

Run `$ npx webpack` again after each new import you add & resolve any errors that may arise.

If Babel is working properly, you will start to see something like `+ 64 hidden modules` at the end of webpack's screen printout. This number will probably change as you add more imports to your entry file. These 'hidden modules' are corejs feature polyfills getting imported into your bundle automatically on an as-needed basis (only imports features you use polyfilled to versions you speccify).

The easiest way to do this process as follows. Webpack can be left running durring this:

1. Convert 1 JS file into a module.
    - The quickest (& dirtiest) way to do this is wrap the entire JS file in a function and export that function at the end of it.
2. Import that JS module into you entry file (all.js, slim.js, etc.) & call its exported function.
3. Run `$ npx webpack` if it isn't already and check for errors.
4. Resolve any errors if needed.
5. Repeat 1. through 4. for all of the JS files.

# Test Webpack & Gulpjs v4 Together

> Wonder-twins unite!

Part of the `./package.json` file that was copied earlier was new npm scripts. These new scripts run the gulp and webpack commands in parallel. To create a development build run `$ npm run dev` in terminal. To create a production build run `$ npm run production`. Add these two aliases to your `~/.aliases` dotfile:
```bash
alias npm-p="npm run production"
alias npm-d="npm run dev"
```

## Rewrite & Purge JS

Purge as much jQuery from the JS files as possible. Not only will this increase performance it, will prepare the project for an update to Bootstrap 5 when its released.

Rewrite it using small functions in flexible & reusable reads-like-plain-english ES-16 modules.

Make sure to check any JS modification in IE11 & Edge.

# Check to make sure the kcc-gem-theme is displaying properly.
