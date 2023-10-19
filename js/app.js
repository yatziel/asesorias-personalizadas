'use strict';

/* Button Toggle Navbar Mobile */
var menuButton = document.getElementById('menuButton');
var menuMobile = document.getElementById('menuMobile');
menuButton.addEventListener('click', function () {
  menuMobile.classList.toggle('menu-show');
});
document.querySelectorAll('.header-a').forEach(function (n) {
  return n.addEventListener('click', function () {
    menuMobile.classList.remove('menu-show');
  });
});

/* Hero Transition: Titles and Images */

var heroTitles = document.querySelectorAll('.hero-title');
var heroImages = document.querySelectorAll('.hero-image');
var i = 0;
setInterval(function () {
  // heroTitles[i].classList.remove('active')
  heroImages[i].classList.remove('active');
  i++;
  if (i >= heroImages.length) {
    i = 0;
  }

  // heroTitles[i].classList.add('active')
  heroImages[i].classList.add('active');
}, 5000);

/* Programs Slider */

var prevButton = document.getElementById('prev');
var nextButton = document.getElementById('next');
var items = document.querySelectorAll('.advisories-program');
var j = 0;
function updateButtons() {
  prevButton.disabled = j === 0;
  nextButton.disabled = j === items.length - 1;
}
function setActiveItem() {
  items.forEach(function (item, index) {
    item.classList.toggle('active', index === j);
  });
}
function handleButtonClick(increment) {
  j += increment;
  setActiveItem();
  updateButtons();
}
prevButton.addEventListener('click', function () {
  if (j > 0) {
    handleButtonClick(-1);
  }
});
nextButton.addEventListener('click', function () {
  if (j < items.length - 1) {
    handleButtonClick(1);
  }
});

// Inicializa el estado de los botones al cargar la página
updateButtons();

/* Testimonials Transition */

var testSlider = document.querySelector('.testimonials-slides');
var testSlide = document.querySelectorAll('.testimonials-slide');
var testSlideLast = testSlide[testSlide.length - 1];
testSlider.insertAdjacentElement('afterbegin', testSlideLast);
function nextSilder() {
  var testSlideFirst = document.querySelectorAll('.testimonials-slide')[0];
  testSlider.style.marginLeft = '-200%';
  testSlider.style.transition = 'all 1s';
  setTimeout(function () {
    testSlider.style.transition = 'none';
    testSlider.insertAdjacentElement('beforeend', testSlideFirst);
    testSlider.style.marginLeft = '-100%';
  }, 1000);
}
setInterval(function () {
  nextSilder();
}, 7000);

/* Toggle FAQs */

var acc = document.getElementsByClassName('faqs-question');
for (var _i = 0; _i < acc.length; _i++) {
  acc[_i].addEventListener('click', function () {
    this.classList.toggle('faqs-question__active');
    this.lastElementChild.classList.toggle('faqs-icon__active');
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + 'px';
    }
  });
}