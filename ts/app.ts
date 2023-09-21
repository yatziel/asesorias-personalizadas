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
		heroTitles[i].classList.remove('active')
		heroImages[i].classList.remove('active')
		i++

		if (i >= heroImages.length) { i = 0 }

		heroTitles[i].classList.add('active')
		heroImages[i].classList.add('active')

	}, 3000
)


/* Programs Slider */

const program = document.querySelectorAll('.advisories-program')

const buttonPrev = document.getElementsByClassName('btn-left')
const buttonNext = document.getElementsByClassName('btn-rigth')

/* let p: number = 0;

function nextProgram() {
	program[p].classList.remove('active')
	p++

	if(p >= program.length) { p = 0 }

	program[p].classList.add('active');
}
 */


let p: number = 0;
 setInterval(function () {
	program[p].classList.remove('active');
	p++;

	if (p >= program.length) {
		p = 0;	
	}

	program[p].classList.add('active');
}, 3000);






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