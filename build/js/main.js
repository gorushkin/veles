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

'use strict';
// var pageHeader = document.querySelector('.page-header');
// var headerToggle = document.querySelector('.page-header__toggle');

// pageHeader.classList.remove('page-header--nojs');

// headerToggle.addEventListener('click', function () {
//   if (pageHeader.classList.contains('page-header--closed')) {
//     pageHeader.classList.remove('page-header--closed');
//     pageHeader.classList.add('page-header--opened');
//   } else {
//     pageHeader.classList.add('page-header--closed');
//     pageHeader.classList.remove('page-header--opened');
//   }
// });

(function() {
  var swiper = new Swiper('.swiper-container', {
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

})();
