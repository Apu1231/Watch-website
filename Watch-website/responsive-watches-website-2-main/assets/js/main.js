/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
  navToggle = document.getElementById('nav-toggle'),
  navClose = document.getElementById('nav-close')

/*  MENU SHOW */
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu')
  })
}
/* MENU HIDDEN*/
if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu')
  })
}
/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')
const linkAction = () => {
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))
/*=============== SWIPER WACTHES ===============*/
const swiperWatches = new Swiper('.home__swiper', {
  loop: true,
  spaceBetween: 32,
  grabCursor: true,
  effect: 'creative',
  creativeEffect: {
    prev: {
      translate: [-100, 0, -500],
      rotate: [0, 0, 15],
      opacity: 0
    },
    next: {
      translate: [100, 0, -500],
      rotate: [0, 0, -15],
      opacity: 0
    },
  },
  pagination: {
    el: '.swiper-pagination',
    clickable:true,
  },
})
/*   This code is not working   timinfg 24:44*/




// /*=============== GSAP ANIMATION ===============*/
gsap.from('.home__images', 1.5, { opacity: 0, y: 150, dealy: .1 })
gsap.from('.home__data', 1.8, { opacity: 0, x: -100, dealy: .8 })
gsap.from('.home__info', 1.8, { opacity: 0, y: 150, dealy: 1 })