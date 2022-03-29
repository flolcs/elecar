//Navbar
const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("#top-page nav ul li");
let current = "";

window.onscroll = () => {
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (scrollY >= sectionTop - 60) {
      current = section.getAttribute("id");
    }
  });
  navLi.forEach((li) => {
    li.classList.remove("active");
    if (li.className === current) {
      li.classList.add("active");
    }
  });
};

// Menu
const toggleMenu = document.querySelector("#btn-menu");
const toggleCloseMenu = document.querySelector("#btn-close");
const sousMenu = document.querySelector("#sous-menu");
console.log(toggleCloseMenu);

toggleMenu.addEventListener("click", () => {
  sousMenu.style.visibility = "visible";
  toggleMenu.style.visibility = "hidden";
  toggleCloseMenu.style.visibility = "visible";
});

toggleCloseMenu.addEventListener("click", () => {
  sousMenu.style.visibility = "hidden";
  toggleMenu.style.visibility = "visible";
  toggleCloseMenu.style.visibility = "hidden";
});
