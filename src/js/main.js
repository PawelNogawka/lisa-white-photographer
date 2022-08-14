const burger = document.querySelector(".nav__hamburger");

const nav = document.querySelector(".nav");
const navLink = document.querySelectorAll(".nav__link");

navLink.forEach((link) => {
  link.addEventListener("click", function () {
    nav.classList.remove("change");
  });
});

function handleNav() {
  nav.classList.toggle("change");
}

window.addEventListener("scroll", function () {
    console.log("ok")
  const navDesktop = document.querySelector(".nav--desktop");
  
  navDesktop.classList.toggle("nav--sticky",window.scrollY > 0);
});

burger.addEventListener("click", handleNav);
