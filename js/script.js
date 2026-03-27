const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("section");
const faders = document.querySelectorAll(".fade");

// smooth scroll
function scrollToSection(id) {
  const target = document.getElementById(id);

  window.scrollTo({
    top: target.offsetTop - 70,
    behavior: "smooth"
  });
}

// click nav
navLinks.forEach(link => {
  link.addEventListener("click", function(e) {
    const id = this.getAttribute("href").substring(1);
    const target = document.getElementById(id);

    if (target) {
      e.preventDefault();
      scrollToSection(id);
    }
  });
});

// scroll active + fade
window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach(section => {
    const top = section.offsetTop - 100;
    const height = section.clientHeight;

    if (window.scrollY >= top && window.scrollY < top + height) {
      current = section.id;
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });

  faders.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add("show");
    }
  });
});