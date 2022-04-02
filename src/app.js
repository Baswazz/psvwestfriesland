import Splide from "@splidejs/splide";

// //Smooth scroll anchor https://stackoverflow.com/a/7717572
// document
//   .querySelectorAll('#mobile-nav a[href^="#"], #main-nav a[href^="#"]')
//   .forEach(function (anchor) {
//     anchor.addEventListener("click", function (event) {
//       event.preventDefault();

//       // Hide mobile nav on click
//       if (event.target.closest("#mobile-nav")) {
//         document.querySelector("#mobile-nav").classList.remove("active");
//         document.querySelector("#nav-burger").classList.remove("active");
//       }

//       document.querySelector(this.getAttribute("href")).scrollIntoView({
//         behavior: "smooth"
//       });
//     });
//   });

// // Observer active section
// const sections = document.querySelectorAll(".section");
// const options = {
//   threshold: 0.55
// };

// const observer = new IntersectionObserver(function (entries, observer) {
//   entries.forEach(function (entry) {
//     const id = entry.target.getAttribute("id");
//     const hrefs = document.querySelectorAll(`a[href="#${id}"]`);
//     if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
//       hrefs.forEach(function (href) {
//         href.classList.add("active");
//       });
//     } else {
//       hrefs.forEach(function (href) {
//         href.classList.remove("active");
//       });
//     }
//   });
// }, options);

// sections.forEach(function (section) {
//   observer.observe(section);
// });

// Mobile navigation
const mobileNav = document.getElementById("mobile-nav");
const navToggle = document.getElementById("mobile-nav-toggle");

navToggle.addEventListener("click", function () {
  const visibility = navToggle.getAttribute("aria-expanded");

  if (visibility === "false") {
    navToggle.setAttribute("aria-expanded", true);
    mobileNav.setAttribute("data-visible", true);
  } else if (visibility === "true") {
    navToggle.setAttribute("aria-expanded", false);
    mobileNav.setAttribute("data-visible", false);
  }
});

document.querySelectorAll("#mobile-nav ul li a").forEach(function (e) {
  e.addEventListener("click", function () {
    navToggle.setAttribute("aria-expanded", false);
    mobileNav.setAttribute("data-visible", false);
  });
});

// Splidejs
new Splide(".splide ").mount();
