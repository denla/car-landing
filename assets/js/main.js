/*=============== SHOW MENU ===============*/
console.log();
const nav_toggle = document.querySelector('.nav__toggle');
const nav_close = document.querySelector('.nav__close');
const nav_menu = document.querySelector('.nav__menu');
nav_toggle.addEventListener('click', openMenu);
nav_menu.addEventListener('click', closeMenu);

function openMenu() {
  nav_menu.classList.add('openedMenu');
}

function closeMenu() {
  nav_menu.classList.remove('openedMenu');
}

/*=============== REMOVE MENU MOBILE ===============*/

/*=============== CHANGE BACKGROUND HEADER ===============*/

/*=============== POPULAR SWIPER ===============*/

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  spaceBetween: 48,
  slidesPerView: 3,
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    dinamicBullets: true,
  },

  // Navigation arrows
  //   navigation: {
  //     nextEl: '.swiper-button-next',
  //     prevEl: '.swiper-button-prev',
  //   },

  // And if we need scrollbar
  //   scrollbar: {
  //     el: '.swiper-scrollbar',
  //   },
});

/*=============== MIXITUP FILTER FEATURED ===============*/

var mixer = mixitup('.featured', {
  selectors: {
    target: '.popular__card',
  },
  animation: {
    duration: 300,
    applyPerspective: false,
  },
});

/* Link active featured */

/*=============== SHOW SCROLL UP ===============*/

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

/*=============== SCROLL REVEAL ANIMATION ===============*/
