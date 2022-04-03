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
const sr = ScrollReveal({
  origin: "top",
  distance: "50px",
  duration: 2000,
  delay: 400,
  //reset: true
});

// Home animation

sr.reveal("h1");
sr.reveal("#home--divCarMission", { delay: 500 });
sr.reveal("#home--imgCar", { delay: 600 });
sr.reveal("#home--specifications", { delay: 700 });
sr.reveal("#home--start", { delay: 700, origin: "bottom" });

// About Animation
sr.reveal("#about--container1", { delay: 500 });
sr.reveal("#about--container2", { delay: 500 });

// Popular Animation
sr.reveal("#popular--title", { delay: 500 });

// More features Animation
sr.reveal("#more-features--h1", { delay: 500 });
sr.reveal("#more-features--imgCar", { delay: 500, origin: "bottom" });
sr.reveal("#more-features--map", { delay: 800 });
sr.reveal("#more-features--div1", { delay: 1000, origin: "left" });
sr.reveal("#more-features--div2", { delay: 1000, origin: "right" });
sr.reveal("#more-features--div3", { delay: 1000, origin: "left" });

// Initialize Swiper Popular
let swiperPopular = new Swiper(".popular--container", {
  loop: true,
  spaceBetween: 30,
  slidesPerView: "auto",
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1.2,
    },
    575: {
      slidesPerView: 2.2,
    },
    1024: {
      slidesPerView: 3.2,
    },
  },
});
