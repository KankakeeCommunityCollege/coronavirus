import '../../scss/main.scss';

window.addEventListener('load', () => {
  if (document.getElementById('trackerTable')) {
    import('./sheetsApiCall').then(({ default: start }) => {
      gapi.load('client', start);
    });
  }
});
