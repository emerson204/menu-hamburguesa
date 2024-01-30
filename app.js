document.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".menu");
  const nav = document.querySelector(".navegacion");

  menu.addEventListener("click", () => {
    nav.classList.toggle("nav-block");
  });
});
