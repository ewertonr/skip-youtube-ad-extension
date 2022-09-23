window.addEventListener('load', main, false);

function main(event) {
  setInterval(function() {
    var b = document.getElementsByClassName('ytp-ad-skip-button-container')[0];
    if (b) {
      b.click();
    }
  }, 3000);
}
