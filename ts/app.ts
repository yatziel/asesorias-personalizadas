'use strict';

/* Button Toggle Navbar Mobile */

const menuButton = (document.getElementById('menuButton') as HTMLButtonElement)
const menuMobile = (document.getElementById('menuMobile')	as HTMLElement)

menuButton.addEventListener('click', () : void => { menuMobile.classList.toggle('menu-show') })
document.querySelectorAll('.header-a').forEach( (n) => n.addEventListener('click', () : void  => { menuMobile.classList.remove('menu-show') }) )

/* Hero Transition: Titles and Images */

const heroTitles = (document.querySelectorAll('.hero-title') as NodeList)
const heroImages = (document.querySelectorAll('.hero-image') as NodeList)

let i : number = 0

setInterval ( function () {
		// heroTitles[i].classList.remove('active')
		heroImages[i].classList.remove('active')
		i++

		if (i >= heroImages.length) { i = 0 }

		// heroTitles[i].classList.add('active')
		heroImages[i].classList.add('active')

	}, 5000
)


/* Programs Slider */


const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const items = document.querySelectorAll('.advisories-program');
let j = 0;

function updateButtons() {
	prevButton.disabled = j === 0;
	nextButton.disabled = j === items.length - 1;
}

function setActiveItem() {
	items.forEach((item, index) => {
		item.classList.toggle('active', index === j);
	});
}

function handleButtonClick(increment) {
	j += increment;
	setActiveItem();
	updateButtons();
}

prevButton.addEventListener('click', () => {
	if (j > 0) {
		handleButtonClick(-1);
	}
});

nextButton.addEventListener('click', () => {
	if (j < items.length - 1) {
		handleButtonClick(1);
	}
});

// Inicializa el estado de los botones al cargar la página
updateButtons();




/* Testimonials Transition */

const testSlider = document.querySelector('.testimonials-slides')
let testSlide = document.querySelectorAll('.testimonials-slide')
let testSlideLast = testSlide[testSlide.length - 1]

testSlider.insertAdjacentElement('afterbegin', testSlideLast )

function nextSilder () {
	
	let testSlideFirst = document.querySelectorAll('.testimonials-slide')[0]

	testSlider.style.marginLeft = '-200%'
	testSlider.style.transition = 'all 1s'
	
	setTimeout( function() {
		testSlider.style.transition = 'none'
		testSlider.insertAdjacentElement('beforeend', testSlideFirst)
		testSlider.style.marginLeft = '-100%'
	}, 1000 )
}

setInterval( function () {
	nextSilder()
}, 7000)

/* Toggle FAQs */

const acc = document.getElementsByClassName('faqs-question');

for (let i = 0; i < acc.length; i++) {
	acc[i].addEventListener('click', function () {
		this.classList.toggle('faqs-question__active');
		this.lastElementChild.classList.toggle('faqs-icon__active');
		const panel = this.nextElementSibling;
		if (panel.style.maxHeight) {
			panel.style.maxHeight = null;
		} else {
			panel.style.maxHeight = panel.scrollHeight + 'px';
		}
	});
} 


