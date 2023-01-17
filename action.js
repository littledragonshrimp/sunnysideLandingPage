const burgerMenu = document.querySelector(".fa-solid");
const hiddenMenu = document.querySelector(".nav-links");

burgerMenu.addEventListener("click", function () {
  hiddenMenu.classList.toggle("shown");
});