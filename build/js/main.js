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

'use strict';

(function () {
  const btn = document.querySelector('#login');
  const overlay = document.querySelector('.overlay');
  const popup = document.querySelector('.popup');
  const inputEmail = popup.querySelector('input[type="email"]');
  const inputPassword = popup.querySelector('input[type="password"]');
  const submitPopupBtn = popup.querySelector('button[type="submit"]');
  const closePopupBtn = document.querySelector('.popup__close');
  const body = document.querySelector('body');
  const bodyLock = window.innerWidth - document.querySelector('body').offsetWidth;

  const showPopup = function () {
    overlay.classList.add('js-display-block');
    popup.classList.add('js-display-block');

    if (document.querySelector('body').offsetWidth >= 1024) {
      body.classList.add('js-overflow-hidden');
      body.style.marginLeft = `-${bodyLock - 10}px`;
    }
  };

  const hidePopup = function () {
    overlay.classList.remove('js-display-block');
    popup.classList.remove('js-display-block');
    btn.addEventListener('click', openPopupHandler);
    submitPopupBtn.removeEventListener('click', submitPopupBtnHandler);

    if (body.classList.contains('js-overflow-hidden')) {
      body.classList.remove('js-overflow-hidden');
    }
    body.style.marginLeft = '0';
  };

  const openPopupHandler = function () {
    showPopup();
    if (popup) {
      inputEmail.focus();
      overlay.addEventListener('click', overlayPressHandler);
      document.addEventListener('keydown', escPressHandler);
      closePopupBtn.addEventListener('click', closePopupBtnHandler);
      btn.removeEventListener('click', openPopupHandler);
      submitPopupBtn.addEventListener('click', submitPopupBtnHandler);
    }
  };

  const closePopupBtnHandler = function () {
    if (popup) {
      hidePopup();
    }
  };

  var submitPopupBtnHandler = function (evt) {
    if (popup) {
      if (inputEmail.value && inputPassword.value) {
        evt.preventDefault();
      }
    }
  };

  var overlayPressHandler = function (evt) {
    if (!evt.target.closest('#popup')) {
      hidePopup();
    }
  };

  var escPressHandler = function (evt) {
    if (evt.key === 'Escape') {
      hidePopup();
    }
  };

  if (btn) {
    btn.addEventListener('click', openPopupHandler);
  }
})()
