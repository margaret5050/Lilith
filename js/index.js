const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
  });

  navLinks.forEach((link, index) => {
    link.style.animation = `navLinksFade 0.5s ease forwards ${index / 7 + 2}s`;
  });
};

navSlide();

const acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    const panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

const glossary = document.getElementById("glossary");

glossary.addEventListener("click", function () {
  const accordians = document.getElementsByClassName("accordion");

  for (i = 0; i < accordians.length; i++) {
    if (acc[i].style.display === "block") {
      acc[i].style.display = "none";
    } else {
      acc[i].style.display = "block";
    }
  }
});
