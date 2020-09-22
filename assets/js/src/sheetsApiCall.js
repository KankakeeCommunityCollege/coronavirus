import injectTableValues from './injectTableValues.js'; // Builds the Google Sheet results into the Table on the page.

const GAPI_PARAMS = {
  'apiKey': 'AIzaSyCEBsbXfFcdbkASlg-PodD1rT_Fe3Nw62A',
  'discoveryDocs': ['https://www.googleapis.com/discovery/v1/apis/sheets/v4/rest']
};
const SHEET_PARAMS = {
  spreadsheetId: '2JDL9QfTqQ1zAVz50gf74WhYuu0QvyG9X-6ESJiddA9Q',
  range: 'Sheet1!B4:C8'
};
const errorResponse = `
<div class="m-3 p-3">
  <div class="card">
    <div class="card-body">
      <h5 class="typography__h5">Whoops!</h5>
      <p><strong>It looks like something went wrong while trying to retrieve the COVID-19 Confirmed Case data</strong></p>
      <p>Please, try <a href="#" onclick="window.location.reload()">reloading the page</a> to retrieve the data, or try a modern browser like Google Chrome or Mozilla FireFox.</p>
    </div>
  </div>
</div>
`;

function start() {
  if (! document.getElementById('trackerTable') ) // Only proceed if this element exists in the page.
    return;

  gapi.client.init(GAPI_PARAMS).then(() => {
      return gapi.client.sheets.spreadsheets.values.get(SHEET_PARAMS);
  }).then( (response) => {
    injectTableValues(response);
  }, (err) => {  // Catch errors thrown by googleapi, or a failed attempt at getting the sheet.
    // Error message is located in `response.result.error.message` for a Sheets response.
    console.error(`Google API Execution Error: \n${err.result.error.message} \nError Code: ${err.result.error.code} \n\nFull Response Object:`, err);
    document.querySelector('.table__wrapper').innerHTML = errorResponse;
  });
}
// Loads the JavaScript client library and invokes `start` afterwards.
//    Usage:
//  gapi.load('client', start);
export default start;
