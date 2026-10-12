// Menu button for phones: click ☰ to show the links, click ✕ to hide them again
// button.js is loaded at the bottom of <body>, so the button and the links already exist when it runs
// my friend made this for me, I just changed the class names to match my HTML and CSS :D
const hamburger = document.getElementById("hamburger");
const menuLinks = document.getElementById("menu-links");

hamburger.addEventListener("click", () => {
  menuLinks.classList.toggle("active");
  if (menuLinks.classList.contains("active")) {
    hamburger.textContent = "✕";
  } else {
    hamburger.textContent = "☰";
  }
});
