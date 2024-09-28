// Sticky Navbar on Scroll
window.addEventListener("scroll", function () {
  var navbar = document.getElementById("navbar");
  if (window.pageYOffset > 50) {
    navbar.style.background = "#111";
  } else {
    navbar.style.background = "#222";
  }
});
