// Add event listener to navbar toggler
document.addEventListener("DOMContentLoaded", function () {
  const navbarToggler = document.querySelector(".navbar-toggler");
  navbarToggler.addEventListener("click", function () {
      document.querySelector(".navbar-collapse").classList.toggle("show");
  });
});

// Add smooth scrolling to navbar links
document.querySelectorAll(".nav-link").forEach(function (link) {
  link.addEventListener("click", function (event) {
      event.preventDefault();
      const target = document.querySelector(link.getAttribute("href"));
      target.scrollIntoView({ behavior: "smooth" });
  });
});