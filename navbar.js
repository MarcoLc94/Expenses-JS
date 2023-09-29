const navBar = document.querySelector(".js-navbar-menu");
const nav = document.querySelector(".js-navbar");
navBar.addEventListener("click", () => {
  navBar.classList.toggle("navbar--open");
});
