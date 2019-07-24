# Update Procedure

> Update procedure to bring projects into the new gulp V4 + webpack template.

---

## Update + Configure Project's Backend

<br>

> - Gulpjs v3 => v4
> - \+ Webpack

1. Delete all `./gulp-tasks/` files & replace with `./gulp-tasks/loadGulpConfig.js`
2. Add the "theme" & "google-tag_key" keys & values to _config.yml:
```yaml
theme: "kcc-gem-theme"
google-tag_key: "Google Tag Manager key goes here"
```
3. To the Gemfile, add:
```ruby
gem 'kcc-gem-theme', '~> 0.7.4'
```
4. ***REPLACE*** the ***ENTIRE*** contents of gulpfile.js with the new one.
5. Compare old new `gulpconfig.yml` files line-by-line:
    -  Check for unique project tasks & delete unnecessary ones (e.g. travis tasks)
    - Delete all javascript-compiling task entries
6. Copy-and-paste the new `package.json` file's contents from the line after the `"description": "",` to the end (should be line 5 to end)
7. Paste webpack.config.js into site root.
8. Delete yarn.lock file if it exists.
9. Run `$ bundle i` & `$ npm i` to install the new dependancies.

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

<br>

At this point we need to start testing the new gulpjs V4 we just installed & setup. ***Unless the planets have aligned and you got super lucky, your new gulp tasks & setup are probably broken & will throw an error at this point.*** Steps to fix broken gulp tasks:

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



## Setup + Configure Webpack

<br>

1. In `./assets/js/` add a `src/` & `dist/` dir plus:
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
