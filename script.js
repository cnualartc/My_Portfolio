const menu = document.getElementById('hamburger');
const wrapper = document.querySelector('.top');
const nav = document.querySelector('.menu');
const listWrapper = document.querySelector('.desktop-menu-list-container');
const list = document.querySelector('.desktop-menu-list');
const popup = document.querySelector('.popup-container');
const popupTitle = document.querySelector('.popup-title');
const popupImage = document.getElementById('popup-image');
const description = document.querySelector('.popup-description');
const modalButton = document.querySelectorAll('.see-project-button');
const closeButton = document.querySelector('.popup-close-button');

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

const projectInfo = [
  {
    name: 'Topic',
    specs: ['Canopy', 'Back End Dev', 2015],
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    tools: ['HTML', 'CSS', 'JavaScript'],
    image: './images/works/image1.svg',
  },
  {
    name: 'Multi-Post Stories',
    specs: ['Canopy', 'Back End Dev', 2015],
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    tools: ['HTML', 'CSS', 'JavaScript'],
    image: './images/works/image2.svg',
  },
  {
    name: 'Topic',
    specs: ['Canopy', 'Back End Dev', 2015],
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    tools: ['HTML', 'CSS', 'JavaScript'],
    image: './images/works/image3.svg',
  },
  {
    name: 'Multi-Post Stories',
    specs: ['Canopy', 'Back End Dev', 2015],
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    tools: ['HTML', 'CSS', 'JavaScript'],
    image: './images/works/image4.svg',
  },
];

function showModal(index) {
  const project = projectInfo[index];
  popupTitle.textContent = project.name;
  popupImage.src = project.image;
  description.textContent = project.description;
  popup.style.display = 'block';
  document.body.style.maxHeight = '100vh';
  document.body.style.overflow = 'hidden';
  window.scrollTo(0, 0);
}

function hideModal() {
  popup.style.display = 'none';
  document.body.style.maxHeight = 'auto';
  document.body.style.overflow = 'auto';
}

modalButton.forEach(element => element.addEventListener('click', (e) => {
  showModal(e.target.dataset.id);
}));

closeButton.addEventListener('click', hideModal);