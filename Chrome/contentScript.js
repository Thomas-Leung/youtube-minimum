(() => {
  // chrome.runtime.onMessage.addListener((obj, sender, response) => {
  //   const { type, value, videoId } = obj;

  //   console.log(value);
  //   if (value.includes('watch')) {
  //   }
  // });

  document.body.appendChild(document.createElement('style')).textContent = `
    ytd-two-column-browse-results-renderer, ytd-shorts {
    display: none !important;
  }`;

  document.body.appendChild(document.createElement('style')).textContent = `
    div#secondary-inner{
    display: none;
  }`;
})();
