const menu = document.querySelector("#mobile-menu");
const menuItems = document.querySelector(".navbar-menu");
const links = document.querySelectorAll(".navbar-links");

// Display mobile menu
menu.addEventListener("click", () => {
  menu.classList.toggle("is-active");
  menuItems.classList.toggle("active");
});

for (i = 0; i < links.length; i++) {
  links[i].addEventListener("click", () => {
    if (menu.classList.contains("is-active")) {
      menu.classList.toggle("is-active");
      menuItems.classList.toggle("active");
    }
  });
}
