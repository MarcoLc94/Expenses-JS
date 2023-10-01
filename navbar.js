const navBar = document.querySelector(".js-navbar-menu");
const nav = document.querySelector(".js-navbar");
const main = document.querySelector(".js-main");
navBar.addEventListener("click", () => {
  nav.classList.toggle("navbar--open");
  main.classList.toggle("section");
});
