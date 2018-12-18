// Sets copyright year
document.addEventListener('DOMContentLoaded', function() {
  var d = new Date(),
    fullYear = d.getFullYear();
  document.getElementById('currentYear').innerHTML = fullYear;
});
