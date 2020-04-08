'use strict';
/* eslint-disable */
(function () {
  var phoneMask = IMask(
    document.getElementById('phone-mask'), {
      mask: '+{7}(000)000-00-00'
    });
})();
/* eslint-enable */

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

'use strict';
/* eslint-disable */
(function () {
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
/* eslint-enable */
