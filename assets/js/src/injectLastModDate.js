
function injectLastModDate(response) {
  const LAST_MOD = response.result.modifiedTime;
  const d = new Date(LAST_MOD);
  const cell = document.getElementById('lastUpdated');
  
  return cell.innerHTML = `${d.getMonth() + 1}/${d.getDate()}/${d.getFullYear()}`;
}

export default injectLastModDate;
