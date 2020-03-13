const COLLAPSE_BUTTON_ID_STRING = 'collapseButton';
const more = 'More';
const close = 'Close';

function toggleButtonText(e) {
  const buttonHasMoreText = e.target.innerHTML === 'More';

  buttonHasMoreText ? e.target.innerHTML = close
  : e.target.innerHTML = more;
}

function addEventListenerToEl(el, eventString, listenerHandler) {
  el.addEventListener(eventString, listenerHandler);
}

function toggleButton() {

  if ( ! document.getElementById(COLLAPSE_BUTTON_ID_STRING) )
    return;

  const collapseButton = document.getElementById(COLLAPSE_BUTTON_ID_STRING);
  addEventListenerToEl(collapseButton, 'click', toggleButtonText);
}

export default toggleButton;
