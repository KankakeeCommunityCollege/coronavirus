import injectTableValues from './injectTableValues.js'; // Builds the Google Sheet results into the Table on the page.
import injectLastModDate from './injectLastModDate.js';
// Configuration object for Google Sheets API call:
//  * spreadsheetId = ID in URL of spreadsheet
//  * range = range to pull from spreadsheet in A1 notation
const sheetParams = {
  spreadsheetId: '1JDL9QfTqQ1zAVz50gf74WhYuu0QvyG9X-6ESJiddA9Q',
  range: 'Sheet1!B4:C7'
};
// Configuration object for Sheets + Drive API's:
const clientParams = {
  'apiKey': 'AIzaSyA8LOs7BC9Hl_ibwdGd9DSQKINcWRcuu1o',
  'discoveryDocs':['https://www.googleapis.com/discovery/v1/apis/drive/v3/rest', 'https://www.googleapis.com/discovery/v1/apis/sheets/v4/rest'],
  'scopes': ['https://www.googleapis.com/auth/drive.readonly', 'https://www.googleapis.com/auth/drive.metadata.readonly']
};
// Configuration object for Drive API call:
const driveParams = {
  'fileId': '1JDL9QfTqQ1zAVz50gf74WhYuu0QvyG9X-6ESJiddA9Q',
  'fields': '*'
}
const errorResponse = `
<div class="m-3 p-3">
  <div class="card">
    <div class="card-body">
      <h5 class="typography__h5">Whoops!</h5>
      <p><strong>It looks like something went wrong while trying to retrieve the COVID-19 Confirmed Case data.</strong></p>
      <p>Please, try <a href="#" onclick="window.location.reload()">reloading the page</a> to retrieve the data, or try a modern browser like <a href="https://www.google.com/chrome/" target="_blank" rel="noopener norefferer">Google Chrome</a> or <a href="https://www.mozilla.org/en-US/firefox/new/" target="_blank" rel="noopener norefferer">Mozilla FireFox</a>.</p>
      <p>If the problem persists, please contact <a href="mailto:webservices@kcc.edu">webservices@kcc.edu</a></p>
    </div>
  </div>
</div>
`;

function start() {
  if (! document.getElementById('trackerTable') ) // Only proceed if this element exists in the page.
    return;

  gapi.client.init(clientParams).then(() => {
    return gapi.client.sheets.spreadsheets.values.get(sheetParams);
  }).then(response => {
    injectTableValues(response);
  }).then(() => {
    return gapi.client.drive.files.get(driveParams);  // Have to use Drive API v3 to get the sheet's 'modifiedTime'
  }).then(response => {
    injectLastModDate(response);
  }, (err) => {  // Catch errors thrown by googleapi, or a failed attempt at getting the sheet.
    // Error message is located in `response.result.error.message` for a Sheets response.
    console.error(`Google API execution error \n\nError message: ${err.result.error.message} \nError type: ${err.result.error.code} \nFull response: `, err);
    document.querySelector('.table__wrapper').innerHTML = errorResponse;
  });
}
// Loads the JavaScript client library and invokes `start` afterwards.
//    Usage:
//  gapi.load('client', start);
export default start;
