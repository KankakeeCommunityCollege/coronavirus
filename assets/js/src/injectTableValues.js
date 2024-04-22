
const TABLE_SPAN_ID_ARRAY = [['weekOf', 'cumulative'], ['currentStudents', 'cumulativeStudents'], ['currentEmployees', 'cumulativeEmployees'], ['currentTotal', 'cumulativeTotal']];
// the TABLE_SPAN_ID_ARRAY is an array of arrays—it essentially mirrors the Google Sheet.
// Only, the values in this array, correspond to a <span> element's ID in the table's HTML.
function injectValIntoEl(val, elIdString) {
  let el = document.getElementById(elIdString);
  const VALUE_IS_INCALCULABLE = (val === '#VALUE!'); // This is what Sheets fills in a cell when it can't calculate something.
  let valueHTML = (VALUE_IS_INCALCULABLE) ? 'N/A' : val;

  el.innerHTML = valueHTML;
}

function loopOverRow(row, idArr) {
  row.forEach((val, i) => {
    injectValIntoEl(val, idArr[i]);
  });
}

function injectTableValues(response) {
  const values = response.result.values; // This is where the values are in a standard Sheets-API response.
  // values is an array representing the table, where each row is respresented by another array, and
  //  each of those array-items represents a value in the Google Sheets corresonding cell.
  values.forEach((row, i) => {
    // Each ID in the TABLE_SPAN_ID_ARRAY is ordered and grouped to MATCH THE INCOMING DATA...
    // FROM THE GOOGLE SHEET EXACTLY.
    loopOverRow(row, TABLE_SPAN_ID_ARRAY[i]);
  });
}

export default injectTableValues;
