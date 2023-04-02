const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.navigation');
if (hamburger != null) {
  hamburger.addEventListener(
    'click',
    function () {
      this.classList.toggle('is-active');
      menu.classList.toggle('open');
    },
    false
  );
}
