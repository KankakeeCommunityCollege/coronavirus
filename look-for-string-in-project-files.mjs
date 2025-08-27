import { readdir, readFile } from 'node:fs';

const path = './_site'; // Where to look for the string in question
const options = {
  recursive: true // Make sure we check all folders and sub-folders
}

// We don't need to search all the site build's files
const htmlFileRegExp = /.+\.(html)$/; // only search HTML files

// The string we are looking for in Regular Expression format
const stringToFindRegExp = /https:\/\/kcc\.smartcatalogiq\.com\/(?:en\/(?:2024-2025|current)|current)\/academic-catalog\/code-of-campus-affairs-and-regulations/;
// const stringToFindRegExp = /loader\.svg/;
// The same string we are looking for in Regular Expression format but with the global flag
const stringToFindRegExpGlobal = new RegExp(stringToFindRegExp, 'g');

console.log(`\n==== [SEARCHING in: ${path}] ====`);

readdir(path, options, (err, files) => {
  if (err) {
    console.error("Could not list the directory.", err);
    process.exit(1);
  }

  const htmlFiles = files.filter(file => !file.search(htmlFileRegExp));

  htmlFiles.forEach(file => {
    readFile(`${path}/${file}`, 'utf8', (err, data) => {
      if (err) {
        console.error("Could not read file.", err);
        process.exit(1);
      }

      if (data.search(stringToFindRegExp) !== -1) {
        const classArr = data.match(stringToFindRegExpGlobal);

        classArr.forEach(match => console.log(`[FOUND]: ${match} in ${file}`));
      }
    });
  });
});

console.log(`\n====   [RESULTS]    ====`);
