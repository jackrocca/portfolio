// Existing code for menu toggle on small screens and resize listener
const menu = document.getElementById("menu");
const ulMenu = document.getElementById("ulMenu");

window.addEventListener("resize", menuResize);

function menuResize() {
  const window_size = window.innerWidth || document.body.clientWidth;
  if (window_size > 640) {
    menu.classList.remove("h-40");
  }
}

function menuToggle() {
  menu.classList.toggle("h-40");
  // Add a transition duration that matches the Alpine.js transition
  menu.style.transition = "all 1s ease-out";
}
