// Load Styles
import '../scss/main.scss';

// Load Bootstrap init
import {initBootstrap} from "./bootstrap.js";

// Load Swiper init
import Swiper from 'swiper/bundle';

// Loading bootstrap with optional features
initBootstrap({
  tooltip: false,
  popover: false,
  toasts: false,
});

// Your app code
//console.log(`Hello ${process.env.HELLO}`);

// Hero Slider
let heroSlider = document.querySelector(".heroslider__swiper");
if (typeof(heroSlider) != 'undefined' && heroSlider != null) {
  let heroMainSlider = new Swiper(heroSlider, {
    slidesPerView: 1,
    direction: "horizontal",
    loop: heroSlider.childElementCount <= 1 ? false : true,
    effect: "fade",
    //watchOverflow: true,
    fadeEffect: {
      crossFade: true
    },
    autoHeight: true,
    centeredSlides: true,
    speed: 2000,
    autoplay: { delay: 8000, disableOnInteraction: false }, //false,
    keyboard: { enabled: true },
    pagination: false, //{ el: ".swiper-pagination", clickable: true },
    navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }
  });
}
let sliderKenBurn = document.querySelectorAll('.swiper-kenburn .swiper-slide img');
for (var i = 0; i < sliderKenBurn.length; i++) {
  var  _this_transform_origin= sliderKenBurn[i].dataset.transformOrigin;
  if( _this_transform_origin != undefined ) {
    sliderKenBurn[i].style.transformOrigin = _this_transform_origin;
  }
}

// Cursor
var cursor = document.querySelector('.cursor');
var clickable = document.querySelectorAll('a, button, input, .swiper-button-prev, .swiper-button-next');
if (typeof(cursor) != 'undefined' && cursor != null) {
  document.addEventListener('mousemove', function(e) {
      var x = e.clientX;
      var y = e.clientY;
      cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
  });
  clickable.forEach(item => {
      item.addEventListener('mouseover', () => {
          cursor.classList.add('hover');
      });
      item.addEventListener('mouseleave', () => {
          cursor.classList.remove('hover');
      });
  })
}