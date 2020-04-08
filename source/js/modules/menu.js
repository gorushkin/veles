'use strict';

(function () {
  var menu = document.querySelector('.header__menu');
  var menuToggle = document.querySelector('.header__menu-btn');
  var body = document.body;

  function showMenu(evt) {
    evt.preventDefault();
    menu.classList.toggle('header__menu--show');
    menuToggle.classList.toggle('header__menu-btn--changeIcon');
    body.classList.toggle('stop-scrolling');
  }

  if (menu && menuToggle) {
    menu.classList.remove('header__menu--nojs');
    menuToggle.classList.remove('header__menu-btn--nojs');

    menuToggle.addEventListener('click', showMenu);
  }
})();
