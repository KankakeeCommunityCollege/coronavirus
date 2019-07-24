# Update Procedure

> Update procedure to bring projects into the new gulp V4 + webpack template.

1. Delete all gulp-tasks/files
2. Paste 'loadGulpConfig.js' in its place
3. Add the "theme" & "google-tag_key" keys & values to _config.yml
4. Add `gem 'kcc-gem-theme', '~> 0.7.4'` to the Gemfile
5. REPLACE the ENTIRE contents of gulpfile.js with the new one
6. Compare gulpconfig.yml:
  - line-by-line to check for unique project tasks
  - Delete all javascript-compiling task configs
7. Copy-and-paste the new package.json file's contents from the line after "description": "", to the end
8. Paste webpack.config.js into site root.
9. Delete yarn.lock file if it exists.
10. Run `$ bundle i` & `$ npm i` to install the new dependancies.