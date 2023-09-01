'use strict';
const menuButton = document.getElementById('menuButton');
const menuMobile = document.getElementById('menuMobile');
menuButton.addEventListener('click', () => { menuMobile.classList.toggle('menu-show'); });
document.querySelectorAll('.header-a').forEach((n) => n.addEventListener('click', () => { menuMobile === null || menuMobile === void 0 ? void 0 : menuMobile.classList.remove('menu-show'); }));
