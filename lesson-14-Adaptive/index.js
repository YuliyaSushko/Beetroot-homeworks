const nav = document.getElementById('nav');
nav.addEventListener('click', () => {
  nav.classList.toggle('active')  
});


const burgerBtn = document.getElementById("nav");
const headerNavigation = document.getElementById("js-header-navigation");

burgerBtn.addEventListener("click", () => {
  burgerBtn.classList.toggle("nav--open");
  headerNavigation.classList.toggle("header__navigation--show");
});

const links = document.getElementsByClassName("js-link");

for (const item of links) {
  item.addEventListener("click", () => {
    burgerBtn.classList.remove("nav--open");
    headerNavigation.classList.remove("header__navigation--show");
  });
}