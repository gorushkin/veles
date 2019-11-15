'use strict';

(function() {
  console.log('test');
  var menu = document.querySelector('.breadcrumbs__list');
  var menuToggle = document.querySelector('.header__menu-btn');

  menu.classList.remove('breadcrumbs__list--nojs');
  menuToggle.classList.remove('header__menu-btn--nojs');

  menuToggle.addEventListener('click', function(evt) {
    evt.preventDefault();
    menu.classList.toggle('breadcrumbs__list--show');
    menuToggle.classList.toggle('header__menu-btn--changeIcon');
  })

})();
