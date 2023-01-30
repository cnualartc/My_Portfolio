const menu = document.getElementById('hamburger');
const wrapper = document.querySelector('.top');
const nav = document.querySelector('.menu');
const listWrapper = document.querySelector('.desktop-menu-list-container');
const list = document.querySelector('.desktop-menu-list');

function showMobileMenu() {
  wrapper.classList.add('mobile-button-clicked');
  nav.classList.add('mobile-navbar');
  listWrapper.classList.add('visible');
  list.classList.add('mobile-menus');
  menu.classList.add('cancel-button');
  menu.src = '/images/header/icon-cancel.svg';
}

function hideMobileMenu() {
  wrapper.classList.remove('mobile-button-clicked');
  nav.classList.remove('mobile-navbar');
  listWrapper.classList.remove('visible');
  list.classList.remove('mobile-menus');
  menu.classList.remove('cancel-button');
  menu.src = './images/header/burger_menu.png';
}

menu.onclick = () => {
  if (menu.classList.contains('cancel-button')) {
    hideMobileMenu();
  } else {
    showMobileMenu();
  }
};

