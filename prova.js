const menuIcon = document.querySelector('.menu-icon');
const menuList = document.querySelector('.menu-list');
const menu = document.querySelector('.menu');

menuIcon.addEventListener('click', () => {
  menu.classList.toggle('menu-open');
});
