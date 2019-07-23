# Update Procedure

> Update procedure to bring projects into the new gulp V4 + webpack template.

1. Delete all gulp-tasks/files
2. Paste 'loadGulpConfig.js' in its place
3. REPLACE the ENTIRE contents of gulpfile.js with the new one
4. Compare gulpconfig.yml:
  - line-by-line to check for unique project tasks
  - Delete all javascript-compiling tasks from gulp
