function doStuff() {
  const materials = [
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium',
    'Uranium'
  ];
  const data = materials.map(material => material + ' <br><hr>');
  const theDiv = document.getElementById('theDiv');
  theDiv.innerHTML = data;
}
document.addEventListener('DOMContentLoaded', function() {
  doStuff();
});
