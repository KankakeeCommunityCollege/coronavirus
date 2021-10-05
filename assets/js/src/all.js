import '../../scss/main.scss';
import toggleButton from './toggleButton.js';
import start from './sheetsApiCall.js';

document.addEventListener('DOMContentLoaded', function() {
  toggleButton();
  gapi.load('client', start);
});
