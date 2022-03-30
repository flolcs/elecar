// Menu
const toggleMenu = document.querySelector("#btn-menu");
const toggleCloseMenu = document.querySelector("#btn-close");
const sousMenu = document.querySelector("#sous-menu");

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
    if (document.documentElement.clientWidth < 768) {
      sousMenu.style.visibility = "hidden";
      toggleCloseMenu.style.visibility = "hidden";
      toggleMenu.style.visibility = "visible";
    }
  });
};

// Animation
const srTop = ScrollReveal({
  origin: "top",
  distance: "50px",
  duration: 2000,
  delay: 400,
  //reset: true
});

const srBot = ScrollReveal({
  origin: "bottom",
  distance: "50px",
  duration: 2000,
  delay: 400,
  //reset: true
});

// Home animation

srTop.reveal("h1");
srTop.reveal("#home--divCarMission", { delay: 500 });
srTop.reveal("#home--imgCar", { delay: 600 });
srBot.reveal("#home--specifications", { delay: 700 });
srBot.reveal("#home--start", { delay: 700 });

// About Animation
srTop.reveal("#about--container1", { delay: 500 });
srTop.reveal("#about--container2", { delay: 500 });
