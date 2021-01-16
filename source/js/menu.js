'use strict';

(function () {
  const menu = document.querySelector('.main-nav');
  const menuBtn = menu.querySelector('.main-nav__toggle');
  const header = document.querySelector('.page-header');

  const hideMenu = function () {
    if (header && header.classList.contains('page-header--no-js')) {
      header.classList.remove('page-header--no-js');
    }

    if (menu && menu.classList.contains('main-nav--no-js')) {
      menu.classList.add('main-nav--closed');
      menu.classList.remove('main-nav--open');
      menu.classList.remove('main-nav--no-js');
    }
  };

  const toggleMenu = function () {
    menu.classList.toggle('main-nav--closed');
    menu.classList.toggle('main-nav--open');
    header.classList.toggle('js-bg');
  };

  hideMenu();
  menuBtn.addEventListener('click', toggleMenu);
})();
