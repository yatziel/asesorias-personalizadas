'use strict';

/* const menuButton = document.getElementById('menuButton');
const menuMobile = document.getElementById('menuMobile');

menuButton.addEventListener('click', () => { menuMobile.classList.toggle('menu-show') });

document.querySelectorAll('.header-a').forEach( (n) => n.addEventListener('click', () => { menuMobile?.classList.remove('menu-show') }) );

 */

var acc = document.getElementsByClassName('faqs-question');
for (var i = 0; i < acc.length; i++) {
  acc[i].addEventListener('click', function () {
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


const heroTitles = document.querySelectorAll('.hero-title');
const heroImages = document.querySelectorAll('.hero-image');



setInterval(function () {
	heroTitles[i].classList.remove('active');
	heroImages[i].classList.remove('active');
	i++;

	if (i >= heroTitles.length) {
		i = 0;
	}
	if (i >= heroImages.length) {
		i = 0;
	}

	heroTitles[i].classList.add('active');
	heroImages[i].classList.add('active');
}, 3000);