// script.js

document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.getElementById("nav-toggle");
  const mainNav = document.getElementById("main-nav");
// nagn
  // Toggle nav panel on hamburger click
  navToggle.addEventListener("click", () => {
    mainNav.classList.toggle("open");
    navToggle.classList.toggle("open");
  });

  // Optional: close nav when a link is clicked (mobile UX)
  document.querySelectorAll("#main-nav a").forEach(link => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("open");
      navToggle.classList.remove("open");
    });
  });
});
