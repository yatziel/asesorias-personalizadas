'use strict';
var menuButton = document.getElementById('menuButton');
var menuMobile = document.getElementById('menuMobile');
menuButton.addEventListener('click', function () { menuMobile.classList.toggle('menu-show'); });
document.querySelectorAll('.header-a').forEach(function (n) { return n.addEventListener('click', function () { menuMobile === null || menuMobile === void 0 ? void 0 : menuMobile.classList.remove('menu-show'); }); });
