const COLLAPSE_BUTTON_ID_STRING = 'collapseButton';
const more = 'More';
const close = 'Close';

function toggleButtonText(e) {
  console.log(e.target);
  if (e.target.innerHTML === 'More') {
    e.target.innerHTML = close;
  } else {
    e.target.innerHTML = more;
  }
}

function addEventListenerToEl(el, eventString, listenerHandler) {
  el.addEventListener(eventString, listenerHandler);
}

function toggleButton() {


  if ( ! document.getElementById(COLLAPSE_BUTTON_ID_STRING) )
    return;

  console.log('CODE');

  const collapseButton = document.getElementById(COLLAPSE_BUTTON_ID_STRING);
  addEventListenerToEl(collapseButton, 'click', toggleButtonText);
}

export default toggleButton;
