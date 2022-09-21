const burgerBtn = document.getElementById('js-burger');
const headerNavigation = document.getElementById('js-header-navigation');

burgerBtn.addEventListener('click', () => {
  burgerBtn.classList.toggle('burger--open')
  headerNavigation.classList.toggle('header__navigation--show')
});

const links = document.getElementsByClassName('js-link');

for (const link of links) {
  link.addEventListener('click', () => {
    burgerBtn.classList.remove('burger--open');
    headerNavigation.classList.remove('header__navigation--show');
  });
}