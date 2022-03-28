//Navbar
const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("#top-page nav ul li");
let current = "";

//Navbar
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
